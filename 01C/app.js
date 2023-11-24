class App
{
    runApplication()
    {
        let boolean = true;
        let string = "ik hou van appels";
        let number = 5;
       
        let appNaam = "Kaj's coole app";
        let appVersie = "1.0";
        let appVersieDate = "20 November 2023";
        let appAuther = "Kaj Linthorst";
        let appCopyright = "Kaj Copyright";
        let appDistribiteur = "Mezelf";
        let appDarkmode = false;
   
   
        console.log("boolean: " + boolean);
        console.log("string: " + string);
        console.log("Number: " + number)
        console.log("App naam:" + appNaam);
        console.log("App versie:" + appVersie);
        console.log("App versie date: " + appVersieDate);
        console.log("App autheur: "+ appAuther);
        console.log ("App copyright: " + appCopyright);
        console.log("App distrubiteur: " + appDistribiteur);
        console.log("darkmode: " + appDarkmode);
        this.greeting = "Opgestart!";
       
        this.boolean = false;
        this.number = 3;
        this.string = "Ik hou van meloen"


    }

    

}

let app = new App();

app.runApplication();
console.log(app.greeting);
console.log(app.boolean);
console.log(app.string);
console.log(app.number);