package net.devkat.calendar

import net.devkat.calendar.Tables.Calendar
import slick.lifted.TableQuery
import slick.driver.H2Driver.api._
import slick.lifted.CaseClassShape
import net.devkat.calendar.Tables.Calendar

object Db {

  val calendars = TableQuery[Calendar]
  
  val db = Database.forConfig("database")
  
}