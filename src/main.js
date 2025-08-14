
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const ampm = document.querySelector("#ampm")


const h = new Date().getHours();
const m = new Date().getMinutes()
const s = new Date().getSeconds()
const am  = h > 12 ? "PM" : "AM";

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = am;

