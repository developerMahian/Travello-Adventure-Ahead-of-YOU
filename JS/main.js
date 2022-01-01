"use strict";

// Mobile Navigation...
const mobileNavOpenBtn = document.getElementById("mobile-menu-open");
const mobileNavCloseBtn = document.getElementById("mobile-menu-close");
const navigation = document.getElementById("navigation");

mobileNavOpenBtn.onclick = () => {
	navigation.classList.add("show-mobile-menu");
};

mobileNavCloseBtn.onclick = () => {
	navigation.classList.remove("show-mobile-menu");
};

// Closing Opened Mobile menu when clicking outside..
document.onclick = (e) => {
	!navigation.contains(e.target) && e.target != mobileNavOpenBtn
		? navigation.classList.remove("show-mobile-menu")
		: null;
};

// Header Snap on Scroll...
const headerEl = document.getElementById("header");

window.onscroll = () => {
	// hide mobile nav on scrolling..
	navigation.classList.remove("show-mobile-menu");

	window.scrollY > 0
		? headerEl.classList.add("snap")
		: headerEl.classList.remove("snap");
};

window.onload = () => {
	window.scrollY > 0
		? headerEl.classList.add("snap")
		: headerEl.classList.remove("snap");
};

// Navigation Search Toggler...
const searchBox = document.getElementById("nav-search-box");
const openSearch = document.getElementById("open-search");
const closeSearch = document.getElementById("close-search");

openSearch.onclick = () => searchBox.classList.add("search-active");

closeSearch.onclick = () => searchBox.classList.remove("search-active");

// Common swiper properties...
var swiper = new Swiper(".swiper", {
	loop: true,
	grabCursor: true,
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Shop Featured Products Swiper Slider...
var swiper = new Swiper(".shop-slider", {
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1240: {
			slidesPerView: 4,
			spaceBetween: 25,
		},
	},
});

// Reviews Swiper Slider...
var swiper = new Swiper(".reviews-slider", {
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 25,
		},
	},
});
