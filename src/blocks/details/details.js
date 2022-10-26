import scrollLock from 'scroll-lock';
import { makeGallery } from "../../js/lib";
import { addUnderlay, makeModalFrame } from "../../js/lib";

(() => {

	addUnderlay('modal');
	makeModalFrame({ el: '.order__sector', scrollLock }, function() {
		makeGallery(this.querySelectorAll('.details__gallery'));
	});
	
})();
