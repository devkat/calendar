package net.devkat.calendar.google

import akka.actor.ActorSystem
import net.devkat.calendar.model.Event
import net.devkat.google.GoogleCalendarClient

import scala.concurrent.Future

case class GoogleCalendar(id: String, summary: String, description: String)

object GoogleCalendarAdapter {

  implicit val system = ActorSystem("net-devkat-calendar")
  implicit val executionContext = system.dispatcher

  def getCalendars(accessToken: String) =
    GoogleCalendarClient.getCalendars(accessToken) map { entry =>
      GoogleCalendar(entry.getId, entry.getSummary, entry.getDescription)
    }

  def getEvents(url: String): Seq[Event] = {
    Seq()
  }

}