var scroll = new SmoothScroll('a[href*="#"]',{
	speed: 1000,
	speedAsDuration: true
});

let menuBtn = document.getElementById('menuBtn');
let sideNav = document.getElementById('sideNav');

menuBtn.onclick = function () {
	if (sideNav.style.right == '-250px') {
		sideNav.style.right = '0';
	} else {
		sideNav.style.right = '-250px';
	}
};
