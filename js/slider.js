var productSlider = new Swiper(".product-slider .swiper", {
				slidesPerView: "auto",
				spaceBetween: 20,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
			});
// IMAGE PREVIEW CONTAINER
const pvwCont = body.querySelector('.preview-image-container'),
	pvwImg = pvwCont.querySelector('img'),
	pvwCat = pvwCont.querySelector('.category'),
	pvwPrevPrc = pvwCont.querySelector('.prev-price'),
	pvwCurrPrc = pvwCont.querySelector('.curr-price'),
	pvwTitle = pvwCont.querySelector('.product-title');
// PREVIEW IMAGE BUTTONS
const imgPreBtn = body.querySelectorAll('.show-details');
const imgPreBtn2 = body.querySelectorAll('.show-details-link');
// PREVIEW IMAGE BY CLICK ON BUTTONS
imgPreBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		pvwCont.classList.remove('opacity');
		darkBg.classList.remove('opacity');
		body.style.overflow = 'hidden';

		const imgCont = btn.parentElement.parentElement,
			prodImg = imgCont.querySelector('img'),
			prodName = imgCont.querySelector('.product-name'),
			prodCat = imgCont.querySelector('.category'),
			prodPrevPrc = imgCont.querySelector('.prev-price'),
			prodCurrPrc = imgCont.querySelector('.curr-price');

		pvwImg.src = prodImg.src;
		pvwCat.textContent = prodCat.textContent;
		pvwTitle.textContent = prodName.textContent;
		pvwPrevPrc.textContent = `${'$'}` + prodPrevPrc.textContent;
		pvwCurrPrc.textContent = `${'$'}` + prodCurrPrc.textContent;

	});
});
// PREVIEW IMAGE BY CLICK ON LINKS
imgPreBtn2.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		e.target.classList.replace('text-decoration-underline','text-dark');
		e.target.classList.replace('text-dark','text-decoration-underline');
		e.target.classList.replace('text-light','text-decoration-underline');
		
		pvwCont.classList.remove('opacity');
		darkBg.classList.remove('opacity');
		body.style.overflow = 'hidden';

		const imgCont2 = e.target.parentElement.parentElement.parentElement;
		prodImg2 = imgCont2.querySelector('img'),
			prodName2 = imgCont2.querySelector('.product-name'),
			prodCat2 = imgCont2.querySelector('.category'),
			prodPrevPrc2 = imgCont2.querySelector('.prev-price'),
			prodCurrPrc2 = imgCont2.querySelector('.curr-price');
		pvwImg.src = prodImg2.src;
		pvwCat.textContent = prodCat2.textContent;
		pvwTitle.textContent = prodName2.textContent;
		pvwPrevPrc.textContent = `${'$'}` + prodPrevPrc2.textContent;
		pvwCurrPrc.textContent = `${'$'}` + prodCurrPrc2.textContent;

	});
});
// CLOSE BTN
closeBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		pvwCont.classList.add('opacity');
		darkBg.classList.add('opacity');
		body.style.overflow = 'visible';
	});
});
// BACKGROUND SHADOW 
darkBg.addEventListener('click', () => {
	pvwCont.classList.add('opacity');
	darkBg.classList.add('opacity');
	body.style.overflow = 'visible';
});