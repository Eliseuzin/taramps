const form = document.getElementById("form");
const UserName = document.getElementById("Username");
const userEmail = document.getElementById("userEmail");
// const Password = document.getElementById("Password");
const phone=document.getElementById("phone");
const city=document.getElementById("Cidade");
// const PasswordConfirmation = document.getElementById("PasswordConfirmation");
const send = document.getElementById("send");

// const success = document.getElementById("success");
// const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  // Storage.setItem("ls_UserName", UserName);
  // Storage.setItem("ls_userEmail", userEmail);
  // Storage.setItem("ls_Password", Password);
  // send();
});

// send.addEventListener("click", function (event) {
//   // console.log(event.target);
//   if (UserName && userEmail && Password && PasswordConfirmation) alert("ok");
//   else {
//     alert("Campos não estão preenchidos");
//   }
// });

function checkInputs() {
  const UserNameValue = UserName.value;
  const userEmailValue = userEmail.value;
  // const PasswordValue = Password.value;
  // const PasswordConfirmationValue = PasswordConfirmation.value;
  const phoneValue=phone.value;
  const cityValue=city.value;

  if (UserNameValue === "") {
    setErrorFor(UserName, " The username is obligatory.");
  } else if (UserName.value.length <= 3) {
    setErrorFor(UserName, "Enter a name validate.");
  } else if (UserName === Number) {
    setErrorFor(UserName, "Name can't has number.");
  } else {
    setSuccessFor(UserName);
  }
  let validNAME = false;

  if (userEmailValue === "") {
    setErrorFor(userEmail, " Mandatory email");
  } else if (!ValidateEmail(userEmailValue)) {
    setErrorFor(userEmail, "Enter an email validate.");
  }
  // else if (use)
  else {
    setSuccessFor(userEmail);
  }

  //validate phone and city, news dados
  if (phoneValue===""){
    setErrorFor(phone,"Número existente, por favor!");
  }else if (phoneValue.length<=10){
    setErrorFor(phone,"O número dever seguir o ex:(31) 99999-0000");
  }else if (phoneValue.length>=12){
    setErrorFor(phone,"Não é possivel inseriri números de outros paises");
  }else{
    setSuccessFor(phone)
  }

  if(cityValue===""){
    setErrorFor(city,"Uma cidade existente, por favor!");
  }else if(cityValue.length<=5){
    setErrorFor(city,"Sua cidade dever ter no minimo 6 careacteres");
  }else{
    setSuccessFor(city);
  }

  // if (PasswordValue === "") {
  //   setErrorFor(Password, "Mandatory password ");
  // } else if (Password.value.length <= 6) {
  //   setErrorFor(Password, "Password must has minimum 6 characters.");
  // } else {
  //   setSuccessFor(Password);
  // }

  // if (PasswordConfirmationValue === "") {
  //   setErrorFor(PasswordConfirmation, "Mandatory password");
  // } else if (PasswordConfirmationValue === PasswordValue) {
  //   setSuccessFor(PasswordConfirmation);
  // } else setErrorFor(PasswordConfirmation, "Must be the same of Password");

  //VALIDATE ALL

  const formControls = form.querySelectorAll(".form-control");
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control.success";
  });
  if (formIsValid) {
    console.log("tudo ok");
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Add message of error
  small.innerText = message;

  //Add the class of error
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  //Add the class of success
  formControl.className = "form-control success";
}

function ValidateEmail(email) {
  var emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}