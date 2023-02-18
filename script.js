"use strict";

const nav = document.querySelector(".main-nav");
const navBtn = document.querySelector(".btn-mobile-nav");
const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".closed");
const overlay = document.querySelector("#overlay");

// Mobile navigation
navBtn.addEventListener("click", function (e) {
	btnOpen.classList.toggle("active");
	btnClose.classList.toggle("active");
	nav.classList.toggle("nav-open");
	overlay.classList.toggle("overlay");
});

nav.addEventListener("click", function (e) {
	if (e.target.tagName !== "A") return;

	btnOpen.classList.add("active");
	btnClose.classList.remove("active");
	nav.classList.remove("nav-open");
	overlay.classList.remove("overlay");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");

		// Scroll back to top
		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

		// Scroll to other links
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);

			sectionEl.scrollIntoView({ behavior: "smooth" });
		}
	});
});

const footer = document.querySelector("#footer");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];

		if (ent.isIntersecting) {
			btnOpen.classList.add("active");
			btnClose.classList.remove("active");
			nav.classList.remove("nav-open");
			overlay.classList.remove("overlay");
		}
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: "0px",
	}
);
obs.observe(footer);
