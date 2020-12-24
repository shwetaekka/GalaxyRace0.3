class Welcome{

    constructor(){
        
        this.adminButton = createButton('Admin');
        this.playerButton = createButton('Player')
        
    }

    hideElements(){
        this.adminButton.hide();
        this.playerButton.hide();
    }

    display(){
        this.adminButton.html('Admin');
        this.playerButton.html('Player');
        
        this.adminButton.position(width/2-100, height/2-100);
        this.playerButton.position(width/2 - 100, height/2);

        this.adminButton.mousePressed(()=>{
                this.hideElements();
                admin.display();
        });

    }
}