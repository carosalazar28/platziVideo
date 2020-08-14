class mediaPlayer {
    media: HTMLMediaElement
    plugins: Array<any>
    container: HTMLElement
    
    constructor(config: { el: any; plugins: any }) {
        this.media = config.el
        this.plugins = config.plugins || []
        this.initPlayer()
        this.initPlugins()
    }

    initPlayer() {
        this.container = document.createElement('div')
        this.container.style.position = 'relative'
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
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


export default mediaPlayer