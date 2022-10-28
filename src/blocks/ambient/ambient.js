import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/lib";

(() => {
	addUnderlay('modal');
	makeModalFrame({ el: '.ambient__image', scrollLock }, function() {
		let cnt = 0;
		const current = this.querySelector('img');
		const rel = current.attributes.rel?.value;
		const images_related = document.querySelectorAll(`img[rel="${rel}"]`);
		const images_cleared = [...images_related].filter(image => !image.isEqualNode(current));
		
		this.classList.add('modal__content_gallery');
		current.classList.add('showed');
		images_cleared.map(image => { this.appendChild(image.cloneNode()) });

		if (images_cleared) {
			const images = this.querySelectorAll('img');
			const _prev = document.createElement('button');
			const _next = document.createElement('button');

			_prev.className = 'modal__prev';
			_next.className = 'modal__next';

			this.before(_prev);
			this.before(_next);

			_prev.addEventListener('click', () => move(-1));
			_next.addEventListener('click', () => move());

			images.forEach(image => {
				image.addEventListener('click', () => { move() });
			});
			
			const move = (direction = 1) => {
				images[cnt].classList.remove('showed');
				cnt += direction;
				
				if (cnt < 0) { cnt = images.length - 1; }
				else if (cnt >= images.length) { cnt = 0; }
				
				images[cnt].classList.add('showed');
			}
		}
	});

})();