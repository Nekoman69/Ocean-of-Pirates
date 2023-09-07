class ship{
    constructor(_x,_y,_money,_name){
        this.x=_x;
        this.y=_y;
        this.money=_money;
        this.name=_name;

    }

    updateShip(){
        this.display();
    }
    //Renders the ship
    display(){
        square(this.x,this.y,50);
        textAlign(CENTER)
        text(this.name,this.x,this.y-50)
        
    }

    getCoins(){
        let a = this.money.toString().split("").reverse();
        let gold = a[2] || 0;
        let silver = a[1] || 0;
        let copper = a[0] || 0;
        let arr = [gold, silver, copper];
        return arr;
    }
}

