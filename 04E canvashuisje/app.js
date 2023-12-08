class App
{

    newApplication(){
    
    let canvas = document.getElementById("canvasId");
    let g = canvas.getContext("2d");
    let randomGetal = Math.random();
   
    
    this.bouwHuis(g, 100, 150)
    this.bouwHuis(g, 150, 150)
    this.bouwHuis(g, 200, 200)
    this.groeiBoem(g, 50, 50)




}
    

    bouwHuis(g, x, y){
        
        
        
        g.beginPath()
        g.moveTo(x+20,30+y)
        g.lineTo(x+20,50+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+20,30+y)
        g.lineTo(x+60,40+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+20,50+y)
        g.lineTo(x+60,60+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+60,40+y)
        g.lineTo(x+60,60+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+60,40+y)
        g.lineTo(x+80,30+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+80,30+y)
        g.lineTo(x+80,50+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+60,60+y)
        g.lineTo(x+80,50+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+80,30+y)
        g.lineTo(x+70,20+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+70,20+y)
        g.lineTo(x+60,40+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+70,20+y)
        g.lineTo(x+30,10+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+30,10+y)
        g.lineTo(x+20,30+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(x+30,10+y)
        g.lineTo(x+20,30+y)
        g.lineTo(x+60,40+y);
        g.lineTo(x+70,20+y)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath()
        if (randomGetal < 0.5){
        g.fillStyle = "yellow";
        }else if (randomGetal > 0.5){
            g.fillStyle = "black";
        }

        g.moveTo(x+40,41+y)
        g.lineTo(x+40,50+y)
        g.lineTo(x+30,47+y)
        g.lineTo(x+30,38+y)
        g.closePath()
        g.stroke();
        g.fill()

        console.log(canvas)
        
    }

    groeiBoem(g, x, y){



        g.fillStyle = "green";
        g.beginPath()
        g.moveTo(x+40,10+y)
        g.lineTo(x+20,80+y)
        g.lineTo(x+60,80+y)
        g.closePath()
        g.stroke()
        g.fill()



        g.fillStyle = "yellow";
        g.beginPath();
        g.arc(90,60,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()

 
        g.beginPath()
        g.moveTo(x+30,80+y)
        g.lineTo(x+30,100+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+50,100+y)
        g.lineTo(x+30,100+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+50,100+y)
        g.lineTo(x+50,80+y)
        g.closePath()
        g.stroke();

    }

}

let app = new App();
app.newApplication();
