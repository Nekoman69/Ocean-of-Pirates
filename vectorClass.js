class vector{
    constructor(_x,_y){
        this.x=_x;
        this.y=_y;
    }

    add(vec)
    {
        this.x+=vec.x;
        this.y+=vec.y;
    }

    set(vec){
        this.x=vec.x;
        this.y=vec.y;
    }
}
