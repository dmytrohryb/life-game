import {Grid} from "./components/Grid"
import {Game} from "./components/Game"

let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let startBtn = document.getElementById('startBtn')
let pauseBtn = document.getElementById('pauseBtn')
let speedInput = document.getElementById('speed')
let oneStep = document.getElementById('oneStep')

const game = new Game()
let grid = new Grid(canvas, context)

startBtn.addEventListener('mousedown', () => {
    game.start()
})

pauseBtn.addEventListener('mousedown', () => {
    game.pause()
})

speedInput.addEventListener('input', (e) => {
    game.changeSpeed(e.target.value)
})

oneStep.addEventListener('mousedown', () => {
    game.oneStep()
})



game.subscribe(grid)
