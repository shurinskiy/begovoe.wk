import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/lib";

(() => {

	addUnderlay('modal');
	makeModalFrame({ el: '.details__button', scrollLock }, function(el) {
		this.querySelector('form').dataset.order = el.dataset.order;
	});
	
})();