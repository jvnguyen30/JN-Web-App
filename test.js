function myFunction()
{
  var gpa = 0, totalCredits = 0, totalPoints = 0, prevGPA = 0, prevCredits = 0;
  var creditsArr = [];
  var pointsArr = [];
  var num = 1;
  //var numAsString = num.toString();
  //var str = "myTextArea" + numAsString;
  //var x = document.getElementById("myTextArea2").value;
  for(var x = 0; x < 7; x++)
  {
    let numAsString = num.toString();
    let str = "myTextArea" + numAsString;
    let credits = document.getElementById(str).value;
    num++;
    numAsString = num.toString();
    str = "myTextArea" + numAsString;
    let grade = document.getElementById(str).value;
    if(credits === "")
    {
      continue;
    }
    else
    {
      totalCredits += credits;
    }
  }
  var test = "LeBron";
  document.getElementById("demo").innerHTML = test;
}
