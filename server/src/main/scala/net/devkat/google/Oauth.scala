package net.devkat.google

import com.typesafe.config.ConfigFactory

case class OauthConfig(clientId: String)

object Oauth {
  
  lazy val config = {
    val cfg = ConfigFactory.load().getConfig("google.oauth")
    OauthConfig(cfg.getString("clientId"))
  }
  
}