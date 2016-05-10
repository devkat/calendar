package net.devkat.caldav

import akka.actor.Actor
import akka.actor.ActorLogging
import akka.stream.ActorMaterializer
import akka.stream.ActorMaterializerSettings
import akka.http.scaladsl.Http
import akka.http.scaladsl.client.RequestBuilding._
import akka.http.scaladsl.model.HttpResponse
import akka.http.scaladsl.model.StatusCodes
import akka.util.ByteString
import akka.actor.ActorRef

class CaldavClientActor(next: ActorRef) extends Actor with ActorLogging {

  import akka.pattern.pipe
  import context.dispatcher

  final implicit val materializer: ActorMaterializer =
    ActorMaterializer(ActorMaterializerSettings(context.system))
 
  val http = Http(context.system)
 
  override def preStart() = {
    http.singleRequest(Get("http://akka.io"))
      .pipeTo(self)
  }
 
  def receive = {
    case HttpResponse(StatusCodes.OK, headers, entity, _) => {
      val body = entity.dataBytes.runFold(ByteString(""))(_ ++ _)
      log.info("Got response, body: " + body)
      next ! "test"
    }
    case HttpResponse(code, _, _, _) =>
      log.info("Request failed, response code: " + code)
  }
 
}