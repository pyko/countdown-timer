var SimpleCountdown = {

	// element: the DOM element where the timer will appear
	// duration: total countdown duration in seconds
	// largeInterval: the initial intervals to jump by (in seconds)
	// finalCountdown: when to start counting down every second
	startTimer: function(element, duration, largeInterval, finalCountdown){
		var that = this,
			timeoutDelay = largeInterval * 1000; // convert to milliseconds
		this.updateTimer(element, duration);

		var reduceTime = function(duration, interval, finalCountdown) {
			var newDuration = duration - interval;
			that.updateTimer(element, newDuration);

			if (newDuration === 0) {
				return;
			}

			if ( (newDuration > finalCountdown) && (newDuration-interval) < finalCountdown) {
				// Taking the entire 'interval' jump will cause us to be less than finalCountdown
				// so adjust this interval so we will reach 'finalCountdown'
				interval = newDuration - finalCountdown;								
			} else if (newDuration === finalCountdown) {
				// Reached finalCountdown, start counting down every second
				interval = 1;
			}
			timeoutDelay = interval * 1000;
			setTimeout(reduceTime, timeoutDelay, newDuration, interval, finalCountdown);
		};

		setTimeout(reduceTime, timeoutDelay, duration, largeInterval, finalCountdown);
	},

	updateTimer: function(element, duration){
		var durationInMinutes = parseInt(duration / 60),
			remainingSeconds = duration % 60,
			prettyTime = this.formatTime(durationInMinutes, remainingSeconds);

		element.innerText = prettyTime;
	},

	formatTime: function(minutes, seconds){
		return minutes + ':' + this.formatSeconds(seconds);
	},

	formatSeconds: function(num){
		if (num < 10) {
			num = '0' + num;
		}
		return num;
	},

	return: {
		startTimer: this.startTimer
	}
}