var menuTog = document.getElementsByClassName("menu-toggle")[0];
var closeTog = document.getElementsByClassName("close")[0];
var body = document.getElementsByTagName("body")[0];

menuTog.onclick = function () {
    body.classList.toggle('open');
}

closeTog.onclick = function () {
    body.classList.toggle('open');
}