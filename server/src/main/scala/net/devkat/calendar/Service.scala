package net.devkat.calendar

import slick.driver.H2Driver.api._

import scala.concurrent.Future
import net.devkat.calendar.Tables.CalendarRow

import scala.xml.NodeSeq
import net.devkat.calendar.db.Db
import net.devkat.calendar.db.Calendars
import net.devkat.caldav.CaldavClient
import net.devkat.caldav.CaldavClient._
import akka.actor.Props
import akka.pattern.ask
import akka.util.Timeout
import net.devkat.calendar.model.Event
import akka.http.scaladsl.client.RequestBuilding._
import akka.http.scaladsl.marshalling.ToResponseMarshallable
import akka.http.scaladsl.model.HttpResponse
import akka.http.scaladsl.model.StatusCodes._
import net.devkat.calendar.google.GoogleCalendarAdapter

import scala.concurrent.duration._

object Service extends JsonSupport {

  import Db._
  import Common._

  implicit val timeout = Timeout(10 seconds)

  def getICal(calendarId: Long): Future[Option[NodeSeq]] =
    Calendars.get(calendarId).flatMap {
    case Some(cal) => CaldavClient.getICal(cal.url).map(Some(_))
    case None => Future(None)
  }

  def getEvents(calendarId: Long): Future[ToResponseMarshallable] =
    Calendars.get(calendarId).map(calOption => calOption match {
      case Some(calendar) => calendar.`type` match {
        case "google" => GoogleCalendarAdapter.getEvents(calendar.url)
      }
      case None => HttpResponse(NotFound)
    })

}