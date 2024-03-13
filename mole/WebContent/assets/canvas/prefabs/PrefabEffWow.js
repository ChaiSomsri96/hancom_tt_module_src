
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * PrefabEffWow
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function PrefabEffWow(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'Eff_wow', aFrame == undefined || aFrame == null? 8 : aFrame);
	this.anchor.setTo(0.5, 0.5);
	this._PLAY = this.animations.add('PLAY', [0, 1, 2, 3, 4, 5, 6, 7, 8], 20, false);
	
	this._PLAY.onComplete.add(this.fadeOut, this);
	
	this.visible = false;
	
	
}

/** @type Phaser.Sprite */
var PrefabEffWow_proto = Object.create(Phaser.Sprite.prototype);
PrefabEffWow.prototype = PrefabEffWow_proto;
PrefabEffWow.prototype.constructor = PrefabEffWow;

/* --- end generated code --- */
// -- user code here --

PrefabEffWow.prototype.play = function(index) {
	this.index = index;
	this.visible = true;
	this._PLAY.play();
};

PrefabEffWow.prototype.fadeOut = function() {
	this.visible = false;
	this._PLAY.stop();

	var charType = hole[this.index];
	if (charType > 0) {
		gCharLayer[charType-1].children[this.index].hitDown();
	}
};