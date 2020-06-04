function validate(){
  var password = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
 

  var error_message = document.getElementById("error_message");
  
    error_message.style.padding = "10px";
    if (password.match(/[a-z]/g) && password.match(
        /[A-Z]/g) && password.match(
            /[0-9]/g) && password.match(
                /[^a-zA-Z\d]/g) && password.length == 8) {
        
    }
    else {
        text = "Please Enter valid Password";
        error_message.innerHTML = text;
        return false;
    }

  if (isNaN(phone) || phone.length != 10)
  {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  
  if(email.indexOf("@") == -1 || email.length < 6)
  {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  

  alert("Form Submitted Successfully!");
  return true;
}
