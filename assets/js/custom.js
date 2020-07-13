/*MixitUp*/
var mixer = mixitup('.grid-portfolio-container');

//Scrollify Effect
$(function() {
  $.scrollify({
    section : ".scrollify",
    setHeights: false,
    updateHash: false,
  });
});

/*//Animated Headline
 $(function() {
        $('.hero-text-box').animatedHeadline({
        	 animationType: 'clip',
        	 revealDuration: 600,
        });
    })*/

//Humbager Menu
function openMenu(){
	document.getElementById('navMenu').style.height="100%";
}
function closeMenu(){
	document.getElementById('navMenu').style.height="0";
}

//Scroll Smooth
$(function(){
	$('.menu-container a, .scroll-down a').on('click', function(){
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});
});