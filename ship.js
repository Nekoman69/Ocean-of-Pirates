class ship{
    constructor(_x,_y,_money){
        this.x=_x;
        this.y=_y;
        this.money=_money;

    }

    updateShip(){
        this.display();
    }
    //Renders the ship
    display(){
        square(this.x,this.y,50);
    }
}