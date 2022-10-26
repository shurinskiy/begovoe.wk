import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/lib";

(() => {
	addUnderlay('modal');
	makeModalFrame({ el: '.videos__item', scrollLock, video: true });

})();
