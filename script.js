var state = 'home';

var homeEl = document.querySelector('#home');
var aboutEl = document.querySelector('#about');
var blogEl = document.querySelector('#blog');
var shopEl = document.querySelector('#shop');
var contactEl = document.querySelector('#contact');
var headerEl = document.querySelector('#headerSect');
var footerEl = document.querySelector('#footer');

var homeBtnEl = document.querySelector('#homeBtn');
var aboutBtnEl = document.querySelector('#aboutBtn');
var blogBtnEl = document.querySelector('#blogBtn');
var shopBtnEl = document.querySelector('#shopBtn');
var contactBtnEl = document.querySelector('#contactBtn');

function displayPages() {
    if (state === 'home') {
        headerEl.style.display = 'block';
        homeEl.style.display = 'block';
        footerEl.style.display = 'block';
        aboutEl.style.display = 'none';
        blogEl.style.display = 'none';
        shopEl.style.display = 'none';
        contactEl.style.display = 'none';
    }
    if (state === 'about') {
        headerEl.style.display = 'block';
        homeEl.style.display = 'none';
        footerEl.style.display = 'block';
        aboutEl.style.display = 'block';
        blogEl.style.display = 'none';
        shopEl.style.display = 'none';
        contactEl.style.display = 'none';

    }
    if (state === 'blog') {
        headerEl.style.display = 'block';
        homeEl.style.display = 'none';
        footerEl.style.display = 'block';
        aboutEl.style.display = 'none';
        blogEl.style.display = 'block';
        shopEl.style.display = 'none';
        contactEl.style.display = 'none';

    }
    if (state === 'shop') {
        headerEl.style.display = 'block';
        homeEl.style.display = 'none';
        footerEl.style.display = 'block';
        aboutEl.style.display = 'none';
        blogEl.style.display = 'none';
        shopEl.style.display = 'block';
        contactEl.style.display = 'none';

    }
    if (state === 'contact') {
        headerEl.style.display = 'block';
        homeEl.style.display = 'none';
        footerEl.style.display = 'block';
        aboutEl.style.display = 'none';
        blogEl.style.display = 'none';
        shopEl.style.display = 'none';
        contactEl.style.display = 'block';
    }
}

homeBtnEl.addEventListener("click", function () {
    state = 'home';
    displayPages();
});

aboutBtnEl.addEventListener("click", function () {
    state = 'about';
    displayPages();
});

blogBtnEl.addEventListener("click", function () {
    state = 'blog';
    displayPages();
});

shopBtnEl.addEventListener("click", function () {
    state = 'shop';
    displayPages();
});

contactBtnEl.addEventListener("click", function () {
    state = 'contact';
    displayPages();
});

function init() {
    displayPages();
}

init();