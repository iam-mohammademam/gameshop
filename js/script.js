const body = document.querySelector('body');
const darkBg = document.querySelector('.overlayer');
const closeBtn = document.querySelectorAll('.close');
// // PRELOADER
window.addEventListener('load', () => {
	body.querySelector('.preloader').style.display = 'none';
})

// TOGGLE SEARCHBAR
const searchBtn = body.querySelector('.search-btn'),
	searchBox = body.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
	searchBox.classList.toggle('visible');
	if (searchBox.classList.contains('visible')) {
		searchBtn.classList.replace('fa-search', 'fa-times');
	} else {
		searchBtn.classList.replace('fa-times', 'fa-search');
	}
});
// TOGGLE CART
const cartIcon = body.querySelector('.cart-icon');
let cartCont = body.querySelector('.cart-container');
cartIcon.addEventListener('click', () => {
	cartCont.classList.add('show-cart');
	darkBg.classList.remove('opacity');
});

// // ADD TO CART
// const addToCartBtn = body.querySelectorAll('.add-to-cart');
// const cart= document.querySelectorAll('.cart');
// // ADD TO CART BTN
// addToCartBtn.forEach((btn)=>{
// 	btn.addEventListener('click',(e)=>{
// 		const cartCont = e.target.parentElement.parentElement,
// 		 slctdImg = cartCont.querySelector('img'),
// 		 slctdImgCatg = cartCont.querySelector('.category'),
// 		 slctdImgPrc = cartCont.querySelector('.curr-price');
// 	});
// });
// CLOSE ELEMENTS BY CLICK on window
// CLOSE BTN
closeBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		cartCont.classList.remove('show-cart');
		darkBg.classList.add('opacity');
	});
});
// BACKGROUND SHADOW 
darkBg.addEventListener('click', () => {
	cartCont.classList.remove('show-cart');
	darkBg.classList.add('opacity');
});
window.addEventListener('click', (windowClicked) => {
	// Auto close searchBox
	const clicked = searchBox.contains(windowClicked.target) ||
		searchBtn.contains(windowClicked.target);
	if (!clicked) {
		searchBox.classList.remove('visible');
		searchBtn.classList.replace('fa-times', 'fa-search');
	}

});
// SWIPER SLIDER
		