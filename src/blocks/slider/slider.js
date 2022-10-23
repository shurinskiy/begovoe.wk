import Swiper, { Pagination } from 'swiper';

(() => {

	const swiper = new Swiper(".header__slider", {
		modules: [Pagination],
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.slider__pagination',
			bulletClass: 'slider__dot',
			bulletActiveClass: 'active',
			clickable: true
		}
	});

})();