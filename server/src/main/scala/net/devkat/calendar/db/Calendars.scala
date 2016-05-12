package net.devkat.calendar.db

import slick.lifted.TableQuery
import net.devkat.calendar.Tables.Calendar
import scala.concurrent.Future
import net.devkat.calendar.Tables.CalendarRow
import slick.driver.H2Driver.api._

object Calendars {
  
  import Db._
  
  val calendars = TableQuery[Calendar]
  
  def all(): Future[Seq[CalendarRow]] =
    db.run(calendars.result)

  def get(calendarId: Long): Future[Option[CalendarRow]] =
    db.run(calendars.filter(_.id === calendarId).result.headOption)

  
}