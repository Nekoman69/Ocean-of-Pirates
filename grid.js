class grid{
    constructor(_x,_y,_rows,_cols,_cellSize){
        this.cellSize=_cellSize
        this.rows=_rows
        this.cols=_cols
        this.x=_x;
        this.y=_y;
        this.padding=50
        this.offsetX=this.cellSize/2;
        this.offsetY=this.cellSize/2;
    }
    
    display(){


        for (let x_cell = 0; x_cell < this.rows; x_cell++) {
            for (let y_cell = 0; y_cell < this.cols; y_cell++) {
                rect(this.padding+this.offsetX+x_cell*this.cellSize, this.padding+this.offsetY+y_cell*this.cellSize,this.cellSize,this.cellSize);
            
            }
        }
    }

    getIndex(x,y,_cellSize){
        if (!_cellSize) {
            _cellSize=this.cellSize;
        }

        let x_cell=ceil(((x-this.padding)/(_cellSize*this.rows))*this.rows);
        let y_cell=ceil(((y-this.padding)/(_cellSize*this.cols))*this.cols);

        return(new vector(x_cell-1,y_cell-1))
    }

    getPixelPos(x,y){
        let x_cell=x*this.cellSize+this.offsetX+this.padding;
        let y_cell=y*this.cellSize+this.offsetY+this.padding;
        return(new vector(x_cell,y_cell))
    }

    getSnappedPos(x,y){
        let _cellSize=this.cellSize
        let _x=x-this.padding;
        let _y=y-this.padding;
        //print(_x)
        let x_cell=_x%_cellSize;
        let y_cell=_y%_cellSize;
        x_cell-=this.offsetX+this.padding;
        y_cell-=this.offsetY+this.padding;
        return(new vector(_x-x_cell,_y-y_cell));
    }
}