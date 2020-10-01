import {Grid} from "./components/Grid"
import {Game} from "./components/Game"

let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

const game = new Game()
let grid = new Grid(canvas, context)

game.subscribe(grid)
setTimeout(()=>{
    game.start()
}, 10000)