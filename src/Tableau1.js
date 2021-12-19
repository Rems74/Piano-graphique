

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
        this.load.audio('Piano27','f4.mp3' )
        this.load.audio('Piano28','f5.mp3' )
        this.load.audio('Piano29','f-3.mp3' )
        this.load.audio('Piano30','f-4.mp3' )
        this.load.audio('Piano31','f-5.mp3' )
        this.load.audio('Piano32','g3.mp3' )
        this.load.audio('Piano33','g4.mp3' )
        this.load.audio('Piano34','g5.mp3' )
        this.load.audio('Piano35','g-3.mp3' )
        this.load.audio('Piano36','g-4.mp3' )
        this.load.audio('Piano37','g-5.mp3' )


        for (let x=1;x<=7;x++){
            this.load.audio('salam'+x,'salamisound'+x+'.mp3')
        }

        for (let m=1;m<=5;m++){
            this.load.audio('mbira'+m,'mbira'+m+'.mp3')
        }
    }



    create() {

        let base = this.add.image(0,0,'base').setOrigin(0,0)
        base.scale=0.5


        this.initKeyboard()


    }

    //Touches et effets

    initKeyboard() {

        let me = this;

        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {

                //DO
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.sound.play('Piano10')
                    me.add.image(0,0,'pose-1').setOrigin(0,0).scale=0.5
                    break;
                //RE
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.sound.play('Piano17')
                    me.add.image(0,0,'pose-2').setOrigin(0,0).scale=0.5
                    break;
                //MI
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.sound.play('Piano23')
                    me.add.image(0,0,'pose-3').setOrigin(0,0).scale=0.5
                    break;
                //FA
                case Phaser.Input.Keyboard.KeyCodes.R:
                    me.sound.play('Piano29')
                    me.add.image(0,0,'pose-4').setOrigin(0,0).scale=0.5
                    break;
                //SOL
                case Phaser.Input.Keyboard.KeyCodes.T:
                    me.sound.play('Piano32')
                    me.add.image(0,0,'pose-5').setOrigin(0,0).scale=0.5
                    break;
                //LA
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    me.sound.play('Piano2')
                    me.add.image(0,0,'pose-6').setOrigin(0,0).scale=0.5
                    break;
                //SI
                case Phaser.Input.Keyboard.KeyCodes.U:
                    me.sound.play('Piano7')
                    me.add.image(0,0,'pose-7').setOrigin(0,0).scale=0.5
                    break;
                //DO
                case Phaser.Input.Keyboard.KeyCodes.I:
                    me.sound.play('Piano11')
                    me.add.image(0,0,'pose-8').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.O:
                    me.sound.play('Piano18')
                    me.add.image(0,0,'pose-9').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.sound.play('Piano24')
                    me.add.image(0,0,'pose-10').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.sound.play('Piano27')
                    me.add.image(0,0,'pose-11').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.sound.play('Piano33')
                    me.add.image(0,0,'pose-12').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.sound.play('Piano3')
                    me.add.image(0,0,'pose-13').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.F:
                    me.sound.play('Piano9')
                    me.add.image(0,0,'pose-14').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.G:
                    me.sound.play('salam1')
                    me.add.image(0,0,'pose-15').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.H:
                    me.sound.play('salam2')
                    me.add.image(0,0,'pose-16').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.sound.play('salam3')
                    me.add.image(0,0,'pose-17').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.K:
                    me.sound.play('salam4')
                    me.add.image(0,0,'pose-18').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.L:
                    me.sound.play('salam5')
                    me.add.image(0,0,'pose-19').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.sound.play('salam6')
                    me.add.image(0,0,'pose-20').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.W:
                    me.sound.play('salam7')
                    me.add.image(0,0,'pose-21').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.sound.play('mbira1')
                    me.add.image(0,0,'pose-22').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.C:
                    me.sound.play('mbira2')
                    me.add.image(0,0,'pose-23').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.V:
                    me.sound.play('mbira3')
                    me.add.image(0,0,'pose-24').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.B:
                    me.sound.play('mbira4')
                    me.add.image(0,0,'pose-25').setOrigin(0,0).scale=0.5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.sound.play('mbira5')
                    me.add.image(0,0,'pose-26').setOrigin(0,0).scale=0.5
                    break;
            }
        });
    }
}
