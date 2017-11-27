$(document).ready(function () {
	var logoImg = $('.logo img'),
		SWITCH_INTERVAL = 2 * 1000,
		logoIndex = 1,
		logos = [
			'assets/newlogo-1.png',
			'assets/newlogo-2.png',
			'assets/newlogo-3.png',
			'assets/newlogo-4.png',
			'assets/newlogo-5.png'
		];

	setInterval(function () {
		var logo = logos[logoIndex];
		logoIndex++;

		// Wrap the index
		if (logoIndex === logos.length) {
			logoIndex = 0;
		}

		logoImg.attr('src', logo);
	}, SWITCH_INTERVAL);
});