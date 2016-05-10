package net.devkat.calendar

import akka.actor.ActorSystem
import akka.stream.ActorMaterializer
import akka.http.scaladsl.Http
import scala.io.StdIn
import com.typesafe.config.ConfigFactory

object WebServer extends App with Routes {
  implicit val system = ActorSystem("net-devkat-calendar")
  implicit val materializer = ActorMaterializer()
  // needed for the future flatMap/onComplete in the end
  implicit val executionContext = system.dispatcher

  val config = ConfigFactory.load()

  val interface = config.getString("http.interface")
  val port = config.getInt("http.port")
  Http().bindAndHandle(routes, interface, port).
    foreach(_ => println(s"Server online at http://$interface:$port."))
}