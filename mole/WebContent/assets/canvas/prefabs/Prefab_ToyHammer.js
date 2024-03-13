
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * Prefab_ToyHammer
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function Prefab_ToyHammer(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'ToyHammer', aFrame == undefined || aFrame == null? null : aFrame);
	this.anchor.setTo(0.79, 0.54);
	
	this.aGameObj = aGame;
	
	this.visible = false;
}

/** @type Phaser.Sprite */
var Prefab_ToyHammer_proto = Object.create(Phaser.Sprite.prototype);
Prefab_ToyHammer.prototype = Prefab_ToyHammer_proto;
Prefab_ToyHammer.prototype.constructor = Prefab_ToyHammer;

/* --- end generated code --- */
// -- user code here --


Prefab_ToyHammer.prototype.init = function(index) {
	this.index = index;
	this.visible = false;
	
	this.angle = 40.0;
	this.anchor.setTo(0.82, 0.53);
};

Prefab_ToyHammer.prototype.setPosition = function(x, y) {
	this.position.x = x;
	this.position.y = y;	
};

Prefab_ToyHammer.prototype.play = function() {
	var that = this;
	
	this.visible = true;
	this.aGameObj.add.tween(this).to( {angle: 115}, 150, Phaser.Easing.Exponential.In)
	.to({angle: 0}, 80, Phaser.Easing.Exponential.In)
	.delay(400, 1)
	.start()
	.onComplete.add( function() {
		switch(hole[that.index]) {
		case 1:
			gCharLayer.children[that.index].hit();
			break;
		case 2:
			gCharLayer2.children[that.index].hit();
			break;
		case 3:
			gCharLayer3.children[that.index].hit();
			break;			
		}
		gEffectLayer1.children[that.index].play(that.index);

		gScoreText.setText(gScore, true);

	});
};

Prefab_ToyHammer.prototype.fadeOut = function() {
	this.visible = false;
};



