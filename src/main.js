
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const ampm = document.querySelector("#ampm")


let h = new Date().getHours();
let m = new Date().getMinutes()
let s = new Date().getSeconds()
let am  = h > 12 ? "PM" : "AM";

// convert 24hr clock to 12hr clock

if (h > 12){
    h -= 12
}

// add zero befoer single digit number

h = (h < 10) ? "0" + h : h


hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = am;

