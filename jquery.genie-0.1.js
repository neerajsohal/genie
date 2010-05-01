(function($){  
	$.fn.genie = function(options) {  

		var genie_dom = "<div class='genie_wrapper'><ul class='genie'></ul></div>";
		var o, base;
		var genie_style = "<style>.genie_wrapper{overflow:hidden}.genie{position: relative;margin:0;padding:0}.genie li {position: absolute;margin:0;padding:0}</style>";

		var defaults = {  
			width : '960px',
			height : '300px',
			background_color : '#000000',
			xml : 'genie.xml',
			speed : 1000,
			pause: 1000
		};

		base = $(this);
		o = $.extend(defaults, options);
		for(var i = $(base).children().length, y = 0; i > 0; i--, y++) {
			$(base).children().eq(y).css('zIndex', i + 99999);
		}

		return this.each(function() {
			create_elements();
			setInterval(function() {
					$('.genie').children(':first').animate({'opacity' : 0}, o.speed, function() {
						$('.genie')
						   .children(':first')
						   .css('zIndex', $('.genie').children(':last').css('zIndex') - 1) // Reduces zIndex by 1 so that it's no longer on top.
						   .css('opacity', 1) // Return opacity back to 1 for next time.
						   .appendTo($('.genie')); // move it to the end of the line.
					})
				}, o.pause);
		});
		
		function create_elements() {
			$(base).html(genie_dom);
			$('head').append(genie_style);
			$('.genie_wrapper').css({'background-color' : o.background_color, width : o.width, height: '300px', overflow: ''});

			$.ajax({
				type: "GET",
				url: o.xml,
				dataType: "xml",
				success: function(xml) {
					var slides = $(xml).find('slide');
					$(slides).each(function(){
						$('.genie').append('<li><img src="' + $(this).text() + '" /></li>');
					});
					
				}
			});
		}
	}

})(jQuery);  