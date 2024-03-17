// ---------- Variables ---------- //

let nav_bar = document.querySelector('.nav-bar-box');
let projects = document.querySelectorAll('.projects');
let readMore_content = document.querySelector('.more-content');
let scroll_to_top_btn = document.querySelector('.scroll-up-btn');

let small_screen_nav_bar_btn = document.querySelector('.small-screen-nav-bar-btn');
let small_screen_nav_bar_links_container = document.querySelector('.small-screen-nav-bar-links-container');
let small_screen_nav_links = document.querySelectorAll('.small-screen-nav-links');
let theme_change_btn = document.getElementById('theme_change_btn');

let light_theme_text = document.querySelectorAll('.light-theme-text');
let light_theme_indicator = document.querySelector('.light_theme_indicator');
let light_theme_background = document.querySelectorAll('.light-theme-background');
let light_theme_primary = document.querySelectorAll('.light-theme-primary');

let light_theme_form_fields = document.querySelectorAll('.light-theme-form-fields');
let light_theme_primary_text = document.querySelectorAll('.light-theme-primary-text');
let light_theme_accent = document.querySelectorAll('.light-theme-accent');
let header = document.querySelector('.header');

let footer = document.querySelector('.footer');
let light_theme_circle_btn_links = document.querySelectorAll('.light-theme-circle-btn-links');

// ---------- Projects Background Image ---------- //

for (let i = 0; i < projects.length; i++) {
    projects[0].style.backgroundImage = `url(images/pro1.png)`;
    projects[1].style.backgroundImage = `url(images/pro2.png)`;
    projects[2].style.backgroundImage = `url(images/pro3.png)`;
    projects[3].style.backgroundImage = `url(images/pro4.png)`;
    projects[4].style.backgroundImage = `url(images/pro5.png)`;
    projects[5].style.backgroundImage = `url(images/pro6.png)`;
}

function aboutReadMoreBtn() {
    if (readMore_content.style.display != "block") {
        readMore_content.style.display = "block";
        document.querySelector('.btn2').innerHTML = "Read Less";
    } else {
        readMore_content.style.display = "none";
        document.querySelector('.btn2').innerHTML = "Read More";
    }
}

// ---------- Scroll To Top Btn ---------- //

window.onscroll = function () { scrollToTop() };

function scrollToTop() {
    if (document.documentElement.scrollTop > 70) {
        scroll_to_top_btn.style.display = "flex";
    } else {
        scroll_to_top_btn.style.display = "none";
    }
}

// ---------- Small Screen Nav Bar ---------- //

small_screen_nav_bar_btn.addEventListener('click', function toogleSmallScreenNavBtn() {
    if (small_screen_nav_bar_links_container.style.right != "0px") {
        small_screen_nav_bar_links_container.style.right = "0px";
        small_screen_nav_bar_btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        small_screen_nav_bar_btn.style.border = "1px solid #fff";
    } else {
        small_screen_nav_bar_links_container.style.right = "-210px";
        small_screen_nav_bar_btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        small_screen_nav_bar_btn.style.border = "none";
    }
});

for (let i = 0; i < small_screen_nav_links.length; i++) {
    small_screen_nav_links[i].addEventListener('click', function toggleSmallScreenNavLinks() {
        if (small_screen_nav_bar_links_container.style.right != "0px") {
            small_screen_nav_bar_links_container.style.right = "0px";
            small_screen_nav_bar_btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
            small_screen_nav_bar_btn.style.border = "1px solid #fff";
        } else {
            small_screen_nav_bar_links_container.style.right = "-210px";
            small_screen_nav_bar_btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
            small_screen_nav_bar_btn.style.border = "none";
        }
    });

}

// ---------- Theme Change ---------- //

theme_change_btn.addEventListener('click', function () {

    if (light_theme_indicator.style.display != 'block') {
        light_theme_indicator.style.display = 'block';
        console.log('Display Block');

        // ---------- Background Color Changer ---------- //

        header.style.backgroundColor = `#0c0f1d`;
        footer.style.backgroundColor = `#0c0f1d`;

        // ---------- HTML Elements Color Change ---------- //

        for (let i = 0; i < light_theme_text.length; i++) {
            light_theme_text[i].classList.remove('light-theme-text');
            light_theme_text[i].classList.add('dark-theme-text');
        }

        for (let j = 0; j < light_theme_background.length; j++) {
            light_theme_background[j].classList.remove('light-theme-background');
            light_theme_background[j].classList.add('dark-theme-background');
        }

        for (let j = 0; j < light_theme_primary.length; j++) {
            light_theme_primary[j].classList.remove('light-theme-primary');
            light_theme_primary[j].classList.add('dark-theme-primary');
        }

        for (let j = 0; j < light_theme_form_fields.length; j++) {
            light_theme_form_fields[j].classList.remove('light-theme-form-fields');
            light_theme_form_fields[j].classList.add('dark-theme-form-fields');
        }

        for (let j = 0; j < light_theme_primary_text.length; j++) {
            light_theme_primary_text[j].classList.remove('light-theme-primary-text');
            light_theme_primary_text[j].classList.add('dark-theme-primary-text');
        }

        for (let j = 0; j < light_theme_accent.length; j++) {
            light_theme_accent[j].classList.remove('light-theme-accent');
            light_theme_accent[j].classList.add('dark-theme-accent');
        }

        for (let j = 0; j < light_theme_circle_btn_links.length; j++) {
            light_theme_circle_btn_links[j].classList.remove('light-theme-circle-btn-links');
            light_theme_circle_btn_links[j].classList.add('dark-theme-circle-btn-links');
        }
    }

    else {
        light_theme_indicator.style.display = 'none';
        console.log('Display None');

        // ---------- Background Color Changer ---------- //

        header.style.backgroundColor = `#fff`;
        footer.style.backgroundColor = `#fff`;

        // ---------- HTML Elements Color Change ---------- //

        for (let i = 0; i < light_theme_text.length; i++) {
            light_theme_text[i].classList.remove('dark-theme-text');
            light_theme_text[i].classList.add('light-theme-text');
        }

        for (let j = 0; j < light_theme_background.length; j++) {
            light_theme_background[j].classList.remove('dark-theme-background');
            light_theme_background[j].classList.add('light-theme-background');
        }

        for (let j = 0; j < light_theme_primary.length; j++) {
            light_theme_primary[j].classList.remove('dark-theme-primary');
            light_theme_primary[j].classList.add('light-theme-primary');
        }

        for (let j = 0; j < light_theme_form_fields.length; j++) {
            light_theme_form_fields[j].classList.remove('dark-theme-form-fields');
            light_theme_form_fields[j].classList.add('light-theme-form-fields');
        }

        for (let j = 0; j < light_theme_primary_text.length; j++) {
            light_theme_primary_text[j].classList.remove('dark-theme-primary-text');
            light_theme_primary_text[j].classList.add('light-theme-primary-text');
        }

        for (let j = 0; j < light_theme_accent.length; j++) {
            light_theme_accent[j].classList.remove('dark-theme-accent');
            light_theme_accent[j].classList.add('light-theme-accent');
        }

        for (let j = 0; j < light_theme_circle_btn_links.length; j++) {
            light_theme_circle_btn_links[j].classList.remove('dark-theme-circle-btn-links');
            light_theme_circle_btn_links[j].classList.add('light-theme-circle-btn-links');
        }
    }
});