import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/lib";

(() => {
	addUnderlay('modal');
	makeModalFrame({ el: '.header__button', scrollLock });


	const $header = $('.header');
	const $shell = $header.find('.header__side');
	const vh = window.innerHeight * 0.01; // решение проблемы 100vh для меню на мобильных устройствах

	const menuOpen = (e) => {
		e.preventDefault();
		e.stopPropagation();
		$shell.addClass('opened');
		scrollLock.disablePageScroll();
	}
	
	const menuClose = (e) => {
		e.stopPropagation();
		
		if($shell.hasClass('opened')) {
			$shell.removeClass('opened');
			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
		}
	}

	$header.find('.header__toggle').on('click', menuOpen);
	$header.find('.header__close').add('.header__side a').on('click', (e) => {
		setTimeout(() => {
			menuClose(e);
		}, 100);
	});

	/* $(window).on('click', function(e) {
		if($shell.hasClass('opened') && !e.target.closest('.header__side')) {
			e.preventDefault();
			menuClose(e);
		}
	}); */

	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

})();