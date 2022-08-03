// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("light-mode");}

const toggle = document.getElementById("lightmode");

const link1 = document.getElementById("profile__social-link1");
const link2 = document.getElementById("profile__social-link2");
const link3 = document.getElementById("profile__social-link3");

const text1 = document.getElementById("profile-profession");

const text2 = document.getElementById("profile__info-description1");
const text3 = document.getElementById("profile__info-description2");
const text4 = document.getElementById("profile__info-description3");

const wtsap = document.getElementById("button1");
const fb = document.getElementById("button2");

const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";

    link1.style.color = "black";
    link2.style.color = "black";
    link3.style.color = "black";

    text1.style.color = "hsl(207, 12%, 45%)";
    text2.style.color = "hsl(207, 12%, 45%)";
    text3.style.color = "hsl(207, 12%, 45%)";
    text4.style.color = "hsl(207, 12%, 45%)";

    wtsap.style.backgroundColor = "hsl(207, 8%, 92%)";
    wtsap.style.color = "hsl(207, 12%, 15%)";
    wtsap.style.transition = "2s";
    fb.style.backgroundColor = "hsl(207, 8%, 92%)";
    fb.style.color = "hsl(207, 12%, 15%)";
    fb.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "yellowgreen";
    body.style.transition = "2s";

    link1.style.color = "yellowgreen";
    link2.style.color = "yellowgreen";
    link3.style.color = "yellowgreen";

    text1.style.color = "hsl(207, 12%, 75%)";
    text2.style.color = "hsl(207, 12%, 75%)";
    text3.style.color = "hsl(207, 12%, 75%)";
    text4.style.color = "hsl(207, 12%, 75%)";

    wtsap.style.backgroundColor = "hsl(207, 24%, 12%)";
    wtsap.style.color = "hsl(207, 12%, 95%)";
    fb.style.backgroundColor = "hsl(207, 24%, 12%)";
    fb.style.color = "hsl(207, 12%, 95%)";
  }
});

function myLang(evt, lang) {
  let tabContent = document.getElementsByClassName("display");

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  let tabLinks = document.getElementsByClassName("tabLinks");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace("active", " ");
  }

  document.getElementById(lang).style.display = "block";
  evt.currentTarget.className += "active";
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});
