class Dino{
    constructor(naam, vleeseter, leeftijd,){
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }

    eatFood(foodtoEat){
        foodtoEat.leeft = false;
        this.honger = false;
        console.log("ik ben een " + this.naam);
        console.log("mijn honger is " + this.honger); 
    }
}

class App {

    
    runApplication() 
    {
    
        console.log("hellow rold");

        let dino = new Dino("Hendrik", true, 14,);
        let planteneter = new Dino("Greta", false, 15,);
        console.log(dino);
        console.log("De leeftijd van deze " + dino.naam + " is " + dino.leeftijd);
        console.log("En deze " + dino.naam + " eet vlees: " + dino.vleeseter);   
        console.log(planteneter); 

        dino.eatFood(planteneter);
        console.log("leeft " + planteneter.naam + " ? = " + planteneter.leeft);
    }   
}



let app = new App();
app.runApplication();
