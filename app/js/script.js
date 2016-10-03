/*SCRIPT*/
/*select styler*/
$('.js-select select').styler();
/*end of select styler*/

/*masonry*/
$('.realty__list').masonry();
/*end of masonry*/

/*footer google map*/
if ($('.footer__map').length){

	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.726456277331735, lng: 37.62860349999988},
			zoom: 15,
			//disableDefaultUI: true,
			//zoomControl: true,
		});

		var marker = new google.maps.Marker({
			map: map,
			position: {lat: 55.726456277331735, lng: 37.62860349999988},
			title: 'ул. Щипок, 2'
		});

	}

	google.maps.event.addDomListener(window, 'load', initMap());
}
/*end of footer google map*/

/*contact google map*/
if ($('.contact__map').length){

	var contactMap;
	function initContactMap() {
		contactMap = new google.maps.Map(document.getElementById('contact-map'), {
			center: {lat: 55.726456277331735, lng: 37.62860349999988},
			zoom: 15,
			//disableDefaultUI: true,
			//zoomControl: true,
		});

		var marker = new google.maps.Marker({
			map: contactMap,
			position: {lat: 55.726456277331735, lng: 37.62860349999988},
			title: 'ул. Щипок, 2'
		});

	}

	google.maps.event.addDomListener(window, 'load', initContactMap());
}
/*end of contact google map*/

/*filter google map*/
if ($('#filter-map').length){

	var filterMap;
	function initFilterMap() {
		filterMap = new google.maps.Map(document.getElementById('filter-map'), {
			center: {lat: 55.726456277331735, lng: 37.62860349999988},
			zoom: 15,
			//disableDefaultUI: true,
			//zoomControl: true,
		});

		var marker = new google.maps.Marker({
			map: filterMap,
			position: {lat: 55.726456277331735, lng: 37.62860349999988},
			title: 'ул. Щипок, 2'
		});

	}

	google.maps.event.addDomListener(window, 'load', initFilterMap());
}
/*end of realty-item-view*/

/*end of filter google map*/
if ($('#realty-item-view').length){

	var realtyItemMap;
	var realtyItemView;

	function initRealtyItemMap() {
		realtyItemMap = new google.maps.Map(document.getElementById('realty-item-map'), {
			zoom: 15
		});
		realtyItemView = new google.maps.StreetViewPanorama(document.getElementById('realty-item-view'), {
			pov: {heading: 165, pitch: 0},
			zoom: 1
		});
		var geocoder = new google.maps.Geocoder();

		geocodeAddress(geocoder, realtyItemMap);
		geocodeAddress(geocoder, realtyItemView);
	}

	function geocodeAddress(geocoder) {
		var address = $('.realty-item__title p').text();
		geocoder.geocode({'address': address}, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				realtyItemMap.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map: realtyItemMap,
					position: results[0].geometry.location,
					label: $('.realty-item__price span').text() + '₽'
				});

				realtyItemView = new google.maps.StreetViewPanorama(document.getElementById('realty-item-view'), {
					position: results[0].geometry.location,
					pov: {heading: 165, pitch: 0},
					zoom: 1
				});

			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	}

	//var panorama;
	//function initRealtyItemView() {
	//	panorama = new google.maps.StreetViewPanorama(
	//			document.getElementById('realty-item-view'),
	//			{
	//				position: {lat: 37.869260, lng: -122.254811},
	//				pov: {heading: 165, pitch: 0},
	//				zoom: 1
	//			});
	//
	//	var geocoder = new google.maps.Geocoder();
	//
	//	geocodeAddress(geocoder, initRealtyItemView);
	//}

	//google.maps.event.addDomListener(window, 'load', initRealtyItemView());
	google.maps.event.addDomListener(window, 'load', initRealtyItemMap());
};
/*realty-item-view*/

/*header-scroll*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 0) {
		$('.header').addClass('header--scroll');
	}else{
		$('.header').removeClass('header--scroll');
	}
});
/*end of header-scroll*/

/*side-menu*/
$('.header__sandwich').on('click', function () {
	$('.header__wrapper').css('display', 'flex');
	setTimeout(function () {
		$('.header__wrapper').addClass('header__wrapper--show');
	}, 1);
});

$('.header__close').on('click', function () {
	$('.header__wrapper').removeClass('header__wrapper--show');
	setTimeout(function () {
		$('.header__wrapper').css('display','');
	}, 501);
});
/*end of side-menu*/
/*end of SCRIPT*/