class Admin{
    constructor(){
        this.generatePassword=createButton("GENERATE SECRET PASSWORD")
        this.message=createElement("h3")
        this.secretWord=createElement("h3")
        this.nameInput=createInput("").attribute("placeholder","name")
        this.greeting=createElement("h2")
        this.greeting2=createElement("h3")
        this.playButton=createButton("play")

    }


    setElementPosition(){

        this.generatePassword.position(width/2,height/2-50)
        this.message.position(width/2-100,height/2-100)
        this.secretWord.position(width/2-50,height/2-75)
        
    }

    generatePasscode(){
        var letters="qwertyuiopasdfghjklzxcvbnm1234567890"
        var passcode = ""
        for (let i = 0; i < 5; i++) {
        var char= Math.floor(Math.random()*letters.length+1)

        var capsRand = Math.floor(Math.random()*2);
        console.log(capsRand);
        var alpha = letters.charAt(char);

        if(capsRand%2 ===0){
            alpha = alpha.toUpperCase();
        }
        passcode += alpha;
        }
        return passcode;
    }
    
    updateDB(passcode){
        var DBref=database.ref("/")
        DBref.update({
        passCode:passcode
        })
        // this.status=1
        // this.pswd.hide()
    }

    display(){
        this.setElementPosition()

        this.generatePassword.mousePressed(async ()=>{
            this.generatePassword.hide()
            secret_code=this.generatePasscode();
            this.updateDB(secret_code);
            this.message.html("SHARE SECRET PASSCODE WITH OTHER PLAYERS")
                //this.secretWord.html('secret passcode = ${secret_code}');
            this.secretWord.html(`Secret Word = ${secret_code}`);
                //this.secretWord.html(`Secret Word = ${secret_code}`);
            this.nameInput.position(Width/2,height/2+10)
            this.playButton.position(Width/2,height/2+10)
        })
        this.playButton.mousePressed(()=>{
            this.message.hide()
            this.nameInput.hide()
            this.playButton.hide()
            player.name=this.nameInput.value();
            playerCount++
            player.index=playerCount;
            player.update();
            player.updateCount();
            this.greeting.html("hello " + player.name)
            this.greeting.position(width/2-50,height/2)
            this.greeting2.html("WAITING FOR OTHER PLAYERS...... ")
            this.greeting2.position(width/2-50,height/2+50)
            this.secretWord.position(width/2.5,height/2.5)
        })

    }


}
