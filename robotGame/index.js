class Arena {
    constructor(){
        this.robotsOne = new Robot("Leonid");
        this.robotsTwo = new Robot("Xerx");
        this.round = 0;
    }
    startGame(){
        let notEnd = false;
        do {
            this.round ++;
            notEnd = this.__goRound();
        }while(notEnd);
        console.log(this.round);
    }    
    __goRound(){
        this.robotsTwo.getDamage(this.robotsOne.giveDamage());
        if(!this.robotsTwo.alive()){
            console.log(`Робот ${this.robotsOne.name} Win!!!`);
            return false            
        }else{
            this.robotsOne.getDamage(this.robotsTwo.giveDamage());
            if(!this.robotsOne.alive()){
                console.log(`Робот ${this.robotsTwo.name} Win!!!`);
                return false
            }
        }
        return true
    }
}
class Robot {
    constructor(name){
        this.name = name;
        this.heals = 100;
        this.damage = 2,5;
    }
    getDamage(){
        this.heals = this.heals - this.damage;           
    }
    giveDamage(){
        return this.damage;
    }
    alive(){
       return this.heals > 0;        
    }
}

const game = new Arena();
game.startGame();