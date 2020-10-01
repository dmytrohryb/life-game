export class Game {
    constructor () {
        this.observers = []
        this.subscribe = this.subscribe.bind(this)
        this.broadcast = this.broadcast.bind(this)
        this.unsubscribe = this.unsubscribe.bind(this)
        this.start = this.start.bind(this)
    }

    start(){
        setInterval(() => {this.broadcast()}, 500)
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