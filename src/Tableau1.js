
class Tableau1 extends Phaser.Scene {


    preload() {
        //charger les images

        this.load.image()

        //charger les sons

        this.load.setPath('assets/audio/tech');

        this.load.audio()
    }


    create() {
        this.initKeyboard()


    }
    initKeyboard(){
        this.input.keyboard.on('keydown-SPACE', function () {
            this.sound.stopAll();
        }, this);

        this.input.keyboard.on('keydown-A', function () {
            bass.play();
        });

        this.input.keyboard.on('keyup-A', function () {
            bass.stopAll();
        });

        this.input.keyboard.on('keydown-B', function () {
            drums.play();
        });

        this.input.keyboard.on('keyup-B', function () {
            drums.stopAll();
        });

        this.input.keyboard.on('keydown-C', function () {
            percussion.play();
        });

        this.input.keyboard.on('keyup-C', function () {
            percussion.stopAll();
        });

        this.input.keyboard.on('keydown-D', function () {
            synth1.play();
        });

        this.input.keyboard.on('keyup-D', function () {
            synth1.stopAll();
        });

        this.input.keyboard.on('keydown-E', function () {
            synth2.play();
        });

        this.input.keyboard.on('keyup-E', function () {
            synth2.stopAll();
        });

        this.input.keyboard.on('keydown-F', function () {
            top1.play();
        });

        this.input.keyboard.on('keyup-F', function () {
            top1.stopAll();
        });

        this.input.keyboard.on('keydown-G', function () {
            top2.play();
        });

        this.input.keyboard.on('keyup-G', function () {
            top2.stopAll();
        });
    }


}
