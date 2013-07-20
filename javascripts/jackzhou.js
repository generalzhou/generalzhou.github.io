$(document).ready(function(){
	
	$('#contact').hide();
	$('#st-louis').hide();
	$('#austin').hide();
	$('#chicago').hide();

	var headers=[$('#st-louis'), $('#austin'),$('#chicago')];
	headers[Math.floor(Math.random()*headers.length)].show();

	$('#contact_link').click(function(){
		$('#contact').fadeToggle(100);
	});

	// var fadeInterval = 5000;
	// var fadeTime = 500;

	// setTimeout(function(){
	// 	fader($('#st-louis'),$('#chicago'));
	// }, fadeInterval);

	// setTimeout(function(){
	// 	fader($('#austin'),$('#st-louis'));
	// }, fadeInterval * 2)

	// setInterval(function(){
	// 	fader($('#chicago'),$('#austin'));
	// }, fadeInterval * 3);

	// setTimeout(function(){
	// 	setInterval(function(){
	// 		fader($('#st-louis'),$('#chicago'));
	// 	}, fadeInterval * 3);
	// }, fadeInterval);

	// setTimeout(function(){
	// 	setInterval(function(){
	// 		fader($('#austin'),$('#st-louis'));
	// 	}, fadeInterval * 3);
	// }, fadeInterval * 2);

	// function fader(incomingElem, outgoingElem){
	// 	outgoingElem.fadeOut(fadeTime)
	// 	setTimeout(function(){
	// 		incomingElem.fadeIn(fadeTime)
	// 	},fadeTime)
	// }


});