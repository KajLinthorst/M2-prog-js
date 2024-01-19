class Dino{
    constructor(naam, vleeseter, leeftijd){
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
    }
}

class App {

    
    runApplication() 
    {
    
        console.log("hellow rold");

        let dino = new Dino("Hendrik", true, 14);
        console.log(dino);
        console.log("De leeftijd van deze" + dino.naam + " is " + dino.leeftijd);
        console.log("En deze " + dino.naam + "eet vlees " + dino.vleeseter);


    }   
}



let app = new App();
app.runApplication();
