package net.devkat.calendar

import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import net.devkat.calendar.Tables.CalendarRow
import net.devkat.calendar.google.GoogleCalendar
import net.devkat.calendar.model.Event
import net.devkat.google.OauthConfig
import org.joda.time.Instant
import org.joda.time.format.ISODateTimeFormat
import spray.json._

import scala.util.Try

trait JsonSupport extends SprayJsonSupport with DefaultJsonProtocol {
  
  implicit object InstantFormat extends RootJsonFormat[Instant] {

    val parser = ISODateTimeFormat.dateOptionalTimeParser()

    def write(obj: Instant): JsValue = {
      JsString(ISODateTimeFormat.basicDateTime.print(obj))
    }

    def read(json: JsValue): Instant = json match {
      case JsString(s) => Try(parser.parseDateTime(s).toInstant).getOrElse(error(s))
      case _ => error(json.toString())
    }

    def error(v: Any): Instant = {
      deserializationError(
        s"""
           |'$v' is not a valid date value. Dates must be in format:
           |     * date-opt-time     = date-element ['T' [time-element] [offset]]
           |     * date-element      = std-date-element | ord-date-element | week-date-element
           |     * std-date-element  = yyyy ['-' MM ['-' dd]]
           |     * ord-date-element  = yyyy ['-' DDD]
           |     * week-date-element = xxxx '-W' ww ['-' e]
           |     * time-element      = HH [minute-element] | [fraction]
           |     * minute-element    = ':' mm [second-element] | [fraction]
           |     * second-element    = ':' ss [fraction]
           |     * offset            = 'Z' | (('+' | '-') HH [':' mm [':' ss [('.' | ',') SSS]]])
           |     * fraction          = ('.' | ',') digit+
        """.stripMargin
      )
    }
  }

  implicit val calendarFormat = jsonFormat5(CalendarRow)
  implicit val googleCalendarFormat = jsonFormat3(GoogleCalendar)
  implicit val oauthConfigFormat = jsonFormat1(OauthConfig)
  implicit val eventFormat = jsonFormat3(Event)

}