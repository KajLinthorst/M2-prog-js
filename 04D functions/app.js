
function heeftEenResultaat(){
    let resultaat =1;
    return resultaat
}


/*
let y1 = ax2bcWiskunde(9, 3, 4, 89);
console.log(y1);

let y2 = ax2bcWiskunde(3, 6, 5, 45);
console.log(y2);

let y3 = ax2bcWiskunde(7, 1, 2, 13);
console.log(y3);


let u = 9;
let h = 19;
let l = 15;

let logY = Math.log(l) + h + Math.pow(u,2);
console.log(logY);


let logY1 = uhlfunctie(21, 5, 30,);
console.log(logY1)

let logY2 = uhlfunctie(25, 6, 22,);
console.log(logY2)

let logY3 = uhlfunctie(13, 11, 4,);
console.log(logY3)

function uhlfunctie(u, h, l,){
    let logY2 = Math.log(l) + h + Math.pow(u,2);
    return logY2;
}


function ax2bcWiskunde(x, a, b, c, ){
    let y = (a*(x*x) )+ (b*x) +c;
    return y;
}


let x = 9;
let a = 3;
let b = 4;
let c = 89;





let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());
*/




class App
{
    runApplication(){
     
        
    }

    newClassFunction(){
        console.log("class func")
    }

    anotherFunctionWithArguments(aArgument)
    {
        console.log("kom maar met je argument");
        console.log("hier:")
        console.log(aArgument)
    }

    itsAMeMario()
    {
        console.log("MARIO!!")

    }

    itsBowser(){
        return "BWAHAHA!!!";
    }

    rekenSum(getal1, getal2){
        console.log("de som is =" + getal1 + getal2)
    }

}

let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionWithArguments("mijn argument is dat appels lekker zijn");
app.itsAMeMario();
console.log(app.itsBowser());
app.rekenSum(4,6)