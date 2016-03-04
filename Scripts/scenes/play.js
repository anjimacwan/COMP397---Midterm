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
            this._playLabel = new objects.Label("PLAY SCENE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._playLabel);
            // add the Roll button to the PLAY scene
            this._rollButton = new objects.Button("Roll", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            // Start Roll event listener
            this._rollButton.on("click", this._rollButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        Play.prototype._rollDice = function () {
            var betLine = [" ", " "];
            var outCome = [0, 0];
            for (var spin = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 6) + 1);
                switch (outCome[spin]) {
                    case outCome[spin, spin]:
                        betLine[spin] = "1";
                        break;
                    case outCome[spin, spin]:
                        betLine[spin] = "2";
                        break;
                    case outCome[spin, spin]:
                        betLine[spin] = "3";
                        break;
                    case outCome[spin, spin]:
                        betLine[spin] = "4";
                        break;
                    case outCome[spin, spin]:
                        betLine[spin] = "5";
                        break;
                    case outCome[spin, spin]:
                        betLine[spin] = "6";
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
            }
            /*this._reels[reel].x = 216 + (reel * 84);
            this._reels[reel].y = 220;
             this.addChild(this._reels[reel]);
            console.log("reel" + reel + " " + this._reels[reel]);
            
            */
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map