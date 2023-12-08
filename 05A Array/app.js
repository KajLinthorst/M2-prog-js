class App
{

    newApplication(){
        
        let mijnFavArtiesten = ["Freddie Mercury", "George Michael", "Robby Krieger"]
        console.log(mijnFavArtiesten);
    
        for (let i = 0; i < mijnFavArtiesten.length; i++) {
            console.log(i + ": " + mijnFavArtiesten[0 + i]);
          }
        }
}

let app = new App();
app.newApplication();
