const app = {};

app.initApp = function() {


	//THE COUNTDOWN

	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function initializeClock(id, endtime) {
		var clock = document.getElementById(id);
		var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');

		function updateClock() {
			var t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {
				$('#openUp').removeClass('hide-item');
				$('#clockdiv').addClass('hide-item');
				$('#clockdiv').removeClass('clock-show');
				clearInterval(timeinterval);
			}
		}

		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	}

	var deadline = 'November 30 2018 23:59:59 EST';

 	initializeClock('clockdiv', deadline);


 	//THE BACKGROUND


	function starter(){
	    //$('.rRect').animate({"width":"0%"},600,'easeOutCirc');
	    $('.cont').animate({
	    	"opacity": "1"
	    }, 900);
	    $('.pen-label').fadeIn(1000);
	    $('.rRect').animate({
	    	"width": "25%",
	    	"box-shadow": "0 0 20px gray"
	    }, 1000, 'easeInOutCirc');
	    $('.pen-label').animate({
	    	"color": "white"
	    }, 1000);
	}


	starter();


	$(".rev").click(function() {
		$('.pen-label').fadeIn(1000);
	    //$('.rRect').animate({"width":"0%"},1000,'easeOutBounce');
	    $('.rRect').animate({
	    	"width": "0%",
	    	"box-shadow": "0"
	    }, 1000, 'easeInOutCirc');
	    $('.pen-label').animate({
	    	"color": "gray"
	    }, 1000);
	    // $('.cont').animate({"opacity":"0"},400);
	});

	$('.trigger-an').click(function() {
		$('.rRect').animate({
			"-webkit-transform": "skew(200deg)"
		}, 500);
		$('.rRect').animate({
			"transform": "skew(200deg)"
		}, 500);
		$('.rRect').css({
			"transform": "skew(200deg)"
		});
	});


	};

app.init =() => {
	app.initApp();
};

$(function() {
	app.init();
}); 