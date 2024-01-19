class User
{
    constructor(naam){
        this.naam = naam
    }
    wieBenIk(){
        console.log(this.naam)
    }
}


class App
{
    
    runApplincation()
    {
        let patches = new User("patches the hyane")
        let user1 = new User("Kers de Kerstboom") ;      
        let user2 = new User("Slaky de Slang");
        let user3 = new User("Appeltje de appel");    
        let user4 = new User("Freddie Mercury");
        let user5 = new User("Gerda de Grasspriet");
        let user6 = new User("Slart de Slak");
        
        
        patches.wieBenIk();//dit is commentaar
        user6.wieBenIk();
        user5.wieBenIk();
        user2.wieBenIk();
        user3.wieBenIk();
        user1.wieBenIk();
        user6.wieBenIk();
        user4.wieBenIk();
        user2.wieBenIk();
        user3.wieBenIk();
        user2.wieBenIk();

       
    }
}
let app = new App();
app.runApplincation();