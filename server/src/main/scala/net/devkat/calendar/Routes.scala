package net.devkat.calendar

import akka.http.scaladsl.model.ContentTypes._
import akka.http.scaladsl.server.Directives
import net.devkat.calendar.db.Calendars
import akka.http.scaladsl.marshallers.xml.ScalaXmlSupport
import akka.http.scaladsl.model.headers.Authorization
import net.devkat.calendar.Tables.CalendarRow
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
        pathPrefix(IntNumber) { id =>
          pathEnd {
            get {
              complete(Calendars.get(id))
            } ~
            put {
              entity(as[CalendarRow]) { calendar => {
                onSuccess(Calendars.update(id, calendar)) {
                  complete(204, _)
                }
              }}
            }
          } ~
          path("events") {
            get {
              complete(getEvents(id))
            }
          }
        }
      } ~
      /*
      pathPrefix("events") {
        headerValue[Authorization] { authHeader =>
          path(IntNumber) { calendarId =>
            complete(getEvents(authHeader.value, calendarId))
          }
        }
      } ~
      */
      pathPrefix("google") {
        path("config") {
          complete(Oauth.config)
        } ~
        path("calendars") {
          get {
            headerValueByType[Authorization]() { authHeader =>
              complete(GoogleCalendarAdapter.getCalendars(authHeader.credentials.token))
            }
          }
        }
      }
    }

}