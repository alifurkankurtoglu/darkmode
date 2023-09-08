const toggle = document.querySelector(".toggle");
const hours = new Date().getHours();
toggle.checked = hours > 8 && hours < 24;
