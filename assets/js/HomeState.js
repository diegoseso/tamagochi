
var HomeState = {
    init: function(message) {
        this.message = message;
    },
    create: function() {
        var background = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'background');
        background.anchor.setTo(0.5);
        this.stage.backgroundColor = "#000000";


        var style = {font: '35px Arial', fill: '#FFFFFF'};
        this.game.add.text(this.game.world.centerX -150, 50, 'TOUCH TO START', style);

        if(this.message) {
            this.game.add.text(60, this.game.world.centerY - 200, this.message, style);
        }

        background.events.onInputDown.add(function(){
            this.state.start('GameState');
        }, this);

        game.input.onTap.add(function(){
            this.state.start('GameState');
        }, this);
    }
}