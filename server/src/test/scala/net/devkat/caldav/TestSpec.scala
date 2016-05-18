package net.devkat.caldav

import java.util

import org.scalatest.FlatSpec

/**
  * Created by nobby on 17.05.16.
  */
class TestSpec extends FlatSpec {


  "It" should "" in {
    val temp = new util.ArrayList[String]()
    temp.add("hi")
    for (i <- 0 to temp.size() - 1) {
      print(temp.get(i).getClass)
    }
  }
}
