(function($){
	$.fn.genie = function(options) {

	var o, base;
	var defaults = {
	};
	
	var images = new Array();

	o = $.extend(defaults, options);

	return this.each(function() {
		base = this.getContext("2d");
		
		function preload(i) {
			images[i] = new Image();
			images[i].onload = function(){
				alert(options.length + " " + i + ' ' + options[i].src);

				if(i < options.length - 1) {
					i++;
					preload(i);
				}
				else {
					slide();
				 	return;
				}
			}
			images[i].src = options[i].src;
		}
	
		preload(0);		
	});
	
	
	function slide() {
		alert('slide');
	}

}

})(jQuery);

