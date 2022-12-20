
function validatePassword() {
    // Get the password input element
    var passwordInput = document.getElementById("password");
  
    // Get the password value
    var password = passwordInput.value;
  
    // Check if the password is 9 characters long
    if (password.length == 9) {
      // Navigate to the specified URL if the password is valid
    alert("Student Login Successful");
    window.location.assign("studentUI.html");
    
    } else {
      // Display an error message if the password is not valid
      alert("Error: Index Number must be 9 characters long");
    }
  }
  
  function showGrade(){

    let mathInput = document.getElementById("Sub1");
    let scienceInput = document.getElementById("Sub2");
    let englishInput = document.getElementById("Sub3");
    let socialInput = document.getElementById("Sub4");
    let alt1Input = document.getElementById("Sub5");
    let alt2Input = document.getElementById("Sub6");
    let alt3Input = document.getElementById("Sub7");
    let alt4Input = document.getElementById("Sub8");
    let scoreMath = mathInput.value;
    let scoreScience = scienceInput.value;
    let scoreEnglish = englishInput.value;
    let scoreSocial = socialInput.value;
    let scoreAlt1 = alt1Input.value;
    let scoreAlt2 = alt2Input.value;
    let scoreAlt3 = alt3Input.value;
    let scoreAlt4 = alt4Input.value;

    let totalScore = Number(scoreMath)+Number(scoreScience)+ Number(scoreSocial)+ Number(scoreEnglish)+ Number(scoreAlt1)+Number(scoreAlt2)+Number(scoreAlt3)+Number(scoreAlt4);
    let totalAvg = totalScore / 8

  if (totalAvg > 50) {
    // alert("Passed")
   document.getElementById("res").innerHTML = `Your totalScore is 
   ${totalScore} and average is ${totalAvg}. Passed`;

  } else {
    // alert("Failed")
    document.getElementById("res").innerHTML = `Your totalScore is 
   ${totalScore} and average is ${totalAvg}. Failed`;
  }
//    alert(`Your total score is ${totalScore}`);
//    alert(`Your total average is ${totalAvg}`);

//    document.getElementById("res").innerHTML = "<strong>" + alert("Passed!") + "</strong>";


  }
//   function useGrd(){
//     let subjects = [Sub1, Sub2, Sub3, Sub4, Sub5, Sub6, Sub7, Sub8];
//     let subLen = subjects.length;
  
//   let text = "<ul>";
//   for (let i = 0; i < subLen; i++) {
//     text += "<li>" + subjects[i] + "</li>";
//   }
//   text += "</ul>";
//   text = document.getElementById("demo");
//   }

 