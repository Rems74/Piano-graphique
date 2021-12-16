
class Tableau1 extends Phaser.Scene {


    preload() {
        //charger les images

        this.load.image()

        //charger les sons

        this.load.setPath('Piano-graphique/assets_sons');

        this.load.audio('Piano1','a3.mp3' )
        this.load.audio('Piano2','a4.mp3' )
        this.load.audio('Piano3','a5.mp3' )
        this.load.audio('Piano4','a-3.mp3' )
        this.load.audio('Piano5','a-4.mp3' )
        this.load.audio('Piano6','a-5.mp3' )
        this.load.audio('Piano7','b3.mp3' )
        this.load.audio('Piano8','b4.mp3' )
        this.load.audio('Piano9','b5.mp3' )
        this.load.audio('Piano10','c3.mp3' )
        this.load.audio('Piano11','c4.mp3' )
        this.load.audio('Piano12','c5.mp3' )
        this.load.audio('Piano13','c6.mp3' )
        this.load.audio('Piano14','c-3.mp3' )
        this.load.audio('Piano15','c-4.mp3' )
        this.load.audio('Piano16','c-5.mp3' )
        this.load.audio('Piano17','d3.mp3' )
        this.load.audio('Piano18','d4.mp3' )
        this.load.audio('Piano19','d5.mp3' )
        this.load.audio('Piano20','d-3.mp3' )
        this.load.audio('Piano21','d-4.mp3' )
        this.load.audio('Piano22','d-5.mp3' )
        this.load.audio('Piano23','e3.mp3' )
        this.load.audio('Piano24','e4.mp3' )
        this.load.audio('Piano25','e5.mp3' )
        this.load.audio('Piano26','f3.mp3' )
        this.load.audio('Piano27','f5.mp3' )
        this.load.audio('Piano28','f-3.mp3' )
        this.load.audio('Piano29','f-4.mp3' )
        this.load.audio('Piano30','f-5.mp3' )
        this.load.audio('Piano31','g3.mp3' )
        this.load.audio('Piano32','g4.mp3' )
        this.load.audio('Piano33','g5.mp3' )
        this.load.audio('Piano34','g-3.mp3' )
        this.load.audio('Piano35','g-4.mp3' )
        this.load.audio('Piano36','g-5.mp3' )
        this.load.audio('batterie','batterie.mp3' )
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
