import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/lib";
import { makeGallery } from "../../js/lib";

(() => {
	addUnderlay('modal');
	makeModalFrame({ el: '.order__sector', scrollLock }, function() {
		makeGallery(this.querySelectorAll('.details__gallery'));
	});

	const $map = $('.order__map');
	const $open = $('.order__patch');
	const $close = $('.order__close');
	const $turn = $('.order__turn');

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

	$open.on('click', mapOpen);
	$close.on('click', mapClose);
	$turn.on('click', (e) => {
		$map.toggleClass('turned');
	})

})();
