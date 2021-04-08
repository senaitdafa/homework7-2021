var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("video");
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume;
 });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate = -0.05;
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video");
	video.playbackRate = 0.05;
});