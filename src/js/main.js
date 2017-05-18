$(".menu-toggle").click(function() {
	console.log('click')
	$(this).toggleClass('active');
	$('ul[role="navigation"]').toggleClass('hidden');
	var isActive = $(this).hasClass('active');
	if (isActive) {
		$('body').css({
			'overflow': 'hidden'
		});
	} else {
		$('body').removeAttr('style');
	}
});