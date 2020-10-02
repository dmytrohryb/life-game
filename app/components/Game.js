export class Game {
    constructor () {
        this.observers = []
        this.timer = ''
        this.speed = 500
        this.subscribe = this.subscribe.bind(this)
        this.broadcast = this.broadcast.bind(this)
        this.unsubscribe = this.unsubscribe.bind(this)
        this.start = this.start.bind(this)
        this.changeSpeed = this.changeSpeed.bind(this)
    }

    start(){
        this.timer = setInterval(() => {this.broadcast()}, this.speed)
    }

    oneStep(){
        this.pause()
        this.broadcast()
    }

    changeSpeed(speed){
        if(parseInt(speed)) this.speed = speed
    }

    pause(){
        if(this.timer !== '') clearInterval(this.timer)
    }

    subscribe (fn) {
        this.observers.push(fn)
    }

    unsubscribe (fn) {
        this.observers = this.observers.filter(subscriber => subscriber !== fn)
    }

    broadcast () {
        this.observers.forEach(subscriber => subscriber.update())
    }
}