const $video2 = document.querySelector("#video2")
const $play2 = document.querySelector("#Play2")
const $pause2 = document.querySelector("#Pause2")
const $forward2 = document.querySelector("#Forward2")
const $backward2 = document.querySelector("#Backward2")

$play2.addEventListener("click", handlePlay2)
$pause2.addEventListener("click", handlePause2)

function handlePlay2() {
	$video2.play()
	$play2.hidden = true
	$pause2.hidden = false
	console.log("Le diste play al vídeo")
}

function handlePause2() {
	$video2.pause()
	$pause2.hidden = true
	$play2.hidden = false
	console.log("Le diste pausa al vídeo")
}

$forward2.addEventListener("click", handleForward2)
$backward2.addEventListener("click", handleBackward2)

function handleForward2(){
	$video2.currentTime+=10
	console.log("para adelante 10 segundos", $video2.currentTime)
	
}

function handleBackward2(){
	$video2.currentTime=$video2.currentTime-10
	console.log("para atrás 10 segundos", $video2.currentTime)
	
}