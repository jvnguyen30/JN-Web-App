function myFunction()
{
  var gpa = 0, totalCredits = 0, totalPoints = 0, prevGPA = 0, prevCredits = 0;
  var creditsArr = [];
  var pointsArr = [];
  var num = 1;
  
  var printGrade = "";
  
  //var numAsString = num.toString();
  //var str = "myTextArea" + numAsString;
  //var x = document.getElementById("myTextArea2").value;
  for(var x = 0; x < 7; x++)
  {
    let numAsString = num.toString();
    let str = "myTextArea" + numAsString;
    let credits = document.getElementById(str).value;
    num++; //iterate num to get grade
    numAsString = num.toString();
    str = "myTextArea" + numAsString;
    let grade = document.getElementById(str).value;
    num++; //iterate num for next iteration of loop
    if(credits != "")
    {
      totalCredits += parseInt(credits);
    }
    if(grade != "")
    {
      printGrade += grade + " ";
    }
  }
  //var test = "LeBron";
  document.getElementById("demo").innerHTML = totalCredits;
  document.getElementById("demo2").innerHTML = printGrade;
}
