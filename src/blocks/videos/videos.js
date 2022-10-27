import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/lib";

(() => {
	addUnderlay('modal');
	makeModalFrame({ el: '.videos__item', scrollLock }, function() {
		let video = this.querySelector('video');
		video.setAttribute('controls', '');
		video.setAttribute('autoplay', '');
	});

})();
