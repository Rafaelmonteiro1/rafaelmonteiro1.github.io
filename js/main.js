(function() { 'use strict';

	var RM = {};

	// <--

	RM.configuracao = {
		_window 		:	$(window),
		_body			:	$('body'),
		_section 		:	$("section"),
		_contentFirst 	:	$("section .content")
	}

	// -->

	// <--
	RM.init = function() {
		if (RM.isMobile()) {
			RM.setheight();
			RM.configuracao._window.resize(function() {
				RM.configuracao._section.height('auto');
				RM.configuracao._contentFirst.css('top', 'auto');
				RM.setheight();
			});
		};
	}
	// -->

	// <--
	RM.setheight = function() {
		var heightsection = RM.configuracao._body.height();
		var element = [$("section#start"), $("section#about") , $("section#contact")];

		for (var j = element.length - 1; j >= 0; j--) {
			if(element[j].height() < heightsection){
			 	element[j].height(heightsection);
			 	RM.positionContent(j);
			}
		};
	}
	// -->

	RM.positionContent = function(j){
		var element = [$("section#start .content:first"), $("section#about .content:first") , $("section#contact .content:first")];
		var heightsection = RM.configuracao._body.height();
		var margin = (heightsection/2)+(-1*(element[j].height()/2)-80);
		element[j].css({
			'top': margin
		});
	};

	// <--
	RM.isMobile = function(){
		if( navigator.userAgent.match(/Android/i)
			|| navigator.userAgent.match(/webOS/i)
			|| navigator.userAgent.match(/iPhone/i)
			|| navigator.userAgent.match(/iPod/i)
			|| navigator.userAgent.match(/BlackBerry/i)
			|| navigator.userAgent.match(/Windows Phone/i)
			){
				return false;
			}
			else{
			    return true;
			}

	}
	// -->

	window.RM = RM;
}());
