//sutrix carousel

// not center

(function ($) {
	var option =
	{
		available: true
	}

	$.fn.sutrix = function() {
		// assign for access everywhere.
		option.root = this;

		// detect window resize
		$.screen_change();
		$(window).resize($.screen_change);

		// $("#uull").ready(function(){
		// 	console.log("uull ready");
		// 	var a = $("#sutrix").width();
		// 	var b = $("#uull").width();

		// 	// $("#uull").css("margin-left", "-=" + (b/2 - a/2) + "px");
		// 	// $("#uull").css("margin-left", "-=900px");
		// 	// $("#uull").css("margin-left", "+=532px");
		// })

		// fire an event when click on an image
		$(".viewport img").bind("click", $.img_click);

		// move to left
		$(".controls .left").bind("click", function(){
			$.move_left();
		});

		//move to right
		$(".controls .right").bind("click", function(){
			$.move_right();
		});
	}

	$.screen_change = function() {
		// var root = $("#sutrix");
		var root = option.root;
		var uull = $("#uull");

		if (uull.width() < root.width())
		{
			$("#sutrix .controls").hide(500);
			option.available = false;
		} else
		{
			$("#sutrix .controls").show(500);
			option.available = true;
		}
	}

	$.img_click = function() {
		var img = $(this);

		var mid_root = option.root.width() / 2;
		var mid_element = img.offset().left + img.width() / 2;
		var delta = Math.abs(mid_root - mid_element);

		//move to center
		if (mid_root - mid_element > 0)
		{
			$.move_right(delta);
		} else
		{
			$.move_left(delta);
		}
	}

	$.move_left = function(delta) {
		if (!option.available) return;

		delta = 532;
		// if (delta === undefined) delta = 532;

		$("#uull").animate({left: "-="+ delta +"px"}, 800, function()
		{
			$("#uull").css("margin-left", "+="+ delta +"px");
			$("#uull").find("li:last").after($("#uull").find("li").slice(0,1));
		});
	}

	$.move_right = function(delta) {
		if (!option.available) return;

		delta = 532;
		// if (delta === undefined) delta = 532;

		$("#uull").css("margin-left", "-="+ delta +"px");
		$("#uull").animate({left: "+="+ delta +"px"}, 800);
		$("#uull").find("li:first").before($("#uull").find("li").slice(-1));
	}

}(jQuery));
