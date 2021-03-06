import mediaPlayer  from "./MediaPlayer"
import AutoPlay from "./plugins/AutoPlay"
import AutoPause from "./plugins/AutoPause"
import Ads from "./plugins/add"

const video = document.querySelector("video")
const button1: HTMLElement = document.querySelector(".button1")
const button2: HTMLElement = document.querySelector(".button2")

const player = new mediaPlayer({ 
    el : video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()], 
})

button1.onclick = () => player.toggle()
button2.onclick = () => player.unmute()