"use strict";

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
const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});
