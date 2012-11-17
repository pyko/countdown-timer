//  Example of how to use the timer
document.addEventListener('DOMContentLoaded', function(){
	var countdownHolder = document.querySelector('#countdown-holder');

	countdownHolder.addEventListener('click', function(){
		// 5 minute timer, counting down every 15 seconds until the last 30 seconds
		SimpleCountdown.startTimer(this, 300, 15, 30);
	});
});