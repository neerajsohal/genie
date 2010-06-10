(function($){
	$.fn.genie = function(options) {

	var o, base;
	var curr_slide;
	var defaults = {
	};
	
	var images = new Array();

	o = $.extend(defaults, options);

	return this.each(function() {
		base = this.getContext("2d");
		
		ss = new splash_screen(base);
		ss.init();
		
		function preload(i) {
			images[i] = new Image();
			images[i].onload = function(){

				if(i < options.length - 1) {
					i++;
					preload(i);
					ss.update();
				}
				else {
					cast_spell();
				 	return;
				}
			}
			images[i].src = options[i].src;
		}
		preload(0);		
	});
	
	
	function cast_spell() {
		base.drawImage(images[0], 0, 0);
		curr_slide = 0;
		setInterval(next_slide, 1500);
	}
	
	function next_slide() {

		base.drawImage(images[curr_slide], 0, 0);
		curr_slide++;
		if(curr_slide > images.length - 1) {
			curr_slide = 0;
		}		
	}
	
}

function splash_screen(context) {

	var base = context;
	var o;
	var current_step = 0;
	this.init = function(options) {
		o = options;
		base.setAttribute('width', '300');
		alert(base.width);
		base.fillStyle = "rgba(128, 00, 00, .8)";
		base.fillRect(30, 30, 50 * current_step++, 5);
		base.fillText('genie', 10, 10);
	}
	
	this.update = function() {
		base.fillRect(30, 30, 50 * current_step++, 5);
	}

}

})(jQuery);

