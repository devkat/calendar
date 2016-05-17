package net.devkat.calendar.db

import slick.lifted.TableQuery
import net.devkat.calendar.Tables.{Calendar, CalendarRow, CalendarType}

import scala.concurrent.Future
import slick.driver.H2Driver.api._

object Calendars {
  
  import Db._
  
  val calendars = TableQuery[Calendar]
  val calendarTypes = TableQuery[CalendarType]
  
  def all(): Future[Seq[CalendarRow]] =
    db.run(calendars.result)

  def get(calendarId: Long): Future[Option[CalendarRow]] =
    db.run(calendars.filter(_.id === calendarId).result.headOption)

  def insert(calendarId: Long, calendar: CalendarRow) =
    db.run(calendars returning calendars.map(_.id) += calendar)

  def update(calendarId: Long, calendar: CalendarRow) =
    db.run(calendars.filter(_.id === calendarId).update(calendar))

  def types(): Future[Seq[String]] =
    db.run(calendarTypes.map(_.id).result)
}