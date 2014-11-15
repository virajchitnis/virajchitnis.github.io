$(document).ready(function() {
	placeFooter();
});

$(window).resize(function() {
	placeFooter();
})

function placeFooter() {
	var documentHeight = $(document).height();
	var windowHeight = $(window).height();
	
	if (documentHeight <= windowHeight) {
		$("body").css("overflow", "hidden");
		$(".footer").css({
			"position": "fixed",
			"bottom": 0,
			"max-width": "21cm",
			"margin": "0 auto !important",
			"float": "none !important",
			"width": "100%"
		});
	}
}