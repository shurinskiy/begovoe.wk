import { Viewer } from 'photo-sphere-viewer';

(() => {
	const container = document.querySelector('.pan__view');
	const viewer = new Viewer({
		container: container,
		panorama: container.dataset.image,
		mousewheelCtrlKey: true,
		navbar: false,
	});

})();
