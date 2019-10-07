//THE FADE


const app = {};

app.initApp = function() {


	document.body.className += ' fade-out';

	$(function() {
		$('body').removeClass('fade-out');
		let theRecords = document.getElementsByClassName('record');
		$(theRecords).addClass('record-onload');
	});

	//THE RECORD STUFF

	let today = new Date();
	let zeDay = today.getDate();
	let zeMonth = today.getMonth()+1;

	let pre = "record-" + zeDay;
	let todayZeDay = document.getElementById(pre);


	let pastDaysList = [];
	let lowEnd = 1;
	let highEnd = zeDay;

	for (var i = lowEnd; i <= highEnd; i++) {
		pastDaysList.push(i);
	}

	let index;
	for (index = 0; index < pastDaysList.length; ++index) {
		let dayNumbas = (pastDaysList[index]);
		let preTwo = "record-" + dayNumbas;
		let pastDay = document.getElementById(preTwo);
		document.getElementById(preTwo).style.backgroundImage = "url('img/albums/album" + dayNumbas + ".jpg')";	
	}

	function discSpin(){
		todayZeDay.classList.add('spinDisc');

		// todayZeDay.addEventListener("click", function(){
			$(todayZeDay).on('click', function(){
			// $('#dealCont').toggleClass('deal-show');
			$('#dealCont2').toggleClass('deal-show2');
		});
		// }); 

		$('#closeButton').on('click', function(){
				// $('#dealCont').toggleClass('deal-show');
				$('#dealCont2').removeClass('deal-show2');
				$('#dealCont2').addClass('deal-hide2');
			});
		
		$('#dealCloserLeft').on('click', function(){
			$('#dealCont2').removeClass('deal-show2');
			$('#dealCont2').addClass('deal-hide2');
		});
		$('#dealCloserRight').on('click', function(){
			$('#dealCont2').removeClass('deal-show2');
			$('#dealCont2').addClass('deal-hide2');
		});
		$('#dealCloserTop').on('click', function(){
			$('#dealCont2').removeClass('deal-show2');
			$('#dealCont2').addClass('deal-hide2');
		});
		$('#dealCloserBottom').on('click', function(){
			$('#dealCont2').removeClass('deal-show2');
			$('#dealCont2').addClass('deal-hide2');
		});
		
		let dealInnerH2 = document.getElementById('deal-inner-h2').innerHTML = "December "+ zeDay;
		let dealAlbumImage = document.getElementById('deal-album-img').src = "img/albums/album" + zeDay + ".jpg";
		let dealAlbumArtist = document.getElementById('deal-album-h2');
		let dealAlbumTitle = document.getElementById('deal-album-h3');
		let ymlImage1 = document.getElementById('yml-img1').src = "img/albums/yml/yml-" + zeDay + "-1.jpg"
		let ymlImage2 = document.getElementById('yml-img2').src = "img/albums/yml/yml-" + zeDay + "-2.jpg"
		let ymlImage3 = document.getElementById('yml-img3').src = "img/albums/yml/yml-" + zeDay + "-3.jpg"
		let ymlTitle1 = document.getElementById('ymlTitle1');
		let ymlTitle2 = document.getElementById('ymlTitle2');
		let ymlTitle3 = document.getElementById('ymlTitle3');

		switch(zeDay){
			case 1:
			dealAlbumArtist.innerHTML ="Greta Van Fleet";
			dealAlbumTitle.innerHTML = "Anthem of the Peaceful Army";
			ymlTitle1.innerHTML="The Glorious Sons";
			ymlTitle2.innerHTML="Rush";
			ymlTitle3.innerHTML="Monster Truck";
			break;
			case 2:
			dealAlbumArtist.innerHTML ="Eminem";
			dealAlbumTitle.innerHTML = "Kamikaze";
			ymlTitle1.innerHTML="Classified";
			ymlTitle2.innerHTML="Logic";
			ymlTitle3.innerHTML="Kendrick Lamar";
			break;
			case 3:
			dealAlbumArtist.innerHTML ="Queen";
			dealAlbumTitle.innerHTML = "Bohemian Rhapsody Motion Picture Soundtrack";
			ymlTitle1.innerHTML="Mamma Mia! Here We Go Again";
			ymlTitle2.innerHTML="Guardians of the Galaxy 2";
			ymlTitle3.innerHTML="Sam Smith";
			break;
			case 4:
			dealAlbumArtist.innerHTML ="Drake";
			dealAlbumTitle.innerHTML = "Scorpion";
			ymlTitle1.innerHTML="The Weeknd";
			ymlTitle2.innerHTML="J Cole";
			ymlTitle3.innerHTML="Migos";
			break;
			case 5:
			dealAlbumArtist.innerHTML ="Post Malone";
			dealAlbumTitle.innerHTML = "Beerbongs & Bentleys";
			ymlTitle1.innerHTML="XXXtentacion";
			ymlTitle2.innerHTML="Kris Wu";
			ymlTitle3.innerHTML="6lack";
			break;
			case 6:
			dealAlbumArtist.innerHTML ="Various Artists";
			dealAlbumTitle.innerHTML = "A Star Is Born OST";
			ymlTitle1.innerHTML="Lady Gaga";
			ymlTitle2.innerHTML="Johnny Reid";
			ymlTitle3.innerHTML="Florence and the Machine";
			break;
			case 7:
			dealAlbumArtist.innerHTML ="Shawn Mendes";
			dealAlbumTitle.innerHTML = "Shawn Mendes";
			ymlTitle1.innerHTML="Maroon 5";
			ymlTitle2.innerHTML="5 Seconds of Summer";
			ymlTitle3.innerHTML="Troye Sivan";
			break;
			case 8:
			dealAlbumArtist.innerHTML ="Lil Wayne";
			dealAlbumTitle.innerHTML = "Tha Carter V";
			ymlTitle1.innerHTML="Nicki Minaj";
			ymlTitle2.innerHTML="Kids See Ghosts";
			ymlTitle3.innerHTML="Rich Tha Kid";
			break;
			case 9:
			dealAlbumArtist.innerHTML ="Rod Stewart";
			dealAlbumTitle.innerHTML = "Blood Red Roses";
			ymlTitle1.innerHTML="Van Morrison";
			ymlTitle2.innerHTML="Elvis Costello";
			ymlTitle3.innerHTML="Bob Seger - I Knew you When";
			break;
			case 10:
			dealAlbumArtist.innerHTML ="Mumford and Sons";
			dealAlbumTitle.innerHTML = "Delta";
			ymlTitle1.innerHTML="James Bay";
			ymlTitle2.innerHTML="Snow Patrol";
			ymlTitle3.innerHTML="Lumineers";
			break;
			case 11:
			dealAlbumArtist.innerHTML ="Ariana Grande";
			dealAlbumTitle.innerHTML = "Sweetener";
			ymlTitle1.innerHTML="Halsey";
			ymlTitle2.innerHTML="Rihanna";
			ymlTitle3.innerHTML="Taylor Swift";
			break;
			case 12:
			dealAlbumArtist.innerHTML ="Paul McCartney";
			dealAlbumTitle.innerHTML = "Egypt Station";
			ymlTitle1.innerHTML="The Beatles - White Album Reissue";
			ymlTitle2.innerHTML="John Lennon - Imagine";
			ymlTitle3.innerHTML="The Beach Boys Philharmonic";
			break;
			case 13:
			dealAlbumArtist.innerHTML ="Andrea Bocelli";
			dealAlbumTitle.innerHTML = "Si";
			ymlTitle1.innerHTML="Alexandra Stoliski";
			ymlTitle2.innerHTML="The Tenors - Christmas Together";
			ymlTitle3.innerHTML="Lindsay Sterling";
			break;
			case 14:
			dealAlbumArtist.innerHTML ="Tony Bennett & Diana Krall";
			dealAlbumTitle.innerHTML = "Love Is Here To Stay";
			ymlTitle1.innerHTML="Frank Sinatra";
			ymlTitle2.innerHTML="Madelyne Peyroux";
			ymlTitle3.innerHTML="Molly Johnson";
			break;
			case 15:
			dealAlbumArtist.innerHTML ="Steve Perry";
			dealAlbumTitle.innerHTML = "Traces";
			ymlTitle1.innerHTML="Sting and Shaggy";
			ymlTitle2.innerHTML="Tom Petty";
			ymlTitle3.innerHTML="Seal";
			break;
			case 16:
			dealAlbumArtist.innerHTML ="Carrie Underwood";
			dealAlbumTitle.innerHTML = "Cry Pretty";
			ymlTitle1.innerHTML="Shania Twain";
			ymlTitle2.innerHTML="Jess Moskaluke";
			ymlTitle3.innerHTML="Kacey Musgraves";
			break;
			case 17:
			dealAlbumArtist.innerHTML ="Elton John";
			dealAlbumTitle.innerHTML = "Diamonds";
			ymlTitle1.innerHTML="Restoration: Reimagining the Songs of Elton John and Bernie Taupin";
			ymlTitle2.innerHTML="Revamp: Reimagining the Songs of Elton John & Bernie Taupin";
			ymlTitle3.innerHTML="Paul McCartney - Egypt Station";
			break;
			case 18:
			dealAlbumArtist.innerHTML ="Alessia Cara";
			dealAlbumTitle.innerHTML = "The Pains of Growing";
			ymlTitle1.innerHTML="Sabrina Carpenter";
			ymlTitle2.innerHTML="The Beaches";
			ymlTitle3.innerHTML="Bishop Briggs";
			break;
			case 19:
			dealAlbumArtist.innerHTML ="Imagine Dragons";
			dealAlbumTitle.innerHTML = "Origins";
			ymlTitle1.innerHTML="30 Seconds to Mars";
			ymlTitle2.innerHTML="New City";
			ymlTitle3.innerHTML="Dan Mangan";
			break;
			case 20:
			dealAlbumArtist.innerHTML ="Serena Ryder";
			dealAlbumTitle.innerHTML = "Christmas Kisses";
			ymlTitle1.innerHTML="Jann Arden";
			ymlTitle2.innerHTML="Jess Moskaluke";
			ymlTitle3.innerHTML="Whitehorse";
			break;
			case 21:
			dealAlbumArtist.innerHTML ="Eric Church";
			dealAlbumTitle.innerHTML = "Desperate Man";
			ymlTitle1.innerHTML="Tim Hicks";
			ymlTitle2.innerHTML="Bret Young";
			ymlTitle3.innerHTML="Brothers Osborne";
			break;
			case 22:
			dealAlbumArtist.innerHTML ="Mark Knopfler";
			dealAlbumTitle.innerHTML = "Down The Road Wherever";
			ymlTitle1.innerHTML="Colin James";
			ymlTitle2.innerHTML="Nathaniel Rateliff";
			ymlTitle3.innerHTML="John Mellencamp";
			break;
			case 23:
			dealAlbumArtist.innerHTML ="The 1975";
			dealAlbumTitle.innerHTML = "A Brief Inquiry Into Online Relationships";
			ymlTitle1.innerHTML="St. Vincent";
			ymlTitle2.innerHTML="Robyn";
			ymlTitle3.innerHTML="Christine and the Queens";
			break;
			case 24:
			dealAlbumArtist.innerHTML ="Arkells";
			dealAlbumTitle.innerHTML = "Rally Cry";
			ymlTitle1.innerHTML="Metric";
			ymlTitle2.innerHTML="Calpurnia";
			ymlTitle3.innerHTML="Mother Mother";
			break;
			case 25:
			dealAlbumArtist.innerHTML ="";
			dealAlbumTitle.innerHTML = "";
			break;
		}
	}

	discSpin();

	$('#santaClause').on('click', function(){
		$( this ).addClass('santa-clickable2');
		$('#santaSpeech').addClass('speech-show');
		$('#santaSpeech').removeClass('speech-hide');
	});

	$('#xClose').on('click', function(){
		$('#santaSpeech').removeClass('speech-show');
		$('#santaSpeech').addClass('speech-hide');
		$('#santaClause').removeClass('santa-clickable2');
	});

};

//SNOW

var Snowflake = (function() {

	var flakes;
	var flakesTotal = 250;
	var wind = 0;
	var mouseX;
	var mouseY;

	function Snowflake(size, x, y, vx, vy) {
		this.size = size;
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.hit = false;
		this.melt = false;
		this.div = document.createElement('div');
		this.div.classList.add('snowflake');
		this.div.style.width = this.size + 'px';
		this.div.style.height = this.size + 'px';
	}

	Snowflake.prototype.move = function() {
		if (this.hit) {
			if (Math.random() > 0.995) this.melt = true;
		} else {
			this.x += this.vx + Math.min(Math.max(wind, -10), 10);
			this.y += this.vy;
		}

	        // Wrap the snowflake to within the bounds of the page
	        if (this.x > window.innerWidth + this.size) {
	        	this.x -= window.innerWidth + this.size;
	        }

	        if (this.x < -this.size) {
	        	this.x += window.innerWidth + this.size;
	        }

	        if (this.y > window.innerHeight + this.size) {
	        	this.x = Math.random() * window.innerWidth;
	        	this.y -= window.innerHeight + this.size * 2;
	        	this.melt = false;
	        }

	        var dx = mouseX - this.x;
	        var dy = mouseY - this.y;
	        this.hit = !this.melt && this.y < mouseY && dx * dx + dy * dy < 2400;
	    };

	    Snowflake.prototype.draw = function() {
	    	this.div.style.transform =
	    	this.div.style.MozTransform =
	    	this.div.style.webkitTransform =
	    	'translate3d(' + this.x + 'px' + ',' + this.y + 'px,0)';
	    };

	    function update() {
	    	for (var i = flakes.length; i--; ) {
	    		var flake = flakes[i];
	    		flake.move();
	    		flake.draw();
	    	}
	    	requestAnimationFrame(update);
	    }

	    Snowflake.init = function(container) {
	    	flakes = [];

	    	for (var i = flakesTotal; i--; ) {
	    		var size = (Math.random() + 0.2) * 12 + 1;
	    		var flake = new Snowflake(
	    			size,
	    			Math.random() * window.innerWidth,
	    			Math.random() * window.innerHeight,
	    			Math.random() - 0.5,
	    			size * 0.3
	    			);
	    		container.appendChild(flake.div);
	    		flakes.push(flake);
	    	}

	    	container.onmousemove = function(event) {
	    		mouseX = event.clientX;
	    		mouseY = event.clientY;
	    		wind = (mouseX - window.innerWidth / 2) / window.innerWidth * 6;
	    	};

	    	container.ontouchstart = function(event) {
	    		mouseX = event.targetTouches[0].clientX;
	    		mouseY = event.targetTouches[0].clientY;
	    		event.preventDefault();
	    	};

	    	window.ondeviceorientation = function(event) {
	    		if (event) {
	    			wind = event.gamma / 10;
	    		}
	    	};

	    	update();
	    };

	    return Snowflake;

	}());

window.onload = function() {
	setTimeout(function() {
		Snowflake.init(document.getElementById('snow'));
	}, 500);
};



app.initApp();
