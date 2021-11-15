var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    scene: {
        preload: preload,
        create: create
    }
};

//Chargement des sons


//Chargement des images


//Initialisation des touches
if (this.sound.locked)
{
    text.setText('Click to start');

    this.sound.once('unlocked', function ()
    {
        text.setText(keys);
    });
}

this.input.keyboard.on('keydown-SPACE', function () {
    this.sound.stopAll();
}, this);

this.input.keyboard.on('keydown-A', function () {
    bass.play();
});

this.input.keyboard.on('keydown-B', function () {
    drums.play();
});

this.input.keyboard.on('keydown-C', function () {
    percussion.play();
});

this.input.keyboard.on('keydown-D', function () {
    synth1.play();
});

this.input.keyboard.on('keydown-E', function () {
    synth2.play();
});

this.input.keyboard.on('keydown-F', function () {
    top1.play();
});

this.input.keyboard.on('keydown-G', function () {
    top2.play();
});
