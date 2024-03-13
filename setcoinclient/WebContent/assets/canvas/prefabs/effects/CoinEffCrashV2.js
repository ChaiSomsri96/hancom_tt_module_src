
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * CoinEffCrashV2
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function CoinEffCrashV2(aGame, aX, aY, aKey, aFrame) {
	
	this.beforeCreate();
	
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'EffSmoke', aFrame == undefined || aFrame == null? 0 : aFrame);
	this.anchor.setTo(0.5, 0.55);
	this.animations.add('PLAY', [0, 1, 2, 3, 4, 5, 6], 12, false);
	
	this.afterCreate();
	
}

/** @type Phaser.Sprite */
var CoinEffCrashV2_proto = Object.create(Phaser.Sprite.prototype);
CoinEffCrashV2.prototype = CoinEffCrashV2_proto;
CoinEffCrashV2.prototype.constructor = CoinEffCrashV2;

/* --- end generated code --- */
// -- user code here --
CoinEffCrashV2.prototype.beforeCreate = function() {
	
};

CoinEffCrashV2.prototype.afterCreate = function() {	
	this.tweenA = null;
	this.tweenB = null;	
	this.dealy = 0;
};

CoinEffCrashV2.prototype.setPlay = function(aAnimaitonName, aIsTween, aDelay, aOneLoopDelay) {
	var isTween = false;
	
	if(this === undefined || this.animations === undefined) { console.log("CoinEffCrashV2 SetPlay undefined!!!"); return;}
	if(aIsTween !== undefined && aIsTween !== null) { isTween = aIsTween; }	
	if(this.visible === false) this.visible = true;
	this.alpha = 0;
	
	switch(aAnimaitonName) {
		case  "PLAY" :			
			this.game.time.events.add( (Phaser.Timer.SECOND * aDelay)  +  (Phaser.Timer.SECOND * aOneLoopDelay) , function(){this.visible = true; this.alpha = 1; this.animations.play("PLAY");}, this);
		break;
	}
};


CoinEffCrashV2.prototype.update = function() {
	//기존함수테스트
	this.gameProcess();	
};

CoinEffCrashV2.prototype.gameProcess = function() {	
	this.processCharacter();
	this.animationOnComplete();
};

CoinEffCrashV2.prototype.processCharacter = function() {	
	
};

CoinEffCrashV2.prototype.animationOnComplete = function(){	
	if(this.animations.currentAnim.isFinished === false) return;	

	switch(this.animations.currentAnim.name) {
		case  "PLAY" :			
			this.visible = false;
			this.alpha = 0;
		break;
	}
};