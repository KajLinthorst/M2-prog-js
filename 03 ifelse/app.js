class App
{
    runApplication()
    {
        console.log("hello world")
        let newsitem1 = document.getElementsByClassName("gamenews")[0]
        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        let title = document.getElementById("newstitle");

        console.log(title)
        console.log(newsitem1)
        console.log(newsitem2)
        let random = Math.random();
        console.log(random);
        if (random < 0.2) 
        {
            title.style.backgroundColor = "red";  
            newsitem1.style.backgroundColor = "green";
            newsitem2.style.backgroundColor = "green";   
        }
        else if (random < 0.6) 
        {
            title.style.backgroundColor = "blue"; 
            newsitem1.style.backgroundColor = "yellow";
            newsitem2.style.backgroundColor = "red";   
        }
        else if (random > 0.75) 
        {
            title.style.backgroundColor = "green";   
            newsitem1.style.backgroundColor = "red"; 
            newsitem2.style.backgroundColor = "yellow"; 
        }


        
        



    }
}

let app = new App();
app.runApplication();