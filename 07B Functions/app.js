class App {

    
    runApplication() {
                  
        }

    }

class Greet {
    constructor(){
        
    }

    showGreeting(){
        console.log("Greetings!");
    }
}

class GoodBye{
    constructor(){
        
    }

    showGoodbye(){
        console.log("Bye Bye!!");
    }
}

let greet = new Greet()
greet.showGreeting();
let goodbye = new GoodBye();
goodbye.showGoodbye();
let app = new App();
app.runApplication();

greet.showGreeting();
goodbye.showGoodbye();

greet.showGreeting();
goodbye.showGoodbye();
