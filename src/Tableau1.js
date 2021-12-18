

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

                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.sound.play('Piano2')
                    me.add.image(0,0,'pose-2').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.sound.play('Piano3')
                    me.add.image(0,0,'pose-3').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.R:
                    me.sound.play('Piano4')
                    me.add.image(0,0,'pose-4').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.T:
                    me.sound.play('Piano5')
                    me.add.image(0,0,'pose-5').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.Y:
                    me.sound.play('Piano6')
                    me.add.image(0,0,'pose-6').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.U:
                    me.sound.play('Piano7')
                    me.add.image(0,0,'pose-7').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.I:
                    me.sound.play('Piano8')
                    me.add.image(0,0,'pose-8').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.O:
                    me.sound.play('Piano9')
                    me.add.image(0,0,'pose-9').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.sound.play('Piano10')
                    me.add.image(0,0,'pose-10').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.sound.play('Piano11')
                    me.add.image(0,0,'pose-11').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.sound.play('Piano12')
                    me.add.image(0,0,'pose-12').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.sound.play('Piano13')
                    me.add.image(0,0,'pose-13').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.F:
                    me.sound.play('Piano14')
                    me.add.image(0,0,'pose-14').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.G:
                    me.sound.play('Piano15')
                    me.add.image(0,0,'pose-15').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.H:
                    me.sound.play('Piano16')
                    me.add.image(0,0,'pose-16').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.sound.play('Piano17')
                    me.add.image(0,0,'pose-17').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.K:
                    me.sound.play('Piano18')
                    me.add.image(0,0,'pose-18').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.L:
                    me.sound.play('Piano19')
                    me.add.image(0,0,'pose-19').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.sound.play('Piano20')
                    me.add.image(0,0,'pose-20').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.W:
                    me.sound.play('Piano21')
                    me.add.image(0,0,'pose-21').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.sound.play('Piano21')
                    me.add.image(0,0,'pose-21').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.C:
                    me.sound.play('Piano22')
                    me.add.image(0,0,'pose-22').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.V:
                    me.sound.play('Piano23')
                    me.add.image(0,0,'pose-23').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.B:
                    me.sound.play('Piano24')
                    me.add.image(0,0,'pose-24').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.sound.play('Piano25')
                    me.add.image(0,0,'pose-25').setOrigin(0,0).scale=0.5
                    break;
            }
        });
    }
}
