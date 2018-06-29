function myFunction()
{
  var x = document.getElementById("myTable").rows[1].cells[1].tagName;
  //var y = parseInt(x);
  document.getElementById("demo").innerHTML = x;
}
