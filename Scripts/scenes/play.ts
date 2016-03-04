// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _rollButton: objects.Button;
      
        private _imagesDisplay:createjs.Bitmap[];
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add Play Label
           /* this._playLabel = new objects.Label(
                "PLAY SCENE","60px Consolas", 
                "#000000", 
                config.Screen.CENTER_X,config.Screen.CENTER_Y);
            this.addChild(this._playLabel);
            */
            
            // add the Roll button to the PLAY scene
            this._rollButton = new objects.Button(
                "Roll",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            
            // Start Roll event listener
            this._rollButton.on("click", this._rollButtonClick, this);
            
            // Initialize Array of Bitmaps 
            this._imagesDisplay = new Array<createjs.Bitmap>();
            for(var roll:number = 0; roll < 2; roll++) {
                this._imagesDisplay[roll] = new createjs.Bitmap(assets.getResult("1"));
                this._imagesDisplay[roll].x = 200 + (roll * 290);
                this._imagesDisplay[roll].y = 200;
                 this.addChild(this._imagesDisplay[roll]);
                console.log("Dice" + roll + " " + this._imagesDisplay[roll]);
            }
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        private _initializeArray()
        {
        // Initialize Array of Bitmaps 
            this._imagesDisplay = new Array<createjs.Bitmap>();
            for(var roll:number = 0; roll < 2; roll++) {
                this._imagesDisplay[roll] = new createjs.Bitmap(assets.getResult("1"));
                this._imagesDisplay[roll].x = 75 + (roll * 290);
                this._imagesDisplay[roll].y = 60;
                 this.addChild(this._imagesDisplay[roll]);
                console.log("Dice" + roll + " " + this._imagesDisplay[roll]);
            }
        }
       
        private _rollDice(): string[] {
            var betLine = [" ", " "];
            var outCome = [0, 0];

            for (var spin = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 6) + 1);
                switch (outCome[spin]) {
                    case 1:  
                        betLine[spin] = "1";
                        break;
                      
                      case 2:  
                        betLine[spin] = "2";
                        break;
                      
                       case 3:  
                        betLine[spin] = "3";
                        break;
                      
                       case 4:  
                        betLine[spin] = "4";
                        break;
                      
                       case 5:  
                        betLine[spin] = "5";
                        break;
                      
                       case 6:  
                        betLine[spin] = "6";
                        break;
                      
                   
                }
            }
            return betLine;
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        private _rollButtonClick(event: createjs.MouseEvent) {
           //Add images on Roll click
           
           
           var bitmap:string[] = this._rollDice();
            
            for(var roll:number = 0; roll < 2; roll++)
            {
               this._imagesDisplay[roll].image = assets.getResult(bitmap[roll]);
               this.addChild(this._imagesDisplay[roll]);
            }
          
            
           
           /* this._dice1 = new createjs.Bitmap(assets.getResult("1"));
            this.addChild(this._dice1); 
            
            this._dice1 = new createjs.Bitmap(assets.getResult("2"));
            this.addChild(this._dice2); 
            
            this._dice1 = new createjs.Bitmap(assets.getResult("3"));
            this.addChild(this._dice3); 
            
            this._dice1 = new createjs.Bitmap(assets.getResult("4"));
            this.addChild(this._dice4); 
            
            this._dice1 = new createjs.Bitmap(assets.getResult("5"));
            this.addChild(this._dice5); 
            
            this._dice1 = new createjs.Bitmap(assets.getResult("6"));
            this.addChild(this._dice6); 
            
            */
            
            
            
            
        }
        
    }
}