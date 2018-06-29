function myFunction()
{
  var x = document.getElementById("myTable").rows[1].cells[1].innerHTML;
  x = parseInt(x);
  document.getElementById("demo").innerHTML = x;
}
