(function($){  
	$.fn.genie = function(options) {  

		var genie_dom = "<div class='genie_wrapper'><ul class='genie'></ul></div>";
		var o, base;
		var genie_styles = "<style>.genie_wrapper{overflow:hidden}.genie{position: relative;margin:0;padding:0}.genie li {position: absolute;margin:0;padding:0}</style>";
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

		return this.each(function() {
			create_elements();
		});
		
		function create_elements() {
			$(base).html(genie_dom);
			$('head').append(genie_styles);
			$('.genie_wrapper').css({'background-color' : o.background_color, width : o.width, height: '300px', overflow: ''});

			$.ajax({
				type: "GET",
				url: o.xml,
				dataType: "xml",
				success: function(xml) {
					var slides = $(xml).find('slide');
					var count = 0;
					$(slides).each(function(){
						$('.genie').append('<li class="slide" id="slide'+count+'"><img src="' + $(this).text() + '" /></li>');
						$('.genie li:last').css({'z-index' : count});
						count++;
					});
				}
			});

		}

	}
	
	$(".slide").bind("start_animation", function(e){
		$(this).fadeOut(1000);
		alert($(this).html());
	});

	$(".slide").trigger("start_animation");

})(jQuery);
