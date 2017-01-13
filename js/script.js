var array1 = [1,2,3,4,5,6,7,8,9,10,11,12];
var array = array1.concat(array1);
var current = null;// kb bieen luu trang thai quan bai da lat len
var count = 0;//dem so quan bai chon dung
var runTime = 0;
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}
shuffle(array);

function flip(card) {

	$(card).toggleClass('flipped');
	
	if(!current) {
		current = $(card);
		current.css('pointer-events', 'none');
		
	} else {
		if(current.attr('data-name') != $(card).attr('data-name')) {
			setTimeout(function() {
				//khac nhau
				current.css('pointer-events', 'auto');
				current.toggleClass('flipped');
				$(card).toggleClass('flipped');
				current = null;
				
			},300);	
		} else {
			setTimeout(function() {
				//playSound('shoot');
				document.getElementById('shoot').play();
				$(card).css('visibility','hidden');//an card neu giong nhau
				current.css('visibility','hidden');
				
				current = null;
				 count++;
				if(count == 12) {
					$('.card').hide();
					$('.stop').append('<h1>You Win</h1><button class="playagain">Play again</button>');
					$('.stop').show();
					pauseVid();
					document.getElementById('win').play();
					$('.playagain').click(function() {

						window.location.href = "index.html"
					});
				}

			},100);
		}
	}
}
function load(array){
	for (var i = 0; i < array.length; i++) {
		var src='';
		$('.content').append('<div class="gird"><div class="card" data-name="' + array[i] + '" onclick="flip(this)"><div class="back"><img src="img/back.jpg"/></div><div class="front"><img src="img/f'+ array[i] +'.jpg"/></div></div></div>');
	};
	var run = setInterval(function(){
		runTime--;
		$('progress').val(runTime);
		//het thoi gian 
		if(runTime == 0){
			$('.card').hide();
			$('.stop').append('<h1>You Lose</h1><button class="playagain">Play again</button>');
			$('.stop').show();
			pauseVid();
			document.getElementById('lose').play();
			clearInterval(run);//ket thuc game
			$('.playagain').click(function() {

				window.location.href = "index.html"
			});

		}
	}, 1000);
}

function playSound(type) {
    document.getElementById(type + '-sound').load();
    document.getElementById(type + '-sound').play();
}
$('.hard').click(function() {
	runTime = 60;
	$('progress').attr('max',runTime);
	load(array);

	$('.modal').hide();
	
	//$(gird).css('width','12%');
});
$('.normal').click(function() {
	runTime = 100;
	$('progress').attr('max',runTime);
	load(array);
	$('.modal').hide();
	
	//$(gird).css('width','16.66%');
});
	$('.stop').hide();
var vid = document.getElementById("bg-music"); 
function pauseVid() { 
    vid.pause(); 
} 