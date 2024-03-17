// ---------- Variables ---------- //

let nav_bar = document.querySelector('.nav-bar-box');
let projects = document.querySelectorAll('.projects');
let readMore_content = document.querySelector('.more-content');
let scroll_to_top_btn = document.querySelector('.scroll-up-btn');

let small_screen_nav_bar_btn = document.querySelector('.small-screen-nav-bar-btn');
let small_screen_nav_bar_links_container = document.querySelector('.small-screen-nav-bar-links-container');
let small_screen_nav_links = document.querySelectorAll('.small-screen-nav-links');

// ---------- Nav-Bar InnerHTML ---------- //

// nav_bar.innerHTML = `

// `;

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