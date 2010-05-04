(function($){  
	$.fn.genie = function(options) {  

		
		var o, base;
		var defaults = {  
			
		};

		base = $(this);
		o = $.extend(defaults, options);

		return this.each(function() {
			create_elements();
		});
		
		function create_elements() {

		}

	}

})(jQuery);
