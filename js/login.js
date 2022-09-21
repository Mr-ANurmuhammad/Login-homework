let elForm = document.querySelector(".form");
let elInputLogin = document.querySelector(".form__login");
let elInputPassword = document.querySelector(".form__password");


let login = "1234";
let password = "321";

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let  formLogin = elInputLogin.value.trim();
    let  formPassword = elInputPassword.value.trim();

    

    console.log(checkLogin(formLogin, formPassword));
    if (checkLogin(formLogin, formPassword)) {
      localStorage.setItem("token", "ajoyib")
      window.location.href = "/index.html"
    }
    else{
      alert("error")
    }

    elInputLogin.value = null;
    elInputPassword.value = null;

})


function checkLogin(loginValue, passwordValue) {
   
   if (loginValue == login && passwordValue == password) {
      
      return true

   }
   else{
        return false
   }

}

console.log(checkLogin("1234", "321"));