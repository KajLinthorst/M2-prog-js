class App
{
  
    newApplication(){
    
      let data = document.getElementsByClassName("headers");

      for (let i = 0; i < data.length; i++) {
        data[i].innerText = [i] + ": "+ data[i].innerText;
      }
      
      
    
 
      
     
    }
}

let app = new App();
app.newApplication();
