
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// franjaCrema
		this.add.image(960, 505, "FranjaCrema");

		// apagraBtn
		const apagraBtn = this.add.sprite(288, 565, "ApagraBtn");

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(apagraBtn);

		// pushActionScript
		new PushActionScript(onPointerDownScript_1);

		// alertaMsn
		const alertaMsn = this.add.image(990, 495, "alertaMsn");

		this.apagraBtn = apagraBtn;
		this.alertaMsn = alertaMsn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	apagraBtn;
	/** @type {Phaser.GameObjects.Image} */
	alertaMsn;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.alertaMsn.visible=false;

		console.log(this.apagraBtn);
		
		this.apagraBtn.setInteractive();
		this.apagraBtn.on('pointerdown', function (pointer) {
       
			this.alertaMsn.visible=true;
       
   		},this);

	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
