import { getUserData } from "./util.js";

function updateUserNav() {
    let userData = getUserData();

    if (userData) {
        document.querySelector(".user").style.display = "inline-block";
        document.querySelector(".guest").style.display = "none";
    } else {
        document.querySelector(".user").style.display = "none";
        document.querySelector(".guest").style.display = "inline-block";
    }
};