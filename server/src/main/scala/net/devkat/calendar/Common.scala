package net.devkat.calendar

import akka.actor.ActorSystem
import akka.stream.ActorMaterializer

object Common {

  implicit val system = ActorSystem("net-devkat-calendar")
  implicit val materializer = ActorMaterializer()
  implicit val executionContext = system.dispatcher

}