import {Cell} from "./Cell"

export class Grid {
    constructor(canvas, context) {
        this.canvas = canvas
        this.context = context
        this.mouseDown = false
        this.mouseDown = false
        this.cells = []
        this.initCanvas = this.initCanvas.bind(this)
        this.draw = this.draw.bind(this)

        this.handleMouseUp = this.handleMouseUp.bind(this)
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.initCanvas()
        this.draw()
    }

    handleMouseDown (e) {
        let x = e.pageX - e.target.offsetLeft, y = e.pageY - e.target.offsetTop;
        this.mouseDown = true
        let X = -1 + Math.ceil(x/20)
        let Y = -1 + Math.ceil(y/20)
        this.cells[Y][X].switch()
    }

    handleMouseUp(e){
        let x = e.pageX - e.target.offsetLeft, y = e.pageY - e.target.offsetTop;
        this.mouseDown = false
        let X = -1 + Math.ceil(x/20)
        let Y = -1 + Math.ceil(y/20)
    }

    handleMouseMove (e) {
        if(this.mouseDown){
            let x = e.pageX - e.target.offsetLeft, y = e.pageY - e.target.offsetTop
            this.x = x
            this.y = y
            let X = -1 + Math.ceil(x/20)
            let Y = -1 + Math.ceil(y/20)
            this.cells[Y][X].switch()
        }
    }

    get Cells(){
        return this.cells
    }

    get Width(){
        return this.cells.length
    }

    get Height(){
        return this.cells[0].length
    }

    initCanvas(game) {
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e))

        this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e))

        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e))

        this.canvas.width = window.innerWidth - 39
        this.canvas.height = window.innerHeight - 40

        let ltp = {x: 0, y: 0}
        while (ltp.y < this.canvas.height){
            ltp.x = 0
            let rowCells = []
            while (ltp.x < this.canvas.width){
                rowCells.push(new Cell(ltp, 'white', this.context))
                ltp.x += 20
            }
            this.cells.push(rowCells)
            ltp.y += 20
        }
    }

    update(){
        let arr = [] // ячейки которые 'оживут' в текущем кадре
        for(let i = 0; i < this.cells.length; i++){
            for (let j = 0; j < this.cells[i].length; j++){

                let neighbors = this.cells[i][j].countLivingNeighbors(this.cells[i][j].y / 20, this.cells[i][j].x / 20, this.cells.length, this.cells[i].length, this.cells)
                if(neighbors === 3){
                    arr.push(this.cells[i][j])
                }else if(neighbors === 2 && this.cells[i][j].Alive){
                    arr.push(this.cells[i][j])
                }
            }
        }

        for(let i = 0; i < this.cells.length; i++){
            for (let j = 0; j < this.cells[i].length; j++){
                this.cells[i][j].die()
            }
        }

        arr.forEach(elem => {
            elem.born()
        })

    }

    draw() {
        let y = 0

        while (y < this.canvas.height){
            this.context.beginPath();
            this.context.moveTo(0, y);
            this.context.lineTo(this.canvas.width, y);
            this.context.stroke();
            y = y + 20
        }

        let x = 0

        while (x < this.canvas.width){
            this.context.beginPath();
            this.context.moveTo(x, 0);
            this.context.lineTo(x, this.canvas.height);
            this.context.stroke();
            x = x + 20
        }
    }
}
