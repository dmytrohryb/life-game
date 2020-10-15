import {Grid} from "./components/Grid"
import {Game} from "./components/Game"

let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let startBtn = document.getElementById('startBtn')
let pauseBtn = document.getElementById('pauseBtn')
let speedInput = document.getElementById('speed')
let oneStep = document.getElementById('oneStep')
let rules = document.getElementById('rules')

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

rules.addEventListener('mousedown', () => {
    const message = 'The game "Life" takes place on the cellular field, which is traditionally called the "universe".' + '\n'
        + 'Each cell can be alive or dead.' + '\n'
        + 'Generations change synchronously according to simple rules:' + '\n'
        + ' - in an empty (dead) cell, next to which there are exactly three living cells, life is born;' + '\n'
        + ' - if a living cell has two or three living neighbors, then this cell continues to live; otherwise (if there are less than two or more than three neighbors) the cell dies (“from loneliness” or “from overpopulation”).' + '\n'
        + 'How to start: you can mark cells by clicking on the cell. After marking, you can set the speed of what is happening on the screen and press the start button.'

    alert(message)
})

game.subscribe(grid)
