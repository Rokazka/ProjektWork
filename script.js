const header = document.querySelector('header');
const about = document.querySelector('.About');
const home = document.querySelector('.Home');
const protfolio = document.querySelector('.Portfolio');
const contact = document.querySelector('.Contact');
const hobby = document.querySelector('.Hobby');
const menu = document.querySelector('.menu');




function hello() {
    header.classList.add("menu-mob");
    about.classList.remove("menu-mob");
}

function menuSee() {
    header.classList.toggle("menu-mob");
}

function clorChange() {
    header.classList.add("colorChange");
    meImage.classList.add("meImagemoveJs");

}

// function clorChange3() {
//     header.classList.remove("colorChange");
// }
// about.addEventListener('click',
//     clorChange);
// home.addEventListener('click',
//     clorChange3);




about.addEventListener('click', hello)
menu.addEventListener('click', menuSee)
home.addEventListener('click', hello);
protfolio.addEventListener('click', hello)
contact.addEventListener('click', hello)
hobby.addEventListener('click', hello)