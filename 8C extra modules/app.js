import { BoomRenderer } from "./BoomRenderer.mjs";
import { HuisRenderer } from "./HuisRenderer.mjs";

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

}


let huisrenderer = new tekenHuis();
let boomrenderer = new groeiKerstBoom();
let app = new App();
app.runApplication();