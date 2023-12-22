class App {


    runApplication() {
        console.log("hello world!")
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        
        console.log(canvas)



        this.teken200Cirkels(g)
        
    }
    


    teken200Cirkels(g){
        for (let i = 0; i < 201; i++) { 
            let randomX = Math.floor(Math.random() * 1001);
            let randomY = Math.floor(Math.random() * 1001);
            let randomSize = Math.floor(Math.random() * 15);
            let randomColorNumber = Math.floor(Math.random() * 5);
            let randomColor = ["blue", "red", "yellow", "green"]



            g.fillStyle = randomColor[randomColorNumber];
            g.beginPath();
            g.arc(randomX, randomY, randomSize, 0, Math.PI * 2);
            g.stroke();
            g.fill();
            g.closePath()

          }
    }
    
    


}

let app = new App();
app.runApplication();
