Simple Countdown Timer
=======================

This is a very simple/basic countdown timer. I wrote it because someone once mentioned that countdown timers that tick every second made her feel rushed/nervous.

This timer allows you to specify the total duration, the interval to use for decreasing the time until it reaches a the final limit when the timer starts to ticks every second.


Usage
======
`SimpleCountdown.startTimer(element, duration, interval, finalLimit);`

* **element** - the DOM element you want the timer to appear in
* **duration** - the total time (in seconds) for the countdown
* **interval** - the interval(in seconds) for the timer to jump by
* **finalLimit** - the lower threshold for the timer to start counting down each second

Examples
--------

**Example 1**

`SimpleCountdown.startTimer($("#timerDiv"), 120, 15, 30);`

This timer will be two minutes (120 seconds) in total and decrease by 15 second intervals, until the timer has 30 seconds remaining. Once it reaches 30 seconds, will decrease by 1 second intervals.

Timer text will be outputted to element with ID 'timerDiv'

**Example 2**

`SimpleCountdown.startTimer($("#timerDiv"), 60, 15, 10);`

This timer will be one minute (60 seconds) in total and decrease by 15 second intervals until the timer has 15 seconds remaining. It will now make a 5 second "transition interval" so that the timer is now has 10 seconds remaining and will continue to decrease by 1 second intervals.

Timer text will be outputted to element with ID 'timerDiv'

License
=======
MIT