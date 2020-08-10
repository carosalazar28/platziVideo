import { mediaPlayer } from "../MediaPlayer.js"

class AutoPlay {
    constructor() { }
    run(player: mediaPlayer) {
        player.mute()
        player.play()
    }
}

export {AutoPlay}