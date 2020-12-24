class Form {

  constructor() {
    this.input = createInput("Name");
    this.pinput = createInput("passcode");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.pswd=createButton('Generate Passcode')
    this.status=0
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  updateDB(passcode){
    var DBref=database.ref("/")
    DBref.update({
    passCode:passcode
    })
    this.status=1
    this.pswd.hide()
  }
  
  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    if (this.status===0) {
      this.pswd.position(displayWidth/2,displayHeight/2)
      this.pswd.mousePressed(()=>{
     var letters="qwertyuiopasdfghjklzxcvbnm1234567890"
     var passcode = ""
     for (let i = 0; i < 5; i++) {
       var char= Math.floor(Math.random()*letters.length+1)
       passcode += letters.charAt(char)

       
     }
     this.updateDB(passcode)
      })
    }
    else{
  
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
}
