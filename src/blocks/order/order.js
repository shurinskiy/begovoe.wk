import scrollLock from 'scroll-lock';

(() => {

	const $map = $('.order__map');
	const $open = $('.order__patch');
	const $close = $('.order__close');
	const $turn = $('.order__turn');

	const menuOpen = (e) => {
		e.preventDefault();
		e.stopPropagation();
		$map.addClass('opened');
		scrollLock.disablePageScroll();
	}
	
	const menuClose = (e) => {
		e.stopPropagation();
		
		if($map.hasClass('opened')) {
			$map.removeClass('opened turned');
			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
		}
	}

	$open.on('click', menuOpen);
	$close.on('click', menuClose);
	$turn.on('click', (e) => {
		$map.toggleClass('turned');
	})

})();
