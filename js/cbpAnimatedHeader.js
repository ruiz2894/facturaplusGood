/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
                acceso = document.querySelector('#acceso'),
                servicios = document.querySelector('#servicios'),
                facturalogo = document.querySelector('#facturalogo'),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
                        classie.add( acceso, 'colorwhite' );
                        classie.add( servicios, 'colorwhite' );
                        classie.add( facturalogo, 'colorwhite' );
		}
		else {
			classie.remove( header, 'navbar-shrink' );
                        classie.remove( acceso, 'colorwhite' );
                        classie.remove( servicios, 'colorwhite' );
                        classie.remove( facturalogo, 'colorwhite' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();