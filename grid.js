class grid{
    constructor(_x,_y,_rows,_cols,_cellSize){
        this.cellSize=_cellSize
        this.rows=_rows
        this.cols=_cols
        this.x=_x;
        this.y=_y;
    }
    
    display(){
        for (let x_cell = 0; x_cell < this.rows; x_cell++) {
            for (let y_cell = 0; y_cell < this.cols; y_cell++) {
                rect(this.x+x_cell*this.cellSize, this.y+y_cell*this.cellSize,this.cellSize,this.cellSize);
            
            }
        }
    }

    getIndex(x,y,cellSize){
        let x_cell=x%cellSize;
        let y_cell=y%cellSize;
        return(new vector(x_cell,y_cell))
    }

    getPixelPos(x,y){
        let x_cell=x*this.cellSize+this.x;
        let y_cell=y*this.cellSize+this.y;
        return(new vector(x_cell,y_cell))
    }
}