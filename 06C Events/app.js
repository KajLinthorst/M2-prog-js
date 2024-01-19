class App {

    
    runApplication() {
        
        let uiButton3 = document.getElementById("show-image-button")
        let uiButton = document.getElementById("uiButton")
        let uiButton2 = document.getElementById("uiButton2")
        
        
        uiButton.addEventListener("click",(e)=>
        {
            const para = document.createElement("p1");
            const node = document.createTextNode("This is new");
            para.appendChild(node);
            document.body.appendChild(para);
        });

        uiButton2.addEventListener("click",(e)=>
        {

            const para = document.createElement("h1", "p");
            const node = document.createTextNode("Obladi Oblada");
            const node2 = document.createTextNode("Life goes on brah");


            para.appendChild(node, node2);
            document.body.appendChild(para);
        });
        
        uiButton3.addEventListener("click",(e)=>
        {
            const showImageButton = document.getElementById("show-image-button");
            const myImage = document.getElementById("myImg");
            showImageButton.addEventListener("click",(e)=>
            {
                const myImage = document.getElementById("myImg");
                const para = document.createElement("h1", "p");
                const node = document.createTextNode("Obladi Oblada");
                const node2 = document.createTextNode("Life goes on brah");

                para.appendChild(node, node2);
                document.body.appendChild(para);
                myImage.hidden = !myImage.hidden;
            })


        });

    }

}

let app = new App();
app.runApplication();
