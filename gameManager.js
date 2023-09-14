class manager{
    constructor(){
        this.players=[];
        this.turn=0;
        this.canMove=true;
        this.hasAction=true;
        
    }

    addPlayer(_ship){
        this.players.push(_ship);

    }

    getPlayer(_name){
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].name==_name){
                return(this.players[i]);
            }
            
        }
    }

    getActivePlayer(){
        return this.players[this.turn%this.players.length];
    }

    newTurn(){
        //print(this)
        //print("old turn"+ this.turn)
        this.turn+=1;
        this.canMove=true;
        this.hasAction=true;
        print("Turn is now "+this.turn);
    }

    display(){
        fill(255);
        let localMove;
        if (this.canMove==true) {
            localMove = "can move"
        } else {
            localMove = "can't move"
        }

        let localAction;
        if (this.hasAction==true) {
            localAction = "can perform an action"
        } else {
            localAction = "can't perform an action"
        }
        let localPlayer = this.players[this.turn%this.players.length]
        text(`The Turn is ${this.turn} \n It's ${localPlayer.name}'s turn\n${localPlayer.name} ${localMove}\n${localPlayer.name} ${localAction}`,350,600);
    
    
    }
}