function myFunction()
{
  var gpa = 0, totalCredits = 0, totalPoints = 0, prevGPA = 0, prevCredits = 0;
  var creditsArr = [];
  var pointsArr = [];
  var num = 1;
  
  var printGrade = "";
  
  for(var x = 0; x < 7; x++)
  {
    let numAsString = num.toString();
    let str = "myTextArea" + numAsString;
    let credits = document.getElementById(str).value;
    let points = 0;
    
    num++; //iterate num to get grade
    numAsString = num.toString();
    str = "myTextArea" + numAsString;
    let grade = document.getElementById(str).value;
    num++; //iterate num for next iteration of loop
    
    if(credits != "")
    {
      totalCredits += parseInt(credits);
    }
    credits = parseInt(credits);
    if(grade != "")
    {
      printGrade += grade + " ";
      switch(grade)
      {
        case "A":
          points = credits * 4.0;
          break;
        case "A-":
          points = credits * 3.667;
          break;
        case "B+":
          points = credits * 3.333;
          break;
        case "B":
          points = credits * 3.0;
          break;
        case "B-":
          points = credits * 2.667;
          break;
        case "C+":
          points = credits * 2.333;
          break;
        case "C":
          points = credits * 2.0;
          break;
        case "C-":
          points = credits * 1.667;
          break;
        case "D+":
          points = credits * 1.333;
          break;
        case "D":
          points = credits * 1.0;
          break;
        case "D-":
          points = credits * 0.667;
          break;
        case "F":
          points = 0;
          break;
        default:
          points = 0;
          break;
      }
      totalPoints += points;
    }
  }
  
  prevCredits = document.getElementById("myTextArea15").value;
  if(prevCredits != "")
  {
    prevCredits = parseInt(prevCredits);
    prevGPA = document.getElementById("myTextArea16").value;
    prevGPA = parseFloat(prevGPA);
    totalCredits += prevCredits;
    totalPoints += prevGPA * prevCredits;
  }
  gpa = totalPoints/totalCredits;
  gpa = gpa.toFixed(3);
  let gpaStr = gpa.toString();
  document.getElementById("demo").innerHTML = "Your GPA: " + gpaStr;
  //document.getElementById("demo2").innerHTML = gpa;
}
