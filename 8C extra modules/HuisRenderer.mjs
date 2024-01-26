export class HuisRenderer{
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
}