class ship{
    constructor(_x,_y,_money,_name){
        this.pos=new vector(_x,_y)
        this.money=_money;
        this.name=_name;

    }

    updateShip(){
        this.display(this.pos.x,this.pos.y);
    }
    //Renders the ship
    display(x,y){
        rectMode(CENTER);
        rect(x, y, 50, 50);
        textAlign(CENTER)
        text(this.name,x,y-50)
        
    }

    getCoins(){
        let a = this.money.toString().split("").reverse();
        let gold = a[2] || 0;
        let silver = a[1] || 0;
        let copper = a[0] || 0;
        let arr = [gold, silver, copper];
        return arr;
    }
    goTo(pos){
        print(pos)
        this.pos.set(pos);
    }
}

