export class BoomRenderer{
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