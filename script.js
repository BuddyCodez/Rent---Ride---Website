
let readbtn = document.getElementById("readbtn");
if (readbtn) {
  readbtn.addEventListener("click", (e) => {
    let div = document.getElementById("collapseExample");
    if (readbtn.classList.contains("collapsed")) {
      readbtn.innerHTML =
        "Read More " +
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
    </svg>`;
    } else {
      readbtn.innerHTML =
        "Read Less " +
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>`;
    }
  })
}

window.addEventListener("load", (e) => {
  checklogin();
});

function logout() {
  let element = document.getElementById("mail");
  let logoutbtn = document.getElementById("logout");
  let button1 = document.getElementById("login");
  let button2 = document.getElementById("register");
  sessionStorage.removeItem("logged");
  console.log("logged out");

  element.style = "display: none;";
  logoutbtn.style = "display: none;";
  button1.style = "display: block;";
  button2.style = "display: block;";
}
function changeimg(
  el,
  myclass,
  img,
  defaultimg,
  size,
  color,
  relement,
  defaultclr,
  clrelement
) {
  console.log("Changing image in every 5 secs.");
  let element = document.getElementById(el);
  setInterval(() => {
    if (element.classList.contains(myclass)) {
      element.src = defaultimg;
      element.style.width = "270px";
      element.classList.remove(myclass);
      if (color && relement && defaultclr) {
        let clrel = document.getElementById(clrelement);
        clrel.style.setProperty(relement, defaultclr);
      }
    } else {
      element.src = img;
      if (size) {
        element.style.width = size;
      }
      if (color && relement && defaultclr) {
        let clrel = document.getElementById(clrelement);
        clrel.style.setProperty(relement, color);
      }
      element.classList.add(myclass);
    }
  }, 5000);
}
changeimg(
  "wheel",
  "secret",
  "./static/mestro.png",
  "./static/cbr.png",
  "170px",
  "#484848",
  "--bike",
  "#ffffff",
  "twowheeler"
);
changeimg(
  "syden",
  "secret",
  "./static/verna.png",
  "./static/syden.png",
  "300px"
);
changeimg(
  "suv",
  "secret",
  "./static/cruiser.png",
  "./static/fortuner.png",
  "300px"
);
changeimg("van", "secret", "./static/quest.png", "./static/vans.png", "300px");
changeimg(
  "hatchbacks",
  "secret",
  "./static/vv.png",
  "./static/swift.png",
  "300px"
);
changeimg("offroad", "secret", "./static/jp.png", "./static/jeep.png", "300px");
changeimg(
  "minibus",
  "secret",
  "./static/minibusv.png",
  "./static/minibus.png",
  "300px"
);
changeimg(
  "pickuptruck",
  "secret",
  "./static/ford.png",
  "./static/truck.png",
  "300px",
  "#0056af",
  "--truck",
  "#b14605",
  "card"
);
changeimg(
  "bus",
  "secret",
  "./static/volvobus.png",
  "./static/bus.png",
  "300px",
  "#ffffff",
  "--bus",
  "#c0aa86",
  "buscard"
);
