(function($){  
	$.fn.genie = function(options) {  
	
		var defaults = {  
			width : '960px',
			height : '300px',
		};  
		var element = $(this);
		var options = $.extend(defaults, options);
		var o = options;
		return this.each(function() {  
			$(this).html('');
			createElements();
		});  
		
		function createElements() {
			$('<ul />').css({'background-color' : '#000000', width : o.width, height: '300px'}).appendTo(element);
		}
	}
})(jQuery);  