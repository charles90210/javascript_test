function isIdValid (Id) {
  return Id.length >= 6 && !Id.includes("#") && !Id.includes("!") && !Id.includes("$");
}

function isPasswordValid (password) {
  return password != "password" && password.length >= 6
  && (password.includes ("#") || password.includes ("$") || password.includes ("!"))
  && (
    password.includes ("1")
  || password.includes ("2")
  || password.includes ("3")
  || password.includes ("4")
  || password.includes ("5")
  || password.includes ("6")
  || password.includes ("7")
  || password.includes ("8")
  || password.includes ("9")
  || password.includes ("0"))
  && (password != password.toUpperCase() && password != password.toLowerCase());
}

function checkUniqueness (Id,password) {
  return Id != password;
}

function areCredentialsValid (Id,password) {
  var Id = prompt("What do you want your Id to be?");
  var password = prompt("What do you want your password to be?");
  alert("Your credentials are valid: " + (isIdValid(Id) && isPasswordValid(password) && checkUniqueness(Id, password)));
}
