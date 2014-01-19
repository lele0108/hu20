
$(document).ready(function() {


	$('.header').videoBG({
      position:"relative",
    zIndex:-1,
  mp4:'http://d385d9sgj3wiu1.cloudfront.net/mhacks.mp4',
  ogv:'http://d385d9sgj3wiu1.cloudfront.net/mhacks.ogg',
  webm:'http://d385d9sgj3wiu1.cloudfront.net/mhacks.ogg',
  poster:'img/tunnel_animation.jpg',
  opacity:0.5,
});
		$("video").prop('muted', true);
})