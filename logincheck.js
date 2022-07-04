function checklogin(toast) {
  let logged = localStorage.getItem("logged");
console.log("checking login..........")
  let element = document.getElementById("mail");
  let button1 = document.getElementById("login");
  let button2 = document.getElementById("register");
  let logoutbtn = document.getElementById("logout");
  if (logged) {
    console.log("user found.");

      if (toast) {
        var toastLiveExample = document.getElementById("liveToast");
        var toast = new bootstrap.Toast(toastLiveExample);
        document.getElementById("body").innerText = logged;
        let time = new Date();
        document.getElementById("time").innerText = time;
        toast.show();
   }

    button1.style = "display: none;";
    button2.style = "display: none;";
    element.innerHTML =
      "Email:" +
      logged +
      ` <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>`;
    element.style = "display: block;";
    logoutbtn.style = "display: block;";
  } else {
    element.style = "display: none;";
    logoutbtn.style = "display: none;";
  }
}
