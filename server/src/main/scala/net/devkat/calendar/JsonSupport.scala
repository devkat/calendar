package net.devkat.calendar

import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import spray.json.DefaultJsonProtocol
import net.devkat.calendar.Tables.CalendarRow
import net.devkat.calendar.google.GoogleCalendar
import net.devkat.google.OauthConfig

trait JsonSupport extends SprayJsonSupport with DefaultJsonProtocol {
  
  implicit val calendarFormat = jsonFormat5(CalendarRow)
  implicit val googleCalendarFormat = jsonFormat3(GoogleCalendar)
  implicit val oauthConfigFormat = jsonFormat1(OauthConfig)
}