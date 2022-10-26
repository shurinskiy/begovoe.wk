import scrollLock from 'scroll-lock';
import { makeGallery } from "../../js/lib";
import { addUnderlay, makeModalFrame } from "../../js/lib";

(() => {

	addUnderlay('modal');
	makeModalFrame({ el: document.querySelectorAll('.order__sector'), scrollLock }, function() {
		makeGallery(this.querySelectorAll('.details__gallery'));
		makeModalFrame({ el: this.querySelectorAll('.details__button_more'), scrollLock });
	});

	
})();
