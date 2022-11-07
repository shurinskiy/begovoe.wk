import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/lib";
import { makeGallery } from "../../js/lib";

(() => {
	addUnderlay('modal');
	makeModalFrame({ el: '.order__sector.active', scrollLock }, function(el) {
		// let props = {};
		let self = this;
		let data = {
			id: el.id,
			action: 'get_order',
			nonce: props?.nonce
		}

		this.querySelectorAll('.details__button').forEach((button) => { button.dataset.order = el.id });

		$.ajax({
			type: 'post',
			dataType: 'json',
			url: props?.ajax_url,
			data: data,
			cache: false,
		}).done(function(response) {
			if(response.success) {
				let gallery = self.querySelectorAll('.details__gallery');

				response.data['order-gallery'].map((item) => {
					gallery[0].insertAdjacentHTML('beforeend', `<img src="${item['order-gallery-image']}" alt="" />`);
				});

				self.querySelector('.details__title span').textContent = response.data['order-square'];
				self.querySelector('.details__price span').textContent = response.data['order-price'];
				self.querySelector('.details__text').textContent = response.data['order-text'];

				makeGallery(gallery);
			}
		});

	});

	const $map = $('.order__map');

	const mapOpen = (e) => {
		e.preventDefault();
		e.stopPropagation();
		$map.addClass('opened');
		scrollLock.disablePageScroll();
	}
	
	const mapClose = (e) => {
		e.stopPropagation();
		
		if($map.hasClass('opened')) {
			$map.removeClass('opened turned');
			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
		}
	}

	$('.order__patch').on('click', mapOpen);
	$('.order__close').on('click', mapClose);
	$('.order__turn').on('click', (e) => {
		$map.toggleClass('turned');
	})

})();
