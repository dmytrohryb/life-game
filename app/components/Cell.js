export class Cell {
    constructor(ltp, color, context) {
        this.x = ltp.x
        this.y = ltp.y
        this.context = context
        this.alive = false
        this.fill(color)
    }

    get Alive(){
        return this.alive
    }

    born(){
        this.alive = true
        this.fill('black')
    }

    die(){
        this.alive = false
        this.fill('white')
    }

    countLivingNeighbors(x, y, w, h, arr){
        let neighbors = [
            (x-1 < w && x-1 >= 0 && y < h && y >= 0 && arr[x-1][y].Alive) ? {x: x-1, y: y} : false, // средняя левая ячейка
            (x-1 < w && x-1 >= 0 && y-1 < h && y-1 >= 0 && arr[x-1][y-1].Alive) ? {x: x-1, y: y-1} : false,
            (x < w && x >= 0 && y-1 < h && y-1 >= 0 && arr[x][y-1].Alive) ? {x: x, y: y-1} : false,
            (x+1 < w && x+1 >= 0 && y-1 < h && y-1 >= 0 && arr[x+1][y-1].Alive) ? {x: x+1, y: y-1} : false,
            (x+1 < w && x+1 >= 0 && y < h && y >= 0 && arr[x+1][y].Alive) ? {x: x+1, y: y} : false,
            (x+1 < w && x+1 >= 0 && y+1 < h && y+1 >= 0 && arr[x+1][y+1].Alive) ? {x: x+1, y: y+1} : false,
            (x < w && x >= 0 && y+1 < h && y+1 >= 0 && arr[x][y+1].Alive) ? {x: x, y: y+1} : false,
            (x-1 < w && x-1 >= 0 && y+1 < h && y+1 >= 0 && arr[x-1][y+1].Alive) ? {x: x-1, y: y+1} : false
        ]
       // alert(neighbors)
        let count = 0
        for (let i = 0; i < neighbors.length; i++){
            if(neighbors[i] !== false){
                count++
            }
        }
        return count
    }

    switch(){
        (this.Alive) ? this.die() : this.born()
    }

    fill(color){
        this.context.fillStyle = color
        this.context.fillRect(this.x+1, this.y+1, 18, 18)
    }
}
