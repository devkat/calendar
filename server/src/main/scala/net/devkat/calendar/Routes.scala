package net.devkat.calendar

import akka.http.scaladsl.model.ContentTypes._
import akka.http.scaladsl.server.Directives

trait Routes extends Directives with JsonSupport {
  
  import Service._

  val routes =
    pathPrefix("calendars") {
      pathEnd {
        get {
          complete(getCalendars())
        }
      } ~
      path(IntNumber) { id =>
        complete(getCalendar(id))
      }
    }

}