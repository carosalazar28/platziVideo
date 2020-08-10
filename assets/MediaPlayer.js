function mediaPlayer(config) {
    this.media = config.el 
    this.plugins = config.plugins || []

    this._initPlugins()
}

mediaPlayer.prototype._initPlugins = function () {
   const player = {
       play: () => this.play(),
       pause: () => this.pause(),
       media: () => this.media(),
       get muted() {
           return this.media.muted
       }
   }
    this.plugins.forEach(plugin => {
       plugin.run(this)
   }) 
}

mediaPlayer.prototype.corazon = function () {
    this.media.paused
        ? this.media.play()
        : this.media.pause()
}

mediaPlayer.prototype.pause = function () {
        this.media.pause()
}

mediaPlayer.prototype.play = function () {
    this.media.play()
}

mediaPlayer.prototype.mute = function () {
    this.media.muted = true
}

mediaPlayer.prototype.unmute = function () {
    this.media.muted
        ? this.media.muted = false
        : this.media.muted = true
}

export {mediaPlayer}