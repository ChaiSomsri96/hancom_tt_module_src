
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * TextBox
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function TextBox(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'TalkBox_sheet', aFrame == undefined || aFrame == null? 5 : aFrame);
	this.animations.add('SHOW', [0, 1, 2, 2, 3, 5, 4, 5], 18, false);
	
	this.visible = false;
}

/** @type Phaser.Sprite */
var TextBox_proto = Object.create(Phaser.Sprite.prototype);
TextBox.prototype = TextBox_proto;
TextBox.prototype.constructor = TextBox;

/* --- end generated code --- */
// -- user code here --



TextBox.prototype.show = function() {

	this.visible = true;
	this.play();
};

TextBox.prototype.hide = function() {
	this.visible = false;
};