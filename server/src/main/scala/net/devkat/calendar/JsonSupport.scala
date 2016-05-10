package net.devkat.calendar

import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import spray.json.DefaultJsonProtocol
import net.devkat.calendar.Tables.CalendarRow

trait JsonSupport extends SprayJsonSupport with DefaultJsonProtocol {
  
  implicit val calendarFormat = jsonFormat4(CalendarRow)
  
}