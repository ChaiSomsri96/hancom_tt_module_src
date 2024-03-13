
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * BackObjThreeTwoV1
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function BackObjThreeTwoV1(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'BackImg3_Sheet2', aFrame == undefined || aFrame == null? 0 : aFrame);
	this.anchor.setTo(0.5, 0.5);
	this.animations.add('PLAY', [0, 1, 2, 3, 4], 8, true);
	
}

/** @type Phaser.Sprite */
var BackObjThreeTwoV1_proto = Object.create(Phaser.Sprite.prototype);
BackObjThreeTwoV1.prototype = BackObjThreeTwoV1_proto;
BackObjThreeTwoV1.prototype.constructor = BackObjThreeTwoV1;

/* --- end generated code --- */
// -- user code here --
BackObjThreeTwoV1.prototype.beforeCreate = function() {
	
};

BackObjThreeTwoV1.prototype.afterCreate = function(){	
	this.tweenA = null;
	this.isTween = false;
	this.dir = -1;
};

BackObjThreeTwoV1.prototype.setPlay = function(aAnimaitonName, aIsTween, aDir) {	
	if(this === undefined || this.animations === undefined) { console.log("BackObjThreeTwoV1 SetPlay undefined!!!"); return;}
	if(aIsTween !== undefined && aIsTween !== null) { this.isTween = aIsTween; }	
	if(this.visible === false) this.visible = true;
	if(this.alpha === 0) this.alpha = 1;	
	
	switch(aAnimaitonName)	{
		case  "PLAY" :					
			this.dir = aDir;
			this.animations.play("PLAY");
			if(this.isTween) this.playTweenBasic();
		break;
	}			
	//console.log("BackObjThreeTwoV1 aAnimaitonName is " + aAnimaitonName);
};

BackObjThreeTwoV1.prototype.update = function () {
	//기존함수테스트
	this.gameProcess();	
};

BackObjThreeTwoV1.prototype.gameProcess = function(){	
	this.processCharacter();
	this.animationOnComplete();
};

BackObjThreeTwoV1.prototype.processCharacter = function(){	
	
};

BackObjThreeTwoV1.prototype.animationOnComplete = function(){	
	if(this.animations.currentAnim.isFinished === false) return;	

	switch(this.animations.currentAnim.name) {
		case  "PLAY" :
			//this.setPlay("PLAY", true, this.initX, this.initY, this.targetX, this.targetY);
			break;
	}
};

//트윈은 있는 동작만 추가한다.
BackObjThreeTwoV1.prototype.playTweenBasic = function(){
	this.tweenA = this.game.add.tween(this).to({ x: this.x + this.dir * 500 }, 10000, "Linear");	
	this.tweenA.start();
	this.tweenA.onComplete.add(this.endTweenPlay, this);
};

BackObjThreeTwoV1.prototype.endTweenPlay = function(){	
	
	this.x = 430;
	this.y = 110;
	
	this.visible = false;
	this.game.time.events.add(Phaser.Timer.SECOND * 5, function(){this.setPlay("PLAY", true, -1); this.visible = true;}, this);
	
	//this.setPlay("PILE");
	//this.alpha = 0;
	//this.visible = false;
};