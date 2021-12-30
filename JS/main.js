"use strict";

// Header Snap on Scroll...
const headerEl = document.getElementById("header");

window.onscroll = () => {
	headerEl.classList.remove("snap");

	window.scrollY > 0
		? headerEl.classList.add("snap")
		: headerEl.classList.remove("snap");
};

window.onload = () => {
	headerEl.classList.remove("snap");

	window.scrollY > 0
		? headerEl.classList.add("snap")
		: headerEl.classList.remove("snap");
};

// Navigation Search Toggler...
const searchBox = document.getElementById("nav-search-box");
const openSearch = document.getElementById("open-search");
const closeSearch = document.getElementById("close-search");

openSearch.addEventListener("click", () =>
	searchBox.classList.add("search-active")
);

closeSearch.addEventListener("click", () =>
	searchBox.classList.remove("search-active")
);

// Home Banner Swiper Slider...
const swiper = new Swiper(".home-slider", {
	loop: true,
	grabCursor: true,
	watchSlidesProgress: true,
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
