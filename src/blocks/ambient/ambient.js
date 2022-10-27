import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/lib";

(() => {
	addUnderlay('modal');
	makeModalFrame({ el: '.ambient__item', scrollLock }, function() {

	});

})();
