//sutrix carousel

(function ($) {
	var opt =
	{
		//carousel on or off.
		available: true,
		//flag: if is_moving on (is_moving=true), your click is not available.
		is_moving: false
	}

	$.fn.sutrix = function() {
		// assign to easy access everywhere.
		opt.root = this;
		opt.viewport = $(".viewport", this);
		opt.controls = $(".controls", this);
		opt.holder = $(".holder", opt.viewport);

		// detect window resize
		$.screen_change();
		$(window).resize($.screen_change);

		// fire an event when click on an image
		$("img", opt.viewport).bind("click", $.img_click);

		// move left & right
		$(".left", opt.controls).bind("click", $.move_left);
		$(".right", opt.controls).bind("click", $.move_right);
	}

	$.screen_change = function() {
		if (opt.holder.width() < opt.root.width())
		{
			opt.available = false;
			opt.controls.hide(500);
		} else
		{
			opt.available = true;
			opt.controls.show(500);
		}
	}

	$.img_click = function() {
		var img = $(this);
		var mid_root = opt.root.width() / 2;
		var mid_element = img.offset().left + img.width() / 2;

		//move to center
		if (mid_root - mid_element > 0)
			$.move_right();
		else
			$.move_left();
	}

	$.move_left = function() {
		if (!opt.available || opt.is_moving) return;

		// turn flag on
		opt.is_moving = true;

		// get width of the last one
		var holder = opt.holder;
		var item = holder.find("li:first");
		var delta = item.width();

		holder.animate({left: "-="+ delta +"px"}, 800, function()
		{
			holder.css("margin-left", "+="+ delta +"px");
			holder.find("li:last").after(holder.find("li").slice(0,1));

			holder.css("margin-left", "0px");
			holder.css("left", "0px");

			// turn flag off
			opt.is_moving = false;
		});
	}

	$.move_right = function() {
		if (!opt.available || opt.is_moving) return;

		// turn flag on
		opt.is_moving = true;

		// get width of the first one
		var holder = opt.holder;
		var item = holder.find("li:last");
		var delta = item.width();

		holder.css("margin-left", "-="+ delta +"px");
		holder.find("li:first").before(holder.find("li").slice(-1));

		holder.animate({left: "+="+ delta +"px"}, 800, function(){
			holder.css("margin-left", "0px");
			holder.css("left", "0px");

			// turn flag off
			opt.is_moving = false;
		});
	}

}(jQuery));
