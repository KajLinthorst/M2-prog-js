class App
{

    newApplication(){
        
        let mijnFavArtiesten = ["Bob Dylan", "Prince"]
        let indexToRemove = mijnFavArtiesten.indexOf("Bob Dylan")
        let indexToRemove2 = mijnFavArtiesten.indexOf("Prince")
        mijnFavArtiesten.push("Elton John");
        mijnFavArtiesten.push("Paul McCartney");
        mijnFavArtiesten.splice(indexToRemove, 1)
        mijnFavArtiesten.splice(indexToRemove, 1)
        mijnFavArtiesten.push("Pete Townshed");
        mijnFavArtiesten.push("Brian May");
        
        console.log(mijnFavArtiesten);


    
        for (let i = 0; i < mijnFavArtiesten.length; i++) {
            console.log(i + ": " + mijnFavArtiesten[0 + i]);
          }
        }
}

let app = new App();
app.newApplication();
