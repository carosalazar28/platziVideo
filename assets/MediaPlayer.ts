class mediaPlayer {
    media: HTMLMediaElement
    plugins: Array<any>

    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this.initPlugins()
    }
    private initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            get muted() {
                return this.media.muted
            }
        }
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }
    toggle() {
        this.media.paused
            ? this.media.play()
            : this.media.pause()
    }
    pause() {
        this.media.pause()
    }
    play() {
        this.media.play()
    }
    mute() {
        this.media.muted = true
    }
    unmute() {
        this.media.muted
            ? this.media.muted = false
            : this.media.muted = true
    }
}







export {mediaPlayer}