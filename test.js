function myFunction()
{
  var num = 1;
  var numAsString = num.toString();
  var str = "myTextArea" + numAsString;
  var x = document.getElementById(str).value;
  document.getElementById("demo").innerHTML = x;
}
