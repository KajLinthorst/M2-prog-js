class App {

    
    runApplication() {
        
        let uiButton = document.getElementById("uiButton")
        
        let localeFunctie = function (e)
        {
            console.log("click");
        };
        uiButton.addEventListener("click",localeFunctie);


    }

}

let app = new App();
app.runApplication();
