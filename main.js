document.addEventListener('DOMContentLoaded', function(){
	var countdownHolder = document.querySelector('#countdown-holder');

	countdownHolder.addEventListener('click', function(){
		SimpleCountdown.startTimer(this, 300, 15, 30);
	});
});