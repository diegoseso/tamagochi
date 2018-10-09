var PreloadState = {
    init: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxHeight = 1024;
        this.scale.maxWidth = 1280;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function(){
        //this.load.audio('intro_loop', ['assets/audio/intro_loop_arab.ogg','assets/audio/intro_loop_arab.mp3']);
        this.load.image('play_again', '../images/background.png');
    },
    create: function(){
        this.state.start('HomeState');
    }
};