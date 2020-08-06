class AutoPlay {
    constructor() { }
    run(player) {
        player.mute()
        player.play()
    }
}

export {AutoPlay}