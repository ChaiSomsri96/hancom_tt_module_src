
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.3 (Phaser v2.6.2)


/**
 * mainGameResult.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function mainGameResult(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _PanelResultLose = this.game.add.sprite(0.0, 0.0, 'PanelResultLose', null, this);
	_PanelResultLose.anchor.setTo(0.5, 0.5);
	
	var _PanelResultVic = this.game.add.sprite(0.0, 0.0, 'PanelResultVic', null, this);
	_PanelResultVic.anchor.setTo(0.5, 0.5);
	
	var _ResultPanelCharHaloEffect = this.game.add.sprite(0.0, 0.0, 'ResultPanelCharHaloEffect', null, this);
	_ResultPanelCharHaloEffect.anchor.setTo(0.5, 0.5);
	
	var _charGroup = new CharacterGroup(this.game, this);
	
	var _redScoreGroup = this.game.add.group(this);
	_redScoreGroup.position.setTo(0.0, 10.0);
	
	var _ResultSTitleTeamR = this.game.add.sprite(-250.0, -110.0, 'ResultSTitleTeamR', null, _redScoreGroup);
	_ResultSTitleTeamR.anchor.setTo(0.5, 0.5);
	
	this.game.add.sprite(-350.0, -70.0, 'ResultLoseInfo', null, _redScoreGroup);
	
	var _ResultVicInfoR = this.game.add.sprite(-350.0, -70.0, 'ResultVicInfo', null, _redScoreGroup);
	
	this.game.add.sprite(-196.0, -87.0, 'ResultLoseInfoPlus', null, _redScoreGroup);
	
	var _ResultVicInfoPlusR = this.game.add.sprite(-196.0, -87.0, 'ResultVicInfoPlus', null, _redScoreGroup);
	
	var _redOwnMain = this.game.add.text(-236.0, -47.0, '00', {"font":"30px Nanum Gothic","fill":"#ffffff","align":"right"}, _redScoreGroup);
	_redOwnMain.anchor.setTo(0.5, 0.5);
	
	var _redOwnBig = this.game.add.text(-130.0, -54.0, '00', {"font":"40px Nanum Gothic","fill":"#ffffff","align":"right"}, _redScoreGroup);
	_redOwnBig.anchor.setTo(0.5, 0.5);
	
	var _redTeamScore = this.game.add.text(-183.0, 8.0, '000000점', {"font":"30px Nanum Gothic","fill":"#ffffff","align":"center"}, _redScoreGroup);
	_redTeamScore.anchor.setTo(0.5, 0.5);
	
	var _blueScoreGroup = this.game.add.group(this);
	_blueScoreGroup.position.setTo(0.0, 10.0);
	
	var _ResultSTitleTeamB = this.game.add.sprite(250.0, -110.0, 'ResultSTitleTeamB', null, _blueScoreGroup);
	_ResultSTitleTeamB.anchor.setTo(0.5, 0.5);
	
	this.game.add.sprite(101.0, -70.0, 'ResultLoseInfo', null, _blueScoreGroup);
	
	var _ResultVicInfoB = this.game.add.sprite(101.0, -70.0, 'ResultVicInfo', null, _blueScoreGroup);
	
	this.game.add.sprite(253.0, -87.0, 'ResultLoseInfoPlus', null, _blueScoreGroup);
	
	var _ResultVicInfoPlusB = this.game.add.sprite(253.0, -87.0, 'ResultVicInfoPlus', null, _blueScoreGroup);
	
	var _blueOwnMain = this.game.add.text(216.0, -48.0, '00', {"font":"30px Nanum Gothic","fill":"#ffffff","align":"center"}, _blueScoreGroup);
	_blueOwnMain.anchor.setTo(0.5, 0.5);
	
	var _blueOwnBig = this.game.add.text(318.0, -55.0, '00', {"font":"40px Nanum Gothic","fill":"#ffffff","align":"right"}, _blueScoreGroup);
	_blueOwnBig.anchor.setTo(0.5, 0.5);
	
	var _blueTeamScore = this.game.add.text(270.0, 8.0, '000000점', {"font":"30px Nanum Gothic","fill":"#ffffff","align":"center"}, _blueScoreGroup);
	_blueTeamScore.anchor.setTo(0.5, 0.5);
	
	var _recordGroup = this.game.add.group(this);
	_recordGroup.position.setTo(0.0, 80.0);
	
	var _PanelResultMyWinRate = this.game.add.sprite(0.0, 0.0, 'PanelResultMyWinRate', null, _recordGroup);
	_PanelResultMyWinRate.anchor.setTo(0.5, 0.5);
	
	var _myWinRate = this.game.add.text(45.0, 8.0, '000승 000패 000무', {"font":"27px Nanum Gothic","align":"right"}, _recordGroup);
	_myWinRate.anchor.setTo(0.5, 0.5);
	
	var _STitleResultMyWinRate = this.game.add.sprite(-125.0, 8.0, 'STitleResultMyWinRate', null, _recordGroup);
	_STitleResultMyWinRate.anchor.setTo(0.5, 0.5);
	
	var _rankGroup = this.game.add.group(this);
	_rankGroup.position.setTo(0.0, -105.0);
	
	var _PanelResultMyRank = this.game.add.sprite(0.0, 0.0, 'PanelResultMyRank', null, _rankGroup);
	_PanelResultMyRank.anchor.setTo(0.5, 0.5);
	
	var _myRank = this.game.add.text(50.0, -8.0, '00위', {"font":"27px Nanum Gothic","align":"right"}, _rankGroup);
	_myRank.anchor.setTo(0.5, 0.5);
	
	var _STitleResultMyRank = this.game.add.sprite(-30.0, -8.0, 'STitleResultMyRank', null, _rankGroup);
	_STitleResultMyRank.anchor.setTo(0.5, 0.5);
	
	var _ResultTitleLose = this.game.add.sprite(-15.0, -190.0, 'ResultTitleLose', null, this);
	_ResultTitleLose.anchor.setTo(0.5, 0.5);
	
	var _ResultTitleVic = this.game.add.sprite(0.0, -190.0, 'ResultTitleVic', null, this);
	_ResultTitleVic.anchor.setTo(0.5, 0.5);
	
	var _ResultTitleDraw = this.game.add.sprite(0.0, -190.0, 'ResultTitleDraw', null, this);
	_ResultTitleDraw.anchor.setTo(0.5, 0.5);
	
	var _ResultBtnKakao = this.game.add.button(-75.0, 160.0, 'ResultBtnKakao', this.kakaoBtn, this, 0, 0, 1, null, this);
	_ResultBtnKakao.anchor.setTo(0.5, 0.5);
	
	var _ResultBtnFacebook = this.game.add.button(75.0, 160.0, 'ResultBtnFacebook', this.facebookBtn, this, 0, 0, 1, null, this);
	_ResultBtnFacebook.anchor.setTo(0.5, 0.5);
	
	var _ResultBtnContinue = this.game.add.button(-115.0, 250.0, 'ResultBtnContinue', this.continueBtn, this, 2, 0, 1, null, this);
	_ResultBtnContinue.anchor.setTo(0.5, 0.5);
	
	var _ResultBtnExit = this.game.add.button(115.0, 250.0, 'ResultBtnExit', this.exitBtn, this, 2, 0, 1, null, this);
	_ResultBtnExit.anchor.setTo(0.5, 0.5);
	
	var _pointToast = this.game.add.group(this);
	
	var _pointToastBG2 = this.game.add.sprite(0.0, -140.0, 'ImgBTranslucency', null, _pointToast);
	_pointToastBG2.scale.setTo(300.0, 4.0);
	_pointToastBG2.anchor.setTo(0.5, 0.5);
	
	var _pointToastText = this.game.add.text(0.0, -140.0, '(승무패) 보상으로 000 한컴포인트를 확득했습니다.', {"font":"20px Nanum Gothic","fill":"#ffffff"}, _pointToast);
	_pointToastText.anchor.setTo(0.5, 0.5);
	
	
	
	// fields
	
	this.fPanelResultVic = _PanelResultVic;
	this.fResultPanelCharHaloEffect = _ResultPanelCharHaloEffect;
	this.fCharGroup = _charGroup;
	this.fResultVicInfoR = _ResultVicInfoR;
	this.fResultVicInfoPlusR = _ResultVicInfoPlusR;
	this.fRedOwnMain = _redOwnMain;
	this.fRedOwnBig = _redOwnBig;
	this.fRedTeamScore = _redTeamScore;
	this.fResultVicInfoB = _ResultVicInfoB;
	this.fResultVicInfoPlusB = _ResultVicInfoPlusB;
	this.fBlueOwnMain = _blueOwnMain;
	this.fBlueOwnBig = _blueOwnBig;
	this.fBlueTeamScore = _blueTeamScore;
	this.fRecordGroup = _recordGroup;
	this.fPanelResultMyWinRate = _PanelResultMyWinRate;
	this.fMyWinRate = _myWinRate;
	this.fRankGroup = _rankGroup;
	this.fPanelResultMyRank = _PanelResultMyRank;
	this.fMyRank = _myRank;
	this.fResultTitleLose = _ResultTitleLose;
	this.fResultTitleVic = _ResultTitleVic;
	this.fResultTitleDraw = _ResultTitleDraw;
	this.fResultBtnKakao = _ResultBtnKakao;
	this.fResultBtnFacebook = _ResultBtnFacebook;
	this.fResultBtnContinue = _ResultBtnContinue;
	this.fResultBtnExit = _ResultBtnExit;
	this.fPointToast = _pointToast;
	this.fPointToastText = _pointToastText;
	
	this.isPlaying = false;
	
}

/** @type Phaser.Group */
var mainGameResult_proto = Object.create(Phaser.Group.prototype);
mainGameResult.prototype = mainGameResult_proto;
mainGameResult.prototype.constructor = mainGameResult;

/* --- end generated code --- */
// -- user code here --

function resultData() {
	var winColor = "";
	var redSmall = 0;
	var redBig = 0;
	var redSocre = 0;
	var redBonus = 0;
	var blueSmall = 0;
	var blueBig = 0;
	var blueScore = 0;
	var blueBonus = 0;
	var myRank = 0;
	var myWin = 0;
	var myLose = 0;
	var myDraw = 0;
	var gamePoint = 0;
}

mainGameResult.prototype.customInit = function(result) {
	
	this.gameResultData = result;
	
	console.log(this.gameResultData);
	
	this.fResultPanelCharHaloEffect.visible = false;
	this.fResultTitleLose.visible = false;
	this.fResultTitleVic.visible = false;
	this.fResultTitleDraw.visible = false;
	
	//score
	this.fRedOwnMain.text = "";
	this.fRedOwnBig.text = "";
	this.fRedTeamScore.text = "";
	this.fBlueOwnMain.text = "";
	this.fBlueOwnBig.text = "";
	this.fBlueTeamScore.text = "";
	
	//for increment animation
	this.redSmall = 0;
	this.redBig = 0;
	this.redScore = 0;
	this.blueSmall = 0;
	this.blueBig = 0;
	this.blueScore = 0;
	
	this.redBuffer = 0;
	this.blueBuffer = 0;
	
	this.phase = "small";
	
	//wait event
	this.waitBeforeSec = 0.8;
	this.game.time.events.add(Phaser.Timer.SECOND * this.waitBeforeSec, this.startSmallScore, this);

	//set rank & winRate
	this.fMyRank.text = this.gameResultData.myRank.toString() + "위";
	
	console.log("winRateInfo");
	console.log(this.gameResultData.myWin);
	console.log(this.gameResultData.myLose);
	console.log(this.gameResultData.myDraw);
	this.fMyWinRate.text = 
		this.gameResultData.myWin.toString() + "승 " +
		this.gameResultData.myLose.toString() + "패 " +
		this.gameResultData.myDraw.toString() + "무";
	
	this.fRankGroup.alpha = 0;
	this.fRecordGroup.alpha = 0;
	this.fPointToast.alpha = 0;
	
	this.winCount = this.gameResultData.myWin.toString();
	
	//result panel direction (BLUE)
	if (this.game.userInfoManager.team == "BLUE") {
		this.fPanelResultMyRank.scale.x = -1.0;
		this.fPanelResultMyWinRate.scale.x = -1.0;
	}
};




//update
mainGameResult.prototype.update = function() {
	
	//rotation halo
	this.fResultPanelCharHaloEffect.angle += 0.5;
	
	//scoreIncrement check
	if (this.isPlaying != true) { return; }
	
	//phase
	if (this.phase == "small") {
		this.incrementSmall();
	} else if (this.phase == "big") {
		this.incrementBig();
	} else if (this.phase == "score") {
		this.incrementScore();
	} else if (this.phase == "bonus") {
		this.incrementBonus();
	} else {
		return;
	}
	
};





//Set playing, phase, buffer
mainGameResult.prototype.startSmallScore = function() {
	this.isPlaying = true;
	
	this.phase = "small";
	this.redBuffer = this.gameResultData.redSmall;
	this.blueBuffer = this.gameResultData.blueSmall;
	this.fRedOwnMain.text = 0;
	this.fBlueOwnMain.text = 0;
};

mainGameResult.prototype.startBigScore = function() {
	this.isPlaying = true;
	this.phase = "big";
	this.redBuffer = this.gameResultData.redBig;
	this.blueBuffer = this.gameResultData.blueBig;
	this.fRedOwnBig.text = 0;
	this.fBlueOwnBig.text = 0;
};

mainGameResult.prototype.startTotalScore = function() {
	this.isPlaying = true;
	this.phase = "score";
	this.redBuffer = this.gameResultData.redScore;
	this.blueBuffer = this.gameResultData.blueScore;
	this.fRedTeamScore.text = 0;
	this.fBlueTeamScore.text = 0;
};

mainGameResult.prototype.startBonusScore = function() {
	this.isPlaying = true;
	this.phase = "bonus";
	this.redBonusBuffer = this.gameResultData.redBonus;
	this.blueBonusBuffer = this.gameResultData.blueBonus;
};





//increment Scores
mainGameResult.prototype.incrementSmall = function() {
	if (this.redBuffer + this.blueBuffer > 0) {
		if (this.redBuffer > 0) {
			this.redBuffer--;
			this.redSmall++;
			this.fRedOwnMain.text = this.redSmall;
		}
		if (this.blueBuffer > 0) {
			this.blueBuffer--;
			this.blueSmall++;
			this.fBlueOwnMain.text = this.blueSmall;
		}
		
	} else {
		this.isPlaying = false;
		this.game.time.events.add(Phaser.Timer.SECOND * this.waitBeforeSec, this.startBigScore, this);
	}
};

mainGameResult.prototype.incrementBig = function() {
	if (this.redBuffer + this.blueBuffer > 0) {
		if (this.redBuffer > 0) {
			this.redBuffer--;
			this.redBig++;
			this.fRedOwnBig.text = this.redBig;
		}
		if (this.blueBuffer > 0) {
			this.blueBuffer--;
			this.blueBig++;
			this.fBlueOwnBig.text = this.blueBig;
		}
		
	} else {
		
//		if (this.blueBig != this.redBig) {	//done increment
//			//this.showScoreAndResult();
//			this.isPlaying = false;
//			this.game.time.events.add(Phaser.Timer.SECOND * this.waitBeforeSec, this.showScoreAndResult, this);
//			return;
//		}
		this.isPlaying = false;
		this.game.time.events.add(Phaser.Timer.SECOND * this.waitBeforeSec, this.startTotalScore, this);
	}
};

mainGameResult.prototype.incrementScore = function() {
	if (this.redBuffer + this.blueBuffer > 0) {						//Team score
		if (this.redBuffer > 0) {
			this.redBuffer -= 100;
			this.redScore += 100;
			this.fRedTeamScore.text = this.redScore;
		}
		if (this.blueBuffer > 0) {
			this.blueBuffer -= 100;
			this.blueScore += 100;
			this.fBlueTeamScore.text = this.blueScore;
		}
	} else {
		this.isPlaying = false;
		this.game.time.events.add(Phaser.Timer.SECOND * this.waitBeforeSec, this.startBonusScore, this);
	}
};

mainGameResult.prototype.incrementBonus = function() {
	if (this.redBonusBuffer + this.blueBonusBuffer > 0) {			//Bonus score
		if (this.redBonusBuffer > 0) {
			this.redBonusBuffer -= 100;
			this.redScore += 100;
			this.fRedTeamScore.text = this.redScore;
		}
		if (this.blueBonusBuffer > 0) {
			this.blueBonusBuffer -= 100;
			this.blueScore += 100;
			this.fBlueTeamScore.text = this.blueScore;
		}
	} else {
		//this.showResult();
		this.isPlaying = false;
		//this.game.time.events.add(Phaser.Timer.SECOND * this.waitBeforeSec, this.showResult, this);
		this.game.time.events.add(Phaser.Timer.SECOND * 0, this.showResult, this);
	}
};




//Result
mainGameResult.prototype.showResult = function() {
	console.log("show result");
	
	_result = this.gameResultData.winColor;
	console.log(_result);
	
	//title & character
	
	if (_result == "DRAW") {
		//DRAW
		this.showTitle(this.fResultTitleDraw);
		this.fCharGroup.startAnimation(this.game.userInfoManager.avatar, 'draw');
		this.game.audioManager.playSfx('Draw');
	} else if (_result == this.game.userInfoManager.team) {
		//WIN
		this.showTitle(this.fResultTitleVic);
		this.fCharGroup.startAnimation(this.game.userInfoManager.avatar, 'win');
		this.game.audioManager.playSfx('Vict');
	} else {
		//LOSE
		//blue panel & info invisible
		this.fPanelResultVic.visible = false;
		this.fResultVicInfoPlusR.visible = false;
		this.fResultVicInfoR.visible = false;
		this.fResultVicInfoPlusB.visible = false;
		this.fResultVicInfoB.visible = false;
		
		this.showTitle(this.fResultTitleLose);
		this.fCharGroup.startAnimation(this.game.userInfoManager.avatar, 'lose');
		this.game.audioManager.playSfx('Lose');
	} 
	
	//halo
	this.fResultPanelCharHaloEffect.visible = true;
	this.game.add.tween(this.fResultPanelCharHaloEffect.scale).from({x:0, y:0}, 150, "Linear", true);
	
	
	//rank & record
	this.game.add.tween(this.fRankGroup).to({alpha : 1}, 300, "Linear", true);
	this.game.add.tween(this.fRecordGroup).to({alpha : 1}, 300, "Linear", true);
};

mainGameResult.prototype.showTitle = function(target) {
	console.log(target);
	target.visible = true;
	target.scale.setTo(0,0);
	titleTween = this.game.add.tween(target.scale).to({x:1,y:1}, 700, Phaser.Easing.Elastic.Out, true);
	titleTween.onComplete.addOnce(this.showPointToast, this);
	
};

mainGameResult.prototype.showScoreAndResult = function() {
	console.log("show score and result");
	
	this.fRedTeamScore.text = String(this.gameResultData.redScore) + "점";
	this.fBlueTeamScore.text = String(this.gameResultData.blueScore) + "점";
	
	//this.game.time.events.add(Phaser.Timer.SECOND * this.waitBeforeSec, this.showResult, this);
	this.game.time.events.add(Phaser.Timer.SECOND * 0, this.showResult, this);
};

mainGameResult.prototype.showPointToast = function() {
	if (this.game.userInfoManager.pk == 0) {return;}
	
	_result = this.gameResultData.winColor;
	_gameResultText = "";
	
	if (_result == "DRAW") {
		//DRAW
		_gameResultText = "무승부";
	} else if (_result == this.game.userInfoManager.team) {
		//WIN
		_gameResultText = "승리";
	} else {
		//LOSE
		_gameResultText = "패배";
	} 
	
	_gameResultPoint = this.gameResultData.gamePoint;
	
	this.fPointToastText.text = _gameResultText + " 보상으로 " + _gameResultPoint + " 한컴포인트를 획득했습니다.";
	
	appear = this.game.add.tween(this.fPointToast).to({alpha:1}, 250, Phaser.Easing.Linear.None, true, 0);
	disappear = this.game.add.tween(this.fPointToast).to({alpha:0}, 250, Phaser.Easing.Linear.None, false, 2500);
	appear.chain(disappear);
	appear.start();
};


//Btn
mainGameResult.prototype.continueBtn = function() {
	this.game.audioManager.playSfx('Click');
	this.game.userInfoManager.currentStatus = "ROBBY";
	this.game.state.start("Robby");
  	this.game.socketManager.replayGame();
  	console.log("Click REPLAY!!!!!!!!!!!!!")
};

mainGameResult.prototype.exitBtn = function() {
	this.game.audioManager.playSfx('Click');
	this.game.socketManager.leaveRoom();
};

mainGameResult.prototype.kakaoBtn = function() {
	this.game.audioManager.playSfx('Click');
	
//	var gNickName = "야호";
//	var gCurrentStage = "대한민국";
//	var gScore = "10";
	
	sendLink(this.game.userInfoManager.nickname, this.winCount);
};

mainGameResult.prototype.facebookBtn = function() {
	this.game.audioManager.playSfx('Click');
	
//	var snsURL   = encodeURIComponent("https://typing.malangmalang.com/games/flipping-cards");
//    window.open("http://www.facebook.com/sharer/sharer.php?u=" + snsURL);
    
    var snsURL = "";
    switch (gENV) {
    case 1:   // DEV
       snsURL   = encodeURIComponent("https://dev-typing.malangmalang.com");
       break;
    case 2:   // STG
       snsURL   = encodeURIComponent("https://stg-typing.malangmalang.com");
       break;
    case 3:   // PRODUCT
       snsURL   = encodeURIComponent("https://typing.malangmalang.com");
       break;
    }
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + snsURL);
};

