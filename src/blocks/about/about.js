import ymaps from 'ymaps';

(() => {
	ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {

		const map = new maps.Map('about__map', {
			center: [57.555691, 61.731427],
			zoom: 12,
			controls: [],
		});

		map.behaviors.disable('scrollZoom');
		map.controls.add('zoomControl', {
			size: 'large',
			float: 'none',
			position: {
				top: '100px',
				right: '40px'
			}
		});
	})
	.catch(error => console.log('Failed to load Yandex Maps', error));

})();