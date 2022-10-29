import scrollLock from 'scroll-lock';
import { scrollClassToggle } from "../../js/lib";
import { addUnderlay, makeModalFrame } from "../../js/lib";

(() => {
	scrollClassToggle(document.querySelectorAll('.videos__item'), 'showed')

	addUnderlay('modal');
	makeModalFrame({ el: '.videos__item', scrollLock }, function() {
		let video = this.querySelector('video');
		video.setAttribute('controls', '');
		video.setAttribute('autoplay', '');
	});

})();
