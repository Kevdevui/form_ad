// below is the validation function for the form fields
function validate(){
    var fullname = document.getElementById("full_name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";
    
    // my validation section using if stataements, based on what 
    // is in the text field, each if statement will have its own 
    // form of validation as seen below, also added {var text;}
    // to store the error message,an alert was also added to output
    // to the user when the form input fields have all the information.

    var text;
    if(fullname.length < 5){
      text = "Please Enter valid full name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 20){
      text = "Please enter a message";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }

    //  in the function is The countChars() function sets the length 
    // of text to charNum element using innerHTML property. The function takes the
    // data that has been typed in the textarea and output it in the span tag
  function charCount(obj){
    document.getElementById("textcount").innerHTML = obj.value.length;
}  
  