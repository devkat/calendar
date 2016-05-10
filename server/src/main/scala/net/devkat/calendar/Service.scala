package net.devkat.calendar

import slick.driver.H2Driver.api._
import scala.concurrent.Future
import net.devkat.calendar.Tables.CalendarRow

object Service {

  import Db._

  def getCalendars(): Future[Seq[CalendarRow]] =
    db.run(calendars.result)

  def getCalendar(calendarId: Long): Future[Option[CalendarRow]] =
    db.run(calendars.filter(_.id === calendarId).result.headOption)

}