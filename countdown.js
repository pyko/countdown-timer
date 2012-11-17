var SimpleCountdown = {

	// element: the DOM element where the timer will appear
	// duration: total countdown duration in seconds
	// interval: the initial intervals to jump by (in seconds)
	// finalLimit: when to start counting down every second
	startTimer: function(element, duration, interval, finalLimit){
		var that = this,
			timeoutDelay = interval * 1000; // convert to milliseconds
		this.updateTimer(element, duration);

		var reduceTime = function(duration, interval, finalLimit) {
			var newDuration = duration - interval;
			that.updateTimer(element, newDuration);

			if (newDuration === 0) {
				return;
			}

			if ( (newDuration > finalLimit) && (newDuration-interval) < finalLimit) {
				// Taking the entire 'interval' jump will cause us to be less than finalLimit
				// so adjust this interval so we will reach 'finalLimit'
				interval = newDuration - finalLimit;								
			} else if (newDuration === finalLimit) {
				// Reached finalLimit, start counting down every second
				interval = 1;
			}
			timeoutDelay = interval * 1000;
			setTimeout(reduceTime, timeoutDelay, newDuration, interval, finalLimit);
		};

		setTimeout(reduceTime, timeoutDelay, duration, interval, finalLimit);
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