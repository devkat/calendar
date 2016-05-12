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
import net.devkat.calendar.Common
import scala.concurrent.Future
import scala.xml.NodeSeq
import akka.http.scaladsl.marshallers.xml.ScalaXmlSupport
import akka.http.scaladsl.unmarshalling.Unmarshal
import akka.event.Logging

object CaldavClient extends ScalaXmlSupport {

  import Common._
  val http = Http(system)
  
  def getICal(url: String): Future[NodeSeq] =
    http.singleRequest(Get(url)) flatMap {
    case HttpResponse(StatusCodes.OK, headers, entity, _) =>
      Unmarshal(entity).to[NodeSeq]
    case HttpResponse(code, _, entity, _) =>
      Future.failed(new IllegalStateException("Request failed, response code: " + code))
  }

}