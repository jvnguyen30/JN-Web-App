function myFunction()
{
  var x = document.getElementById("myTable").rows[0].cells[0].value;
  x = parseInt(x);
  document.getElementById("demo").innerHTML = x;
}
