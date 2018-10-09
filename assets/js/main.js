var game = new Phaser.Game(1024, 1280, Phaser.AUTO)
game.state.add('PreloadState', PreloadState);
game.state.add('HomeState', HomeState);
game.state.add('GameState', GameState);
game.state.start('PreloadState');