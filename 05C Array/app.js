class App
{
  
    newApplication(){
    
      let headers = document.getElementsByClassName("headers");

      for (let i = 0; i < headers.length; i++) {
        headers[i].innerText = "huh?";
      }
      
      
    
      let headersByCSSClass = document.getElementsByClassName("bandName");

      for (let i = 0; i < headersByCSSClass.length; i++) {
        headersByCSSClass[0].innerText = "nieuws ";
        headersByCSSClass[1].innerText = "reviews";
        headersByCSSClass[2].innerText = "commentaar ";
      }
      
      let mijnH1 = document.getElementsByClassName("supertxt");
      mijnH1.innerText = "coole text"
      console.log(mijnH1.innerText);
    }
}

let app = new App();
app.newApplication();
