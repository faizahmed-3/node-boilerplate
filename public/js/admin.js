// Pre Loader
window.addEventListener("load", () => {
    let loader = document.querySelector(".loader")
    loader.classList.add("loader-finish");
});


// Back to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

// Copyright year
let year = new Date().getFullYear();

document.querySelector('#copyright').innerHTML = year;


// sidebar toggle
const toggleButton = document.querySelector('#sidebarToggle');
toggleButton.addEventListener('click', (e)=> {
    let admin = document.querySelector('#admin');
    e.preventDefault();
    admin.classList.toggle('toggled');
    console.log(e);
})