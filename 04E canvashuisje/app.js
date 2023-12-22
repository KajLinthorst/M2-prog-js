class App
{
    runApplication(){
        
        this.canvas = document.getElementById("canvasId");
        let g = this.canvas.getContext("2d");
        this.randomGetal = Math.random();
        let w = Math.floor(Math.random() * 170);
        let q = Math.floor(Math.random() * 200);
        let e = Math.floor(Math.random() * 140);
        let r = Math.floor(Math.random() * 160);




        this.tekenHuis(g, 100, 100)
        this.tekenHuis(g, 150, 150)
        this.tekenHuis(g,200, 200)
        this.groeiKerstBoom(g,50 ,50)
        this.groeiKerstBoom(g,w+150 ,250+e)
        this.groeiKerstBoom(g,q+350 ,350+q)
        this.groeiKerstBoom(g,e+450 ,250+r)
        this.groeiKerstBoom(g,r+650 ,350+w)         
     

        console.log(this.canvas)
        
    }
    tekenHuis(g, x, y)
    {
        g.beginPath()
        g.moveTo(x+20,y+30)
        g.lineTo(x+20,y+50)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+20,y+30)
        g.lineTo(x+60,y+40)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+20,y+50)
        g.lineTo(x+60,y+60)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+60,y+40)
        g.lineTo(x+60,y+60)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+60,y+40)
        g.lineTo(x+80,y+30)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+80,y+30)
        g.lineTo(x+80,y+50)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+60,y+60)
        g.lineTo(x+80,y+50)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+80,y+30)
        g.lineTo(x+70,y+20)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+70,y+20)
        g.lineTo(x+60,y+40)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+70,y+20)
        g.lineTo(x+30,y+10)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+30,y+10)
        g.lineTo(x+20,y+30)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x+30,y+10)
        g.lineTo(x+20,y+30)
        g.lineTo(x+60,y+40);
        g.lineTo(x+70,y+20)
        g.closePath()
        g.stroke();
        g.fill()

        //raam
        g.beginPath()
        if (this.randomGetal < 0.5){
        g.fillStyle = "yellow";
        }else if (this.randomGetal > 0.5){
            g.fillStyle = "black";
        }

        g.moveTo(x+40,y+41)
        g.lineTo(x+40,y+50)
        g.lineTo(x+30,y+47)
        g.lineTo(x+30,y+38)
        g.closePath()
        g.stroke();
        g.fill()

        
    
    }
    groeiKerstBoom(g, x, y){
        
       

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
        
        g.fillStyle = "red";
        g.beginPath();
        g.arc(100,100,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()
        
        g.fillStyle = "blue";
        g.beginPath();
        g.arc(80,90,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()

        g.fillStyle = "yellow";
        g.beginPath();
        g.arc(80,120,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()

        g.fillStyle = "blue";
        g.beginPath();
        g.arc(100,115,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()

        g.fillStyle = "red";
        g.beginPath();
        g.arc(90,95,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()

        g.fillStyle = "yellow";
        g.beginPath();
        g.arc(95,125,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()

        g.fillStyle = "red";
        g.beginPath();
        g.arc(85,105,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()
        
        g.fillStyle = "orange";
        g.beginPath();
        g.arc(85,105,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()

        g.fillStyle = "purple";
        g.beginPath();
        g.arc(90,115,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()
        
        g.fillStyle = "orange";
        g.beginPath();
        g.arc(100,115,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()
        
        g.fillStyle = "purple";
        g.beginPath();
        g.arc(100,90,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()

        g.fillStyle = "blue";
        g.beginPath();
        g.arc(90,95,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()

        g.fillStyle = "yellow";
        g.beginPath();
        g.arc(87,80,3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()

        ///stam 
        g.fillStyle = "brown";
        g.beginPath()
        g.moveTo(x+30,80+y)
        g.lineTo(x+30,100+y)
        g.lineTo(x+50,100+y)
        g.lineTo(x+50,80+y)
        g.closePath()
        g.stroke();
        g.fill();

    }
}

let app = new App();
app.runApplication();