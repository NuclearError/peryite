var Azura = Azura || {};

// Azura.dim = Azura.getGameLandscapeDimensions(768, 384);

Azura.game = new Phaser.Game(640, 320, Phaser.AUTO, 'phaser-container');  

Azura.game.state.add('Boot', Azura.Boot); 
Azura.game.state.add('Preload', Azura.Preload);
Azura.game.state.add('Home', Azura.Home); 
Azura.game.state.add('Game', Azura.Game);

Azura.game.state.start('Boot');   