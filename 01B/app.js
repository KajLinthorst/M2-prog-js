class App
{
    runApplication()
    {
        
        let appNaam = "Kaj's coole app"
        let appVersie = "1.0"
        let appVersieDate = "20 November 2023"
        let appAuther = "Kaj Linthorst"
        let appCopyright = "Kaj Copyright"
        let appDistribiteur = "Mezelf"
        let appDarkmode = false

        console.log("App naam:" + appNaam)
        console.log("App versie:" + appVersie)
        console.log("App versie date: " + appVersieDate)
        console.log("App autheur: "+ appAuther)
        console.log ("App copyright: " + appCopyright)
        console.log("App distrubiteur: " + appDistribiteur)
        console.log("darkmode: " + appDarkmode)
        this.greeting = "Opgestart!"
    }
}

let app = new App();

app.runApplication();
console.log(app.greeting);
