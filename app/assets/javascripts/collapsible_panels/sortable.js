function sendSortRequestOfModel(modelName, $scope) {
	var formData = $scope.sortable('serialize');

	formData += "&" + $('meta[name=csrf-param]').attr("content") + "=" + encodeURIComponent($('meta[name=csrf-token]').attr("content"));

	$.ajax({
		type: 'post',
		data: formData,
		dataType: 'script',
		url: '/admin/' + modelName + 's/sort'
	});
};

$(function() {
	$('.sortable')
		.on('click', 'div.actions a.edit', function(evt) {
			evt.preventDefault();

			$(this)
				.parents('.sortable li')
					.toggleClass('visible');
		})
		.each(function() {
			var $self = $(this),
				$sortable = $self.find('ul'),
				modelName = $self.data('model');

			if ($sortable.length) {
				$sortable
					.not('data-disable-sort')
					.disableSelection()
					.sortable({
						axis: 'y',
						cursor: 'ns-resize',
						handle: 'div.grip',
						update: function(evt, ui) {
							sendSortRequestOfModel(modelName, $sortable);
						}
					});
			}
		});
});