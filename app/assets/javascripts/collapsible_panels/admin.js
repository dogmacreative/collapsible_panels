//= require collapsible_panels/sortable

$(function() {
	$('#main_content')
		.find('.panel, form .inputs')
			.each(function() {
				var $container = $(this),
					$close = $('<a href="#" class="close-panel">&nbsp;</a>')
						.appendTo($container);
			});

	$('#main_content .panel, form .inputs')
		.on('click', '.close-panel', function(evt) {
			evt.preventDefault();

			var $container = $(this).parent();

			$container.toggleClass('visible');
		});

	$('#main_content .panel, #main_content form .inputs')
		.children('.close-panel')
			.first()
				.click();
});