package net.devkat.caldav

/**
  * Created by nobby on 17.05.16.
  */
object TestSpec {

  case class DataType()
  case class PotentiallyDifferentDataType()

  def func1[T, U](A: Array[Array[T]], B: Array[Array[T]],
                  fn: (T, T) => U): Array[Array[U]] =
    A.zip(B) map { case (a, b) => func2(a, b, fn) }

  def func2[T, U](A: Array[T], B: Array[T],
                  fn: (T, T) => U): Array[U] =
    A.zip(B) map { case (a, b) => fn(a, b) }

}
