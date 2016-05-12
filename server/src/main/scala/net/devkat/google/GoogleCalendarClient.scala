package net.devkat.google

import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets
import com.google.api.client.json.jackson2.JacksonFactory
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow
import java.io.InputStreamReader
import com.google.api.client.auth.oauth2.Credential
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport
import com.google.api.services.calendar.CalendarScopes
import com.google.api.client.util.store.FileDataStoreFactory
import java.util.Collections
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver
import com.typesafe.config.ConfigFactory
import java.io.StringReader
import com.typesafe.config.ConfigRenderOptions
import com.google.api.services.calendar.model.CalendarList
import com.google.api.services.calendar.model.CalendarListEntry
import scala.collection.convert.wrapAll._

/**
 * https://github.com/google/google-api-java-client-samples/blob/master/calendar-cmdline-sample/src/main/java/com/google/api/services/samples/calendar/cmdline/CalendarSample.java
 */
object GoogleCalendarClient {

  val dataStoreDir = new java.io.File(System.getProperty("user.home"), ".store/calendar")

  lazy val jsonFactory = JacksonFactory.getDefaultInstance()
  lazy val httpTransport = GoogleNetHttpTransport.newTrustedTransport()
  lazy val dataStoreFactory = new FileDataStoreFactory(dataStoreDir)
  lazy val config = ConfigFactory.load().getObject("google_oauth")
  
  lazy val credential = authorize()
  
  /** Authorizes the installed application to access user's protected data. */
  private def authorize(): Credential = {
    // load client secrets
    val configJson = config.render(ConfigRenderOptions.concise())
    val clientSecrets = GoogleClientSecrets.load(jsonFactory, new StringReader(configJson))

    // set up authorization code flow
    val flow = new GoogleAuthorizationCodeFlow.Builder(
        httpTransport, jsonFactory, clientSecrets,
        Collections.singleton(CalendarScopes.CALENDAR)).setDataStoreFactory(dataStoreFactory)
        .build();
    // authorize
    val receiverBuilder = new LocalServerReceiver.Builder()
    receiverBuilder.setHost("localhost")
    receiverBuilder.setPort(23000)
    new AuthorizationCodeInstalledApp(flow, receiverBuilder.build()).authorize("user")
  }

  def getCalendars(): List[CalendarListEntry] = {
    val client = new com.google.api.services.calendar.Calendar.Builder(httpTransport, jsonFactory, credential).
        setApplicationName("Calendar").
        build()
    val feed: CalendarList = client.calendarList().list().execute()
    feed.getItems() match {
      case null => Nil
      case items => List(items: _*)
    }
    
  }

}