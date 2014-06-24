// 'use strict'

(function ($) {
	$.fn.sutrix = function() {
		console.log(this.height() + " | " + this.width());
		console.log("sutrix_casual");
		$("img", this).bind("click", $.img_click);

		// init image
		$("img", this).css("position","relative");
		$.nav_button();
	}

	$.img_click = function() {
		var parent = $(this).parent();
		$("img", parent).removeClass("selected");
		$(this).addClass("selected");

		$.move_to_center();
		console.log("img_click");
		console.log(this);
	}

	$.move_to_center = function() {
		console.log("move_to_center");
		// $(this).animate({left: "-=30px"}, 1000);
	}

	$.nav_button = function() {
		console.log("nav_button");
	}
}(jQuery));
