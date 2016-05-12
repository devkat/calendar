package net.devkat.caldav

import org.scalatest.FlatSpec
import org.scalatest.Matchers
import akka.testkit.TestKit
import akka.actor.ActorSystem
import com.typesafe.config.ConfigFactory
import akka.testkit.DefaultTimeout
import akka.testkit.ImplicitSender
import org.scalatest.WordSpecLike
import org.scalatest.BeforeAndAfterAll
import akka.actor.Props
import scala.concurrent.duration._

class CaldavClientSpec extends TestKit(ActorSystem("TestKitUsageSpec",
    ConfigFactory.parseString(TestKitUsageSpec.config)))
  with DefaultTimeout
  with ImplicitSender
  with WordSpecLike
  with Matchers
  with BeforeAndAfterAll {
  
  import TestKitUsageSpec._
  
}

object TestKitUsageSpec {
  // Define your test specific configuration here
  val config = """
    akka {
      loglevel = "WARNING"
    }
    """
}