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
    constructor(name,heals,damage){
        this.name = name;
        this.heals = heals;
        this.damage = damage;
    }
    getDamage(damage){
        this.heals = this.heals - damage;           
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

class Heavy extends Robot{
    constructor(name) {
        super(name,10000,30);
        this.armor = 20;
    }
    getDamage(damage){
       this.heals = this.heals - (damage * (1 - this.armor / 100));        
    }
}

class Assault extends Robot{
    constructor(name) {
        super(name,10000,30);
        this.crit = 30;
    }
    giveDamage(){
        let critChance = Math.random() * 100;
        if (critChance <= this.crit){
            return  this.damage*2
        }else{
            return this.damage
        }
    }
}

class Light extends Robot{
    constructor(name) {
        super(name,10000,30);
        this.agility = 50;
    }
    getDamage(damage){
        let agilityChance = Math.random() * 100;
        if (agilityChance <= this.agility){
            this.heals = this.heals - damage
        }
    }
}



let kolya = new Heavy('kolya');
let lenya = new Assault('lenya');
let vanya = new Light('vanya');
vanya.getDamage(20);
console.log(vanya);