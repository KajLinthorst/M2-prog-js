import {Dino} from "./dino.mjs"
import {Plant} from "./plant.mjs"
import { maakDino, maakPlant } from "./fabriek.mjs";

class App
{
    
    runApplication()
    {
    
    }
}
let app = new App();
app.runApplication();
let dino = new Dino("moduliostaurus")
let plant = new Plant("Plantkes")
let maakdino = maakDino()
let maakplant = maakPlant()
console.log(plant)
console.log(dino)
console.log(maakdino)
console.log(maakplant)