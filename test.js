function myFunction()
{
  var gpa = 0, totalCredits = 0, totalPoints = 0, prevGPA = 0, prevCredits = 0;
  var creditsArr = [];
  var pointsArr = [];
  var num = 1;
  var numAsString = "";
  var numAsString2 = "";
  var str = "";
  var credits = 0;
  var grade = "";
  //var numAsString = num.toString();
  //var str = "myTextArea" + numAsString;
  //var x = document.getElementById("myTextArea2").value;
  for(int x = 0; x < 7; x++)
  {
    numAsString = num.toString();
    //str = "myTextArea" + numAsString;
    //credits = document.getElementById(str).value;
    num++;
    numAsString2 = num.toString();
    //str = "myTextArea" + numAsString;
    //grade = document.getElementById(str).value;
    /*if(credits === "")
    {
      continue;
    }
    else
    {
      totalCredits += credits;
    }*/
  }
  var test = "LeBron";
  document.getElementById("demo").innerHTML = numAsString2;
}
