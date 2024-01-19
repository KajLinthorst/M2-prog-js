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

class Plant{
    constructor(naam, leeft){
        this.naam = naam;
        this.leeft = leeft;
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
        let struik = new Plant("Jeffy de Struik", true);
        let gras = new Plant("Geronimo de Grasspriet", true);
        
        planteneter.eatFood(struik);
        console.log("leeft " + struik.naam + "? = " + struik.leeft);
        
        planteneter.eatFood(gras);
        console.log("leeft " + gras.naam + "? = " + gras.leeft);

        dino.eatFood(planteneter);
        console.log("leeft " + planteneter.naam + " ? = " + planteneter.leeft);

    }   
}



let app = new App();
app.runApplication();
