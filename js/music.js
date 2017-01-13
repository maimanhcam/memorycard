$(document).ready(function() {

	playMusic();
});
function playMusic(){
    var audio = document.getElementById("bg-music");
    audio.play();
    audio.loop = true;
}