import {mediaPlayer}  from "./MediaPlayer.js"
import {AutoPlay} from "./plugins/AutoPlay.js"
import {AutoPause} from "./plugins/AutoPause.js"

const video = document.querySelector("video")
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")

const player = new mediaPlayer({ 
    el : video, 
    plugins: [new AutoPlay(), new AutoPause()], 
})

button1.onclick = () => player.play()
button2.onclick = () => player.unmute()