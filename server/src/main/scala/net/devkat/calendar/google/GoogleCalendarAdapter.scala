package net.devkat.calendar.google

import net.devkat.google.GoogleCalendarClient

case class GoogleCalendar(id: String, summary: String, description: String)

object GoogleCalendarAdapter {
  
  def getCalendars() =
    GoogleCalendarClient.getCalendars() map { entry =>
      GoogleCalendar(entry.getId, entry.getSummary, entry.getDescription)
    }

}