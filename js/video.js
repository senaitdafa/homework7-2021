var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("video");
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume;
 });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate = video.playbackRate*0.95;
	console.log(video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video");
	video.playbackRate = video.playbackRate *1.05;
	console.log(video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	if (video.currentTime + 15 >= video.duration){
		video.currentTime = 0;
		console.log("return to beginning");
	}
	else{
		video.currentTime +=15;
		console.log(video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function(){

	if (video.muted === false){
		console.log("Muted Video")
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	else{
		console.log("Unmuted Video")
		video.muted = false;
		this.innerHTML = "Mute";

	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("update slider number");
	document.querySelector("#volume").innerHTML = this.value;


});