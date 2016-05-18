package net.devkat.calendar.model

import org.joda.time.Instant

case class Event(
  start: Instant,
  end: Instant,
  description: String
)
