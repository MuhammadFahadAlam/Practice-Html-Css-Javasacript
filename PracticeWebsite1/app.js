let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
let cancel = document.querySelector('.close');

console.log(menu);
console.log(cancel);

toggle.addEventListener('click', function () {
	menu.style.left = '0px';
});

cancel.addEventListener('click', close);

function close() {
	menu.style.left = '100%';
}
