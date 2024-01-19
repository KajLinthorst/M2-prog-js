class App {

    
    runApplication() {
                  
        }

    }

class Greet {
    constructor(){
        this.greeting = "Greetings!!";
    }

    showGreeting(){
        console.log("Greeting van binnen: " + this.greeting);
    }
}

class GoodBye{
    constructor(){
        this.regard = "Goodbye!!";
    }

    showGoodbye(){
        console.log("Goodbye van binnen: " + this.regard);
    }
}

let greet = new Greet()
let goodbye = new GoodBye();

greet.showGreeting();
goodbye.showGoodbye();

console.log("Greeting van buiten: " + greet.greeting);
console.log("Goodbye van buiten: " + goodbye.regard);
let app = new App();
app.runApplication();
