import sbt._

object Dependencies {
  val akkaVersion = "2.4.4"
  val slickVersion = "3.1.1"
  val slf4jVersion = "1.6.4"
  val h2Version = "1.3.170"
  val scalaTestVersion = "2.2.6"

  val akkaHttpCore = "com.typesafe.akka" %% "akka-http-core" % akkaVersion
  val akkaHttpExperimental = "com.typesafe.akka" %% "akka-http-experimental" % akkaVersion
  val akkaHttpSprayJson = "com.typesafe.akka" %% "akka-http-spray-json-experimental" % akkaVersion
  val akkaTestKit = "com.typesafe.akka" %% "akka-testkit" % akkaVersion % "test"
  val slick = "com.typesafe.slick" %% "slick" % slickVersion
  val slickCodegen = "com.typesafe.slick" %% "slick-codegen" % slickVersion % "compile"
  val slf4j = "org.slf4j" % "slf4j-nop" % slf4jVersion
  val h2 = "com.h2database" % "h2" % h2Version
  val scalactic = "org.scalactic" %% "scalactic" % scalaTestVersion
  val scalaTest = "org.scalatest" %% "scalatest" % scalaTestVersion % "test"

  val dependencies = Seq(
    akkaHttpCore,
    akkaHttpExperimental,
    akkaHttpSprayJson,
    akkaTestKit,
    slick,
    slickCodegen,
    slf4j,
    h2,
    scalactic,
    scalaTest
  )
}
