const $video = document.querySelector("#video")
const $play = document.querySelector("#Play")
const $pause = document.querySelector("#Pause")
const $forward = document.querySelector("#Forward")
const $backward = document.querySelector("#Backward")

$play.addEventListener("click", handlePlay)
$pause.addEventListener("click", handlePause)

function handlePlay() {
	$video.play()
	$play.hidden = true
	$pause.hidden = false
	console.log("Le diste play al vídeo")
}

function handlePause() {
	$video.pause()
	$pause.hidden = true
	$play.hidden = false
	console.log("Le diste pausa al vídeo")
}

$forward.addEventListener("click", handleForward)
$backward.addEventListener("click", handleBackward)

function handleForward(){
	$video.currentTime+=30
	console.log("para adelante 10 segundos", $video.currentTime)
	
}

function handleBackward(){
	$video.currentTime=$video.currentTime-30
	console.log("para atrás 10 segundos", $video.currentTime)
	
}

/*const $progress = document.querySelector("#progress")
$video.addEventListener("loadedmetada", handleLoaded)
$video.addEventListener("timeupdate", handleTimeUpdate)

function handleLoaded(){
	$progress.max = $video.duration
}

function handleTimeUpdate(){
	$progress.value = $video.currentTime
}

$progress.addEventListener("input", handleInput)

function handleInput(){
	$video.currentTime = $progress.value
}*/