var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //Add Play Label
            /* this._playLabel = new objects.Label(
                 "PLAY SCENE","60px Consolas",
                 "#000000",
                 config.Screen.CENTER_X,config.Screen.CENTER_Y);
             this.addChild(this._playLabel);
             */
            /*this._playLabel1 = new objects.Label(
                "1","30px Consolas",
                "#000000",
                230 ,320);
            this.addChild(this._playLabel1);
            
            
            this._playLabel2 = new objects.Label(
                "1","30px Consolas",
                "#000000",
                430 ,320);
            this.addChild(this._playLabel2);
            */
            // add the Roll button to the PLAY scene
            this._rollButton = new objects.Button("Roll", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            // Start Roll event listener
            this._rollButton.on("click", this._rollButtonClick, this);
            // Initialize Array of Bitmaps 
            this._imagesDisplay = new Array();
            for (var roll = 0; roll < 2; roll++) {
                this._imagesDisplay[roll] = new createjs.Bitmap(assets.getResult("1"));
                this._imagesDisplay[roll].x = 180 + (roll * 200);
                this._imagesDisplay[roll].y = 200;
                this.addChild(this._imagesDisplay[roll]);
                console.log("Dice" + roll + " " + this._imagesDisplay[roll]);
            }
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        Play.prototype._initializeArray = function () {
            // Initialize Array of Bitmaps 
            this._imagesDisplay = new Array();
            for (var roll = 0; roll < 2; roll++) {
                this._imagesDisplay[roll] = new createjs.Bitmap(assets.getResult("1"));
                this._imagesDisplay[roll].x = 75 + (roll * 290);
                this._imagesDisplay[roll].y = 60;
                this.addChild(this._imagesDisplay[roll]);
                console.log("Dice" + roll + " " + this._imagesDisplay[roll]);
            }
        };
        //generate random numbers for dice
        Play.prototype._rollDice = function () {
            var betLine = [" ", " "];
            var outCome = [0, 0];
            for (var spin = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 6) + 1);
                switch (outCome[spin]) {
                    case 1:
                        betLine[spin] = "1";
                        this._playLabel1 = new objects.Label("1", "30px Consolas", "#000000", 230, 320);
                        this.addChild(this._playLabel1);
                        this._playLabel2 = new objects.Label("1", "30px Consolas", "#000000", 430, 320);
                        this.addChild(this._playLabel2);
                        break;
                    case 2:
                        betLine[spin] = "2";
                        this._playLabel1 = new objects.Label("2", "30px Consolas", "#000000", 230, 320);
                        this.addChild(this._playLabel1);
                        this._playLabel2 = new objects.Label("2", "30px Consolas", "#000000", 430, 320);
                        this.addChild(this._playLabel2);
                        break;
                    case 3:
                        betLine[spin] = "3";
                        this._playLabel1 = new objects.Label("3", "30px Consolas", "#000000", 230, 320);
                        this.addChild(this._playLabel1);
                        this._playLabel2 = new objects.Label("3", "30px Consolas", "#000000", 430, 320);
                        this.addChild(this._playLabel2);
                        break;
                    case 4:
                        betLine[spin] = "4";
                        this._playLabel1 = new objects.Label("4", "30px Consolas", "#000000", 230, 320);
                        this.addChild(this._playLabel1);
                        this._playLabel2 = new objects.Label("4", "30px Consolas", "#000000", 430, 320);
                        this.addChild(this._playLabel2);
                        break;
                    case 5:
                        betLine[spin] = "5";
                        this._playLabel1 = new objects.Label("5", "30px Consolas", "#000000", 230, 320);
                        this.addChild(this._playLabel1);
                        this._playLabel2 = new objects.Label("5", "30px Consolas", "#000000", 430, 320);
                        this.addChild(this._playLabel2);
                        break;
                    case 6:
                        betLine[spin] = "6";
                        this._playLabel1 = new objects.Label("6", "30px Consolas", "#000000", 230, 320);
                        this.addChild(this._playLabel1);
                        this._playLabel2 = new objects.Label("6", "30px Consolas", "#000000", 430, 320);
                        this.addChild(this._playLabel2);
                        break;
                }
            }
            return betLine;
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._rollButtonClick = function (event) {
            //Add images on Roll click
            var bitmap = this._rollDice();
            for (var roll = 0; roll < 2; roll++) {
                this._imagesDisplay[roll].image = assets.getResult(bitmap[roll]);
                this.addChild(this._imagesDisplay[roll]);
            }
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map