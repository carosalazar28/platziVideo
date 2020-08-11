import mediaPlayer from "../MediaPlayer"

class AutoPlay {
    constructor() { }
    run(player: mediaPlayer) {
        player.mute()
        player.play()
    }
}

export default AutoPlay