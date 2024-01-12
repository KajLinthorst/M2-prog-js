class App {

    
    runApplication() {
        
        let uiButton = document.getElementById("uiButton")
        
    
        uiButton.addEventListener("click",(e)=>
        {
            console.log("click!")
        });


    }

}

let app = new App();
app.runApplication();
