import Dependencies._

resolvers ++= Seq(
  sbtResolver.value
)

val jdbcUrl = "jdbc:h2:target/db"
val jdbcDriver = "org.h2.Driver"

val liquibaseSettings = Seq(
  liquibaseUsername := "",
  liquibasePassword := "",
  liquibaseDriver := jdbcDriver,
  liquibaseUrl := jdbcUrl,
  liquibaseChangelog := file("src/main/changelog/changelog.xml")
)

// Slick code generation task
lazy val slick = TaskKey[Seq[File]]("slick-codegen")
lazy val slickCodeGenTask = (sourceManaged, dependencyClasspath in Compile, runner in Compile, streams) map { (dir, cp, r, s) =>
  val outputDir = (dir / "main" / "slick").getPath // place generated files in sbt's managed sources folder
  val slickDriver = "slick.driver.H2Driver"
  val pkg = "net.devkat.calendar"
  toError(r.run("slick.codegen.SourceCodeGenerator", cp.files, Array(slickDriver, jdbcDriver, jdbcUrl, outputDir, pkg), s.log))
  val fname = outputDir + "/net/devkat/calendar/Tables.scala"
  Seq(file(fname))
}

lazy val calendarServer = (
  Project("calendar-server", file("."))
    settings(
      organization := "net.devkat",
      name := "calendar",
      version := "1.0.0-SNAPSHOT",
      scalaVersion := "2.11.7",
      crossScalaVersions := Seq("2.11.7"),
      scalacOptions := Seq("-unchecked", "-deprecation", "-encoding", "utf8"),
      libraryDependencies ++= dependencies,
      Revolver.settings,
      liquibaseSettings,
      // register manual sbt command
      slick <<= slickCodeGenTask,
      sourceGenerators in Compile <+= slickCodeGenTask
    )
  ).enablePlugins(SbtLiquibase)

