package net.devkat.calendar.db

import slick.driver.H2Driver.api._

object Db {

  val db = Database.forConfig("database")
  
}