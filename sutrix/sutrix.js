// 'use strict'

(function ($) {
	$.fn.sutrix = function() {
		console.log(this.height() + " | " + this.width());
		console.log("sutrix_casual");

		this.css("background-color", "gray");
		$("img", this).bind("click", $.img_click);

		// init image
		$("img", this).css("position","relative");
		$.nav_button(this);
	}

	$.img_click = function() {
		var parent = $(this).parent();
		$("img", parent).removeClass("selected");
		$(this).addClass("selected");

		// move
		console.log($(this).offset().left + " | " +  parent.width());
		e = $(this);
		var midPanel = parent.width() / 2;
		var midElement = e.offset().left + e.width() / 2;
		var delta = Math.abs(midPanel - midElement);
		console.log(midPanel + " | " + midElement);

		// move to center
		if (midPanel - midElement > 0)
			$("img", parent).animate({left: "+="+delta+"px"}, 800);
		else
			$("img", parent).animate({left: "-="+delta+"px"}, 800);

		$.move_to_center();
		console.log("img_click");
		console.log(this);
	}

	$.move_to_center = function() {
		console.log("move_to_center");
		// $(this).animate({left: "-=30px"}, 1000);
	}

	// add two nav buttons
	$.nav_button = function(root) {
		// var left = $("<button style='position:relative; left:0px; top:-100px'><img src='sutrix/img/Previous.png' width='20'></button>");
		// root.append(left);
		console.log("nav_button");
	}
}(jQuery));
