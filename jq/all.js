$(document).ready(function() {
    /*0000右下角gototop000*/
	$('.gototopbn').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:0}, 1000)
	});

	/*0000選單000*/
    $('.menu02 ul>li>a').click(function(event) {
		event.preventDefault();
		$(this).parent().find('.submenu').slideToggle();
		$(this).parent().siblings().find('.submenu').slideUp();
    });

/*0000nivoslider輪撥區000*/
        $(window).load(function() {
        $('#slider').nivoSlider({ 
    effect: 'random',               // Specify sets like: 'fold,fade,sliceDown' 
    slices: 15,                       // For slice animations 
    boxCols: 8,                       // For box animations 
    boxRows: 4,                       // For box animations 
    animSpeed: 500,                   // Slide transition speed 
    pauseTime: 3000,                  // How long each slide will show 
    startSlide: 0,                    // Set starting Slide (0 index) 
    directionNav: true,               // Next & Prev navigation 
    controlNav: true,                 // 1,2,3... navigation 
    controlNavThumbs: false,          // Use thumbnails for Control Nav 
    pauseOnHover: true,               // Stop animation while hovering 
    manualAdvance: false,             // Force manual transitions 
    prevText: 'Prev',                 // Prev directionNav text 
    nextText: 'Next',                 // Next directionNav text 
    randomStart: false,               // Start on a random slide 
    beforeChange: function(){},       // Triggers before a slide transition 
    afterChange: function(){},        // Triggers after a slide transition 
    slideshowEnd: function(){},       // Triggers after all slides have been shown 
    lastSlide: function(){},          // Triggers when last slide is shown 
    afterLoad: function(){}           // Triggers when slider has loaded 
});
    });
    	
});