
if (!localStorage.getItem('token')){
    window.location.href = "/login.html"
};

let elBtnLogOut = document.querySelector(".log__out");

elBtnLogOut.addEventListener("click", function (evt) {
    localStorage.removeItem("token");

    window.location.href = "/login.html";
})


