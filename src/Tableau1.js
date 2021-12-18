

class Tableau1 extends Phaser.Scene {

    preload() {
        //charger les images

        this.load.image('base','assets-poses/base.jpg')

        for (let c=1;c<=26;c++){
            this.load.image('pose-'+c,'assets-poses/pose'+c+'.jpg')
        }

        //charger les sons

        this.load.setPath('assets-sons');

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
        this.load.audio('mbira1','mbira1.mp3' )
        this.load.audio('mbira2','mbira2.mp3' )
        this.load.audio('mbira3','mbira3.mp3' )
        this.load.audio('mbira4','mbira4.mp3' )
        this.load.audio('mbira5','mbira5.mp3' )
    }



    create() {

        let base = this.add.image(0,0,'base').setOrigin(0,0)
        base.scale=0.5


        this.initKeyboard()


    }
    initKeyboard() {

        let me = this;

        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {

                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.sound.play('Piano1')
                    me.add.image(0,0,'pose-1').setOrigin(0,0).scale=0.5
                    break;
            }
        });
    }
}
