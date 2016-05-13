package net.devkat.calendar

import akka.http.scaladsl.model.ContentTypes._
import akka.http.scaladsl.server.Directives
import net.devkat.calendar.db.Calendars
import akka.http.scaladsl.marshallers.xml.ScalaXmlSupport
import net.devkat.calendar.google.GoogleCalendarAdapter
import net.devkat.google.Oauth

trait Routes extends Directives with JsonSupport with ScalaXmlSupport {
  
  import Service._

  val routes =
    pathPrefix("api") {
      path("calendarTypes") {
        get {
          complete(Calendars.types())
        }
      } ~
      pathPrefix("calendars") {
        pathEnd {
          get {
            complete(Calendars.all())
          }
        } ~
        path(IntNumber) { id =>
          complete(Calendars.get(id))
        } ~
        path("ical" / IntNumber) { id =>
          complete(getICal(id))
        }
      } ~
      pathPrefix("google") {
        path("config") {
          complete(Oauth.config)
        } ~
        path("calendars") {
          get {
            complete(GoogleCalendarAdapter.getCalendars())
          }
        }
      }
    }

}