
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * Menu.
 */
function Menu() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Menu_proto = Object.create(Phaser.State.prototype);
Menu.prototype = Menu_proto;
Menu.prototype.constructor = Menu;

Menu.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;	
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = false;

	var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
	if (varUA.match('android') != null) { 
	   //안드로이드 일때 처리
	} else if (varUA.indexOf("iphone")>-1||varUA.indexOf("ipad")>-1||varUA.indexOf("ipod")>-1) { 
	   //IOS 일때 처리
		this.scale.maxWidth = (window.innerHeight * 720) / (800 * 2);
		this.scale.maxHeight = window.innerHeight / 2;
	} else {
	   //아이폰, 안드로이드 외 처리
	}
	
	nextStage = 0;	
	gFlag = false;
};

Menu.prototype.preload = function () {
	
    this.roomVolumeDataLoad();	// 불륨 읽기
    this.applyVolume();		// volume 적용
    
	// 사운드
	gMenuBgm = this.setBGM('Mole_music', mBackgroundVolume * 0.01, true);
	esMenuPopup = this.game.add.audio('Popup', mEffectVolume * 0.01);
	esMenuClick = this.game.add.audio('Click', mEffectVolume * 0.01);
	
	this.game.stage.disableVisibilityChange = true;
};

Menu.prototype.create = function () {
	_Stage = this.add.group();
	
	this.add.sprite(0.0, 0.0, 'StageSelectBack', null, _Stage);

	this._themeName = this.add.sprite(228.0, 691.0, 'StageThemaTitle'+(gCurrentPage+1), null, _Stage);

	this._theme = new Array();
	for(var i=0; i<10; i++) {
		this._theme[i] = this.add.sprite(58.0, 152.0, 'StageSelectThema' + (i+1), null, _Stage);
		this._theme[i].visible = false;
	}
	this._theme[gCurrentPage].visible = true;
	
	this._prevBtn = this.add.button(17.0, 359.0, 'BtnSheetLArrow', this.prevTheme, this, 1, 0, 2, 0, _Stage);
	
	this._nextBtn = this.add.button(609.0, 359.0, 'BtnSheetRArrow', this.nextTheme, this, 1, 0, 2, 0, _Stage);
	
	this.add.sprite(210.0, 14.0, 'StageSelectTitle', null, _Stage);
	
	this.add.button(16.0, 10.0, 'BtnSheetVol', this.volShow, this, 1, 0, 2, 0, _Stage);
	
	this.add.button(596.0, 10.0, 'BtnSheetHelp', this.helpPopupShow, this, 1, 0, 2, 0, _Stage);
	
	this._btnClearStagePos = [ 
		[{x:119, y:379}, {x:210, y:459}, {x:301, y:319}, {x:401, y:499}, {x:509, y:387}],
		[{x:119, y:439}, {x:209, y:319}, {x:301, y:469}, {x:421, y:359}, {x:509, y:487}],
		[{x:119, y:499}, {x:209, y:429}, {x:301, y:349}, {x:421, y:349}, {x:509, y:437}],
		[{x:118, y:419}, {x:214, y:459}, {x:310, y:499}, {x:406, y:429}, {x:510, y:357}],
		[{x:118, y:389}, {x:214, y:479}, {x:310, y:346}, {x:406, y:444}, {x:510, y:432}],
		[{x:119, y:359}, {x:210, y:459}, {x:301, y:319}, {x:401, y:499}, {x:509, y:387}],
		[{x:119, y:439}, {x:209, y:319}, {x:301, y:469}, {x:421, y:359}, {x:509, y:487}],
		[{x:119, y:499}, {x:209, y:429}, {x:301, y:349}, {x:421, y:349}, {x:509, y:437}],
		[{x:118, y:419}, {x:214, y:459}, {x:310, y:499}, {x:406, y:429}, {x:510, y:357}],
		[{x:118, y:389}, {x:214, y:479}, {x:310, y:346}, {x:406, y:444}, {x:510, y:432}] ];

	this._btnClearStage = new Array();
	for(var i=0; i<5; i++) {
		this._btnClearStage[i] = new GrpPrefabBtnClearStage(this.game, this._btnClearStagePos[gCurrentPage][i].x, this._btnClearStagePos[gCurrentPage][i].y, i, _Stage);
	}
	
	this._btnNextStagePos = [ 
		[{x:124, y:414}, {x:215, y:494}, {x:306, y:354}, {x:406, y:534}, {x:506, y:434}],
		[{x:124, y:474}, {x:214, y:354}, {x:306, y:504}, {x:426, y:394}, {x:506, y:534}],
		[{x:124, y:534}, {x:214, y:464}, {x:306, y:384}, {x:426, y:384}, {x:506, y:484}],
		[{x:123, y:454}, {x:219, y:494}, {x:315, y:534}, {x:411, y:464}, {x:507, y:404}],
		[{x:123, y:424}, {x:219, y:514}, {x:315, y:381}, {x:411, y:479}, {x:507, y:479}],
		[{x:124, y:394}, {x:215, y:494}, {x:306, y:354}, {x:406, y:534}, {x:506, y:434}],
		[{x:124, y:474}, {x:214, y:354}, {x:306, y:504}, {x:426, y:394}, {x:506, y:534}],
		[{x:124, y:534}, {x:214, y:464}, {x:306, y:384}, {x:426, y:384}, {x:506, y:484}],
		[{x:123, y:454}, {x:219, y:494}, {x:315, y:534}, {x:411, y:464}, {x:507, y:404}],
		[{x:123, y:424}, {x:219, y:514}, {x:315, y:381}, {x:411, y:479}, {x:507, y:479}] ];
	
	this._btnNextStage = new Array();
	for(var i=0; i<5; i++) {
		this._btnNextStage[i] = new GrpPrefabBtnNextStage(this.game, this._btnNextStagePos[gCurrentPage][i].x, this._btnNextStagePos[gCurrentPage][i].y, i, _Stage);
	}
	
	_StageInfoS = this.add.group();
	
	this.add.sprite(0.0, 0.0, 'PopupTransBack', null, _StageInfoS);
	
	this.add.button(150.0, 647.0, 'BtnSheetGo', this.gameStart, this, 1, 0, 2, 0, _StageInfoS);
	
	this.add.button(364.0, 647.0, 'BtnSheetExit', this.exitStageInfo, this, 1, 0, 2, 0, _StageInfoS);

	this.add.sprite(122.0, 72.0, 'PopupStageInfoS', null, _StageInfoS);
	
	this.add.text(360.0, 353.0, '1234점', {"font":"bold 28px 나눔고딕","fill":"#ffffff","align":"center"}, _StageInfoS);	
	
	this.add.text(321.0, 314.0, '최고점수', {"font":"bold 24px 나눔고딕","fill":"#ffc000"}, _StageInfoS);
	
	this.add.sprite(272.0, 229.0, 'StageInfoTitle', null, _StageInfoS);
	var _tmpNumInfoS = this.add.bitmapText(435.0, 228.0, 'StageBigNum', '50', 44, _StageInfoS);
	_tmpNumInfoS.anchor.x = 0.5;
	
	this.add.sprite(303.0, 79.0, 'StageInfoStar2', null, _StageInfoS);
	this.add.sprite(226.0, 124.0, 'StageInfoStar1', null, _StageInfoS);
	this.add.sprite(399.0, 123.0, 'StageInfoStar3', null, _StageInfoS);
	
	_StageInfoS.visible = false;
	
	var _StageInfoMission = this.add.group();
	
	this.add.sprite(0.0, 0.0, 'PopupTransBack', null, _StageInfoMission);
	
	this.add.button(150.0, 647.0, 'BtnSheetGo', this.gameStart, this, 1, 0, 2, 0, _StageInfoMission);
	
	this.add.button(364.0, 647.0, 'BtnSheetExit', this.exitStageInfo, this, 1, 0, 2, 0, _StageInfoMission);
	
	this.add.sprite(122.0, 65.0, 'PopupStageInfoL', null, _StageInfoMission);
	
	this.add.text(360.0, 461.0, '9999점 이상의\n점수획득', {"font":"bold 20px 나눔고딕","fill":"#ffffff","align":"center"}, _StageInfoMission);		// 4
	
	this.add.text(320.0, 421.0, '도전과제', {"font":"bold 24px 나눔고딕","fill":"#ffc000"}, _StageInfoMission);
	
	this.add.text(360.0, 343.0, '0점', {"font":"bold 28px 나눔고딕","fill":"#ffffff","align":"center"}, _StageInfoMission);
	
	this.add.text(321.0, 304.0, '최고점수', {"font":"bold 24px 나눔고딕","fill":"#ffc000"}, _StageInfoMission);
	
	this.add.sprite(272.0, 229.0, 'StageInfoTitle', null, _StageInfoMission);
	var _tmpNum = this.add.bitmapText(435.0, 228.0, 'StageBigNum', '11', 44, _StageInfoMission);
	_tmpNum.anchor.x = 0.5;
	
	this.add.sprite(290.0, 67.0, 'StageInfoStarMission', null, _StageInfoMission);
	
	_StageInfoMission.visible = false;
	
	
	// 볼륨, 도움말, 나가기 임시막기
	var _toastLayer = this.add.group();
	var __style = { font: "45px 나눔고딕", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
	var _toastMsg = this.add.text(360, 250, "준비중입니다...", __style);
	_toastMsg.anchor.x = 0.5;
	_toastLayer.add(_toastMsg);
	_toastLayer.visible = false;
	this.toastLayer = _toastLayer;

	// volume
	var _VolCotrolGroup = this.add.group();
	this.add.sprite(0.0, 0.0, 'UIResultBack', null, _VolCotrolGroup);
	this.add.sprite(110.0, 221.0, 'PopPanelVolControl', null, _VolCotrolGroup);
	this.add.sprite(284.0, 250.0, 'VolControlTitle', null, _VolCotrolGroup);
	this.add.button(492.0, 198.0, 'PopupPanelBtnX', this.volHide, this, 1, 0, 2, 0, _VolCotrolGroup);
	
	this.add.button(176.0, 349.0, 'PanelMuteCheck', this.roomBackgroundMute, this, null, null, null, null, _VolCotrolGroup);
	var _fMuteCheckBGM = this.add.sprite(171.0, 346.0, 'MuteCheck', null, _VolCotrolGroup);
	this.add.sprite(160.0, 314.0, 'STitleSoundMute', null, _VolCotrolGroup);
	this.add.sprite(308.0, 361.0, 'BarSetGaugeBack', null, _VolCotrolGroup);
	var _fBtnSetBGMPointer = this.add.button(343.0, 344.0, 'BtnSetGaugePointer', null, this, null, 0, null, null, _VolCotrolGroup);
	this.add.button(263.0, 344.0, 'BtnArrowSetL', this.roomBackgroundLeft, this, 0, 0, 1, 0, _VolCotrolGroup);
	this.add.button(524.0, 344.0, 'BtnArrowSetR', this.roomBackgroundRight, this, 0, 0, 1, 0, _VolCotrolGroup);
	this.add.sprite(366.0, 314.0, 'STitleBGM', null, _VolCotrolGroup);
	
	this.add.button(176.0, 447.0, 'PanelMuteCheck', this.roomEffectMute, this, null, null, null, null, _VolCotrolGroup);
	var _fMuteCheckES = this.add.sprite(171.0, 444.0, 'MuteCheck', null, _VolCotrolGroup);
	this.add.sprite(160.0, 412.0, 'STitleSoundMute', null, _VolCotrolGroup);
	this.add.sprite(308.0, 459.0, 'BarSetGaugeBack', null, _VolCotrolGroup);
	var _fBtnSetESPointer = this.add.button(343.0, 442.0, 'BtnSetGaugePointer', null, this, null, 0, null, null, _VolCotrolGroup);
	this.add.button(263.0, 442.0, 'BtnArrowSetL', this.roomEffectLeft, this, 0, 0, 1, 0, _VolCotrolGroup);
	this.add.button(524.0, 442.0, 'BtnArrowSetR', this.roomEffectRight, this, 0, 0, 1, 0, _VolCotrolGroup);
	this.add.sprite(376.0, 411.0, 'STitleEffSound', null, _VolCotrolGroup);
	
	_VolCotrolGroup.visible = false;

	
	// help
	var _PopupHelpgroup = this.add.group();	
	this.add.sprite(0.0, 0.0, 'UIResultBack', null, _PopupHelpgroup);
	this.add.sprite(72.0, 42.0, 'PopupHelpPanel', null, _PopupHelpgroup);
	this.add.sprite(143.0, 162.0, 'HelpContentInfo1', null, _PopupHelpgroup);	// 2
	this.add.button(35.0, 319.0, 'BtnSheetLArrow', this.helpPrev, this, 1, 0, 2, 0, _PopupHelpgroup);	// 3
	this.add.button(591.0, 319.0, 'BtnSheetRArrow', this.helpNext, this, 1, 0, 2, 0, _PopupHelpgroup);	// 4
	this.add.button(542.0, 40.0, 'PopupPanelBtnX', this.helpHide, this, 1, 0, 2, 0, _PopupHelpgroup);
	this.add.button(233.0, 600.0, 'PopupHelpCheckBox', this.helpFlagSave, this, null, 0, 1, null, _PopupHelpgroup);	// 6
	this.add.sprite(276.0, 617.0, 'PopupHelpCheckTxt', null, _PopupHelpgroup);
	this.add.text(360.0, 676.0, '01/12', {"font":"bold 36px 나눔고딕","fill":"#ffffff"}, _PopupHelpgroup);		// 8
	_PopupHelpgroup.children[8].anchor.x = 0.5;
	_PopupHelpgroup.visible = false;
	
	
	var _Opinion = this.add.button(606.0, 692.0, 'OpinionBtnSheet', Opinion, this, 1, 0, 2, 0);	// 3
	
	
	this.StageSelectScene = _Stage;
	this.StageInfoSmall = _StageInfoS;
	this.StageInfoMission = _StageInfoMission;
	
	this.popupHelpgroup = _PopupHelpgroup;
	this.volCotrolGroup = _VolCotrolGroup;
	
	this.fMuteCheckBGM = _fMuteCheckBGM; 
	this.fBtnSetBGMPointer = _fBtnSetBGMPointer;
	
	this.fMuteCheckES = _fMuteCheckES;
	this.fBtnSetESPointer = _fBtnSetESPointer;
		
	// add : 190214
	this._prevBtn.visible = false;
	this._nextBtn.visible = false;
	
	
	// 치트
//	this.cheating();
	
	if (gUUID.toString().indexOf("Guest") == -1) {
		this.testServerLoad();
		
	}
	else {
		this.sessionStorageLoad();
		// 2019-06-19 modify
		
		if(nextStage < 10){
			this.openTenStage();
		}
		
		//위의문제로 15이상 스테이지 올라기지 못함 그래서 주석처리 2019_09_20
	}

	if (gIsStarting == true) {		
		this.helpAutoShow();
		gIsStarting = false;
	}
	
	// 볼륨
	this.roomVolume();
	this.roomVolumeDataLoad();
	this.applyVolume();

	if (mBackgroundMute == false)
		this.playBGM();
	
	that = this;
	
	gFlag = true;

};

// 임시
Menu.prototype.showToastMsgTmp = function () {
	this.toastLayer.visible = true;
	this.game.time.events.repeat(500, 1, this.hideToastMsg, this);
};

Menu.prototype.hideToastMsg = function () {
	this.toastLayer.visible = false;
};

var gHelpPage = 1;
Menu.prototype.helpShow = function () {
	// 2019-06-19 modify
	if (mEffectMute == false) {
		esMenuPopup.volume = mEffectVolume * 0.01;
		esMenuPopup.play();
	}
	this.StageSelectScene.ignoreChildInput = true;

	for(var i=0; i<5; i++) {
		this._btnClearStage[i].ignoreChildInputEx();
		this._btnNextStage[i].ignoreChildInputEx();
	}
	
	gHelpPage = 1;	
	this.popupHelpgroup.children[3].visible = false;
	this.popupHelpgroup.children[4].visible = true;
	
	this.popupHelpgroup.children[2].loadTexture('HelpContentInfo'+gHelpPage, 0, false);
	// 2019-07-05 modify
//	this.popupHelpgroup.children[8].setText(pad(parseInt(gHelpPage), 2)+'/12', true);
	this.popupHelpgroup.children[8].setText(parseInt(gHelpPage)+'/12', true);
	
	this.popupHelpgroup.visible = true;
};

Menu.prototype.helpHide = function () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	this.StageSelectScene.ignoreChildInput = false;

	for(var i=0; i<5; i++) {
		this._btnClearStage[i].knowChildInputEx();
		this._btnNextStage[i].knowChildInputEx();
	}
	
	this.popupHelpgroup.visible = false;
};

Menu.prototype.helpPrev = function () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	if (gHelpPage > 1) {
		gHelpPage -= 1;
		this.popupHelpgroup.children[2].loadTexture('HelpContentInfo'+gHelpPage, 0, false);
		// 2019-07-05 modify
//		this.popupHelpgroup.children[8].setText(pad(parseInt(gHelpPage), 2)+'/12', true);
		this.popupHelpgroup.children[8].setText(parseInt(gHelpPage)+'/12', true);
		
		this.popupHelpgroup.children[3].visible = true;
		this.popupHelpgroup.children[4].visible = true;
	}
	
	if (gHelpPage <= 1) {
		this.popupHelpgroup.children[3].visible = false;
	}
	
};

Menu.prototype.helpNext = function () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	if (gHelpPage < 12) {
		gHelpPage += 1;
		this.popupHelpgroup.children[2].loadTexture('HelpContentInfo'+gHelpPage, 0, false);
		// 2019-07-05 modify
//		this.popupHelpgroup.children[8].setText(pad(parseInt(gHelpPage), 2)+'/12', true);
		this.popupHelpgroup.children[8].setText(parseInt(gHelpPage)+'/12', true);
		
		this.popupHelpgroup.children[3].visible = true;
	}
	
	if (gHelpPage >= 12) {
		this.popupHelpgroup.children[4].visible = false;
	}
};

Menu.prototype.helpPopupShow = function () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	this.helpFlagLoad();
	this.helpShow();
};

Menu.prototype.helpFlagSave = function () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	
	var btn = this.popupHelpgroup.children[6];

	btn.on = !btn.on;

	btn.setFrames(null, null, (btn.on)?1:0, null);    
	btn.frame = (btn.on)?1:0;
	
	localStorage.setItem("HELP_POPUP", btn.on);
};

Menu.prototype.helpFlagLoad = function () {
	var _btn = this.popupHelpgroup.children[6];
	
	_btn.on = (localStorage.getItem("HELP_POPUP") === 'true');
	
	_btn.setFrames(null, null, (_btn.on)?1:0, null);
	_btn.frame = (_btn.on)?1:0;
	
};

Menu.prototype.helpAutoShow = function () {
	var _flag = localStorage.getItem("HELP_POPUP");
	
	if (_flag == null) {
		this.helpShow();
		localStorage.setItem("HELP_POPUP", 'false');
	}
	else if (_flag == 'false') {
		this.helpPopupShow();
	}
	
};

Menu.prototype.volShow = function () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}

	this.roomVolumeDataLoad();
	
	this.StageSelectScene.ignoreChildInput = true;

	for(var i=0; i<5; i++) {
		this._btnClearStage[i].ignoreChildInputEx();
		this._btnNextStage[i].ignoreChildInputEx();
	}
	
	this.volCotrolGroup.visible = true;

};

Menu.prototype.volHide = function () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}

	this.StageSelectScene.ignoreChildInput = false;

	for(var i=0; i<5; i++) {
		this._btnClearStage[i].knowChildInputEx();
		this._btnNextStage[i].knowChildInputEx();
	}
	
	this.volCotrolGroup.visible = false;
	
	this.roomVolumeDataSave();
};

function gameExit() {
	window.close();
}


/* --- end generated code --- */

//	'9999점 이상의\n점수획득'
var MISSION_INFO = [
	"[아모개]를 10회 이상 공격,\n 2000점 이상 획득.",
	"5000점 이상의\n 점수 획득.",
	"[모아]를 10회 이상 공격,\n 6000점 이상 획득.",
	"10000점 이상의\n 점수 획득.",
	"[지지]를 10회 이상 공격,\n 10000점 이상 획득.",
	"15000점 이상의\n 점수 획득.",
	"[마망]을 10회 이상 공격,\n 13000점 이상 획득.",
//	"제한시간동안 [육비]를\n 5회 이하 공격한다.",
//	"제한시간동안 [야야]를\n 3회 이하 공격한다.",
	"[육비]를 5회 이하 공격,\n 15000점 이상 획득.",
	"[야야]를 3회 이하 공격,\n 17000점 이상 획득.",	// 8
//	"모든 캐릭터를 각각\n 5회 이상 공격한다."
	"25000점 이상의\n 점수 획득."
];

// 0이 1스테이지
var nextStage = 0;

// 0~49
var selectStage = 0;

var gFlag = false;

Menu.prototype.update = function () {
	
	// next btn 이전까지만
	var lastPage = parseInt(nextStage/5);
	var checkStage = nextStage%5;

	if (gCurrentPage === 0)
		this._prevBtn.visible = false;
	else
		this._prevBtn.visible = true;
	
	if (lastPage <= gCurrentPage) {
		this._nextBtn.visible = false;
	}
	else {
		if (gCurrentPage === 9)
			this._nextBtn.visible = false;
		else
			this._nextBtn.visible = true;
	}	
	
	if (gFlag == true) {
		for(var i=0; i<5; i++) {
			// 마지막 페이지 체크
			if (gCurrentPage < lastPage) {
				this._btnClearStage[i].show();
				this._btnNextStage[i].hide();
			}
			else {
				this._btnNextStage[i].hide();
				if (i < checkStage) {
					this._btnClearStage[i].show();
				}
				else if (i == checkStage) {
					this._btnNextStage[i].show();
				}
			}		
		}
	}
	
};

Menu.prototype.gameStart = function () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	
	this.stopBGM();
	
	this.game.state.start("Level");
};

Menu.prototype.prevTheme = function () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	if (gCurrentPage > 0) {
		gCurrentPage -= 1;
		this._theme[gCurrentPage].visible = true;
		this.btnPosChange();
		this._theme[gCurrentPage+1].visible = false;
	}
};

Menu.prototype.nextTheme = function () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	if (gCurrentPage < 9) {
		gCurrentPage += 1;
		this._theme[gCurrentPage].visible = true;
		this.btnPosChange();
		this._theme[gCurrentPage-1].visible = false;
	}
};

Menu.prototype.testAdd = function () {
	nextStage++;
};

// ===== volume Popup ===============================
var mConfigVolumeDatas = [0, 0, 50, 50];
var mBackgroundMute = false; // 0
var mEffectMute = false;	 // 1
var mBackgroundVolume = 0;	 // 2
var mEffectVolume = 0;		 // 3

//볼륨 저장
Menu.prototype.roomVolumeDataSave = function() {
	mBackgroundMute === false ? mConfigVolumeDatas[0] = 0 : mConfigVolumeDatas[0] = 1;
	mEffectMute === false ? mConfigVolumeDatas[1] = 0 : mConfigVolumeDatas[1] = 1;
	mConfigVolumeDatas[2] = mBackgroundVolume;
	mConfigVolumeDatas[3] = mEffectVolume;
	localStorage.setItem('VOLUME_CONFIG', mConfigVolumeDatas);
};

//불륨 읽기
Menu.prototype.roomVolumeDataLoad = function() {
	var restoredData = localStorage.getItem('VOLUME_CONFIG');
	if(restoredData === null){
		localStorage.setItem('VOLUME_CONFIG', mConfigVolumeDatas);
		restoredData = localStorage.getItem('VOLUME_CONFIG');
	}
	mConfigVolumeDatas = restoredData.split(',');
};

// volume 적용
Menu.prototype.applyVolume = function() {
	parseInt(mConfigVolumeDatas[0]) === 0 ? mBackgroundMute = false : mBackgroundMute = true; 
	parseInt(mConfigVolumeDatas[1]) === 0 ? mEffectMute = false : mEffectMute = true;
	mBackgroundVolume = parseInt(mConfigVolumeDatas[2]);
	mEffectVolume = parseInt(mConfigVolumeDatas[3]);
};


// 볼륨 버튼 Popup create
Menu.prototype.roomVolume = function(){
	var bounds = new Phaser.Rectangle(303, 344, 214, 46);
	var bounds2 = new Phaser.Rectangle(303, 442, 214, 46);
	    
	// 1번
	this.fBtnSetBGMPointer.inputEnabled = true;
	this.fBtnSetBGMPointer.input.enableDrag(false, false, false, 255, bounds);
	this.fBtnSetBGMPointer.input.allowVerticalDrag = false;
	this.fBtnSetBGMPointer.events.onDragStop.add(this.SetBackgroundParameter, this.game);
	
	// 2번
	this.fBtnSetESPointer.inputEnabled = true;
	this.fBtnSetESPointer.input.enableDrag(false, false, false, 255, bounds2);
	this.fBtnSetESPointer.input.allowVerticalDrag = false;
	this.fBtnSetESPointer.events.onDragStop.add(this.SetEffectParameter, this.game);
	
	this.roomVolumeDataLoad();
	this.applyVolume();
	
	this.roomBackgroundSet();
	this.roomEffectSet();
};

// 배경음 드래그 사용 처리
Menu.prototype.SetBackgroundParameter = function(){
	var sprite = that.volCotrolGroup.children[8];
	var volume = parseInt((sprite.x - 305) / 18 * 10);
	
	if(volume < 0)
		volume = 0;
	mBackgroundVolume = volume;
	
	if(mBackgroundMute === true){
		mBackgroundMute = false;
		that.fMuteCheckBGM.visible = mBackgroundMute;
	}
	
	audio.volume = mBackgroundVolume * 0.01;
};

// 효과음 드래그 사용 처리
Menu.prototype.SetEffectParameter = function(){
	var sprite = that.volCotrolGroup.children[16];
	var volume = parseInt((sprite.x - 305) / 18 * 10);
	
	if(volume < 0)
		volume = 0;
	mEffectVolume = volume;
	
	if(mEffectMute === true){
		mEffectMute = false;
		that.fMuteCheckES.visible = mEffectMute;
	}
};



//배경음 세팅
Menu.prototype.roomBackgroundSet = function(){
	this.fMuteCheckBGM.visible = mBackgroundMute;
	
	this.roomBackgroundDraw();
};

//효과음 세팅
Menu.prototype.roomEffectSet = function(){
	this.fMuteCheckES.visible = mEffectMute;
	
	this.roomEffectDraw();
};

//배경음 음소거 처리
Menu.prototype.roomBackgroundMute = function(){
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	mBackgroundMute = !mBackgroundMute;
	this.fMuteCheckBGM.visible = mBackgroundMute;
	
	if (mBackgroundMute == false)
		this.playBGM();
	else
		this.stopBGM();
	
	this.roomBackgroundDraw();
};

//효과음 음소거 처리
Menu.prototype.roomEffectMute = function(){
	if (mEffectMute == false) {	
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	mEffectMute = !mEffectMute;
	this.fMuteCheckES.visible = mEffectMute;
	
	this.roomEffectDraw();
};

//배경음 좌측 버튼
Menu.prototype.roomBackgroundLeft = function(){
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	mBackgroundVolume -= 10;
	
	if(mBackgroundVolume <= 0){
		mBackgroundVolume = 0;
	}
	
	if(mBackgroundMute === true){
		mBackgroundMute = false;
		this.fMuteCheckBGM.visible = mBackgroundMute;
		
		this.playBGM();
	}
	
	mSaveBackgroundVolume = mBackgroundVolume;
	this.roomBackgroundDraw();
	
	audio.volume = mBackgroundVolume * 0.01;

};

//배경음 우측 버튼
Menu.prototype.roomBackgroundRight = function(){
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	mBackgroundVolume += 10;
	
	if(mBackgroundVolume > 100)
		mBackgroundVolume = 100;
	
	if(mBackgroundMute === true){
		mBackgroundMute = false;
		this.fMuteCheckBGM.visible = mBackgroundMute;
		
		this.playBGM();
	}
	
	mSaveBackgroundVolume = mBackgroundVolume;
	this.roomBackgroundDraw();
	
	audio.volume = mBackgroundVolume * 0.01;

};

//효과음 좌측 버튼
Menu.prototype.roomEffectLeft = function(){
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	mEffectVolume -= 10;
	
	if(mEffectVolume <= 0){
		mEffectVolume = 0;
	}
	
	if(mEffectMute === true){
		mEffectMute = false;
		this.fMuteCheckES.visible = mEffectMute;
	}
	
	mSaveEffectVolume = mEffectVolume;
	this.roomEffectDraw();
};

//효과음 우측 버튼
Menu.prototype.roomEffectRight = function(){
	mEffectVolume += 10;
	
	if(mEffectVolume > 100){
		mEffectVolume = 100;
	}
	
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	
	if(mEffectMute === true){
		mEffectMute = false;
		this.fMuteCheckES.visible = mEffectMute;
	}
	
	mSaveEffectVolume = mEffectVolume;
	this.roomEffectDraw();
};

//배경음 포인트 이미지 x 좌표값 처리 
Menu.prototype.roomBackgroundDraw = function(){
	this.fBtnSetBGMPointer.x = 305 + (17 * (mBackgroundVolume / 10));
};

//효과음 포인트 이미지 x 좌표값 처리
Menu.prototype.roomEffectDraw = function(){
	this.fBtnSetESPointer.x = 305 + (17 * (mEffectVolume / 10));
};
// ===== End Volume Popup ====================================================

Menu.prototype.infoPopup = function (index) {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	
	selectStage = (gCurrentPage * 5) + index;	// index : 0 ~ 4
	
	this.StageSelectScene.ignoreChildInput = true;

	for(var i=0; i<5; i++) {
		this._btnClearStage[i].ignoreChildInputEx();
		this._btnNextStage[i].ignoreChildInputEx();
	}
	
	var _starCount = 0;
	var _highScore = 0;
	console.log(JSON.stringify(gLoadStageClearData));
	if (gLoadStageClearData[1].length !== selectStage) {		
		if(gLoadStageClearData[1][selectStage] === null){
			this._starCount = 0;
			this._highScore = 0;
		}else{
			_starCount = gLoadStageClearData[1][selectStage].star;
			_highScore = parseInt( gLoadStageClearData[1][selectStage].score );
		}		
	}	
	
	if (index === 4) {
		if (_starCount > 0) {
			this.StageInfoMission.children[10].visible = true;
		}
		else {
			this.StageInfoMission.children[10].visible = false;
		}
		
		this.StageInfoMission.children[9].setText((selectStage+1));

		this.StageInfoMission.children[6].setText(_highScore+"점", true);
		this.StageInfoMission.children[6].anchor.x = 0.5;
		
		var missionTextIdx = parseInt((selectStage+1)/5)-1;
		this.StageInfoMission.children[4].setText(MISSION_INFO[missionTextIdx], true);
		this.StageInfoMission.children[4].anchor.x = 0.5;
		
		this.StageInfoMission.visible = true;

	}
	else {
		this.StageInfoSmall.children[8].visible = false;
		this.StageInfoSmall.children[9].visible = false;
		this.StageInfoSmall.children[10].visible = false;

		switch (_starCount) {
		case 3:
			this.StageInfoSmall.children[10].visible = true;
		case 2:
			this.StageInfoSmall.children[8].visible = true;
		case 1:
			this.StageInfoSmall.children[9].visible = true;
			break;
		}
		
		this.StageInfoSmall.children[7].setText((selectStage+1));

		this.StageInfoSmall.children[4].setText(_highScore+"점", true);
		this.StageInfoSmall.children[4].anchor.x = 0.5;
		
		
		this.StageInfoSmall.visible = true;
	}

};


Menu.prototype.btnPosChange = function () {

	for(var i=0; i<5; i++) {
		this._btnClearStage[i].hide();
		this._btnNextStage[i].hide();
	}
	
	for(var i=0; i<5; i++) {
		var btnPos = this._btnClearStagePos[gCurrentPage][i];
		this._btnClearStage[i].changeBtnPos(btnPos.x, btnPos.y);

		var btnPos2 = this._btnNextStagePos[gCurrentPage][i];
		this._btnNextStage[i].changeBtnPos(btnPos2.x, btnPos2.y);
	
	}
	
	this._themeName.loadTexture('StageThemaTitle'+(gCurrentPage+1), 0, false);

	
};

Menu.prototype.exitStageInfo = function () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	
	this.StageSelectScene.ignoreChildInput = false;

	for(var i=0; i<5; i++) {
		this._btnClearStage[i].knowChildInputEx();
		this._btnNextStage[i].knowChildInputEx();
	}
	
	var checkStage = selectStage%5;
	if (checkStage === 4) {
		this.StageInfoMission.visible = false;
	}
	else {
		this.StageInfoSmall.visible = false;
	}

};


//로컬 치트(서버 연동시 변경 필요.)
Menu.prototype.cheating = function () {
	for (var i=1; i<=50; i++) {
		var saveStageClearData = {
			stage : i,
			star : 1,
			score : 1000,
		};
		
		var jsonData = JSON.stringify(saveStageClearData);
		
		sessionStorage.setItem("SAVE_DATA_"+i, jsonData);
		sessionStorage.setItem("LAST_STAGE", i+1);

		sessionStorage.setItem("NEXT_STAGE", i);
		sessionStorage.setItem("PLAY_STAGE", i+1);
		
	}
	
	// 로컬 데이터 로딩
	this.sessionStorageLoad();
	nextStage = sessionStorage.getItem("NEXT_STAGE");

	// 치트 데이터 반영(갱신)
	this.btnPosChange();

};

Menu.prototype.openTenStage = function () {
	console.log("openTenStage!!!!!!!!!!!");
	for (var i=1; i<=10; i++) {
		var saveStageClearData = {
			stage : i,
			star : 0,
			score : 0,
		};
		
		var jsonData = JSON.stringify(saveStageClearData);
		
		sessionStorage.setItem("SAVE_DATA_"+i, jsonData);
		sessionStorage.setItem("LAST_STAGE", i+1);

		sessionStorage.setItem("NEXT_STAGE", i);
		sessionStorage.setItem("PLAY_STAGE", i+1);
		
	}
	
	// 로컬 데이터 로딩
	this.sessionStorageLoad();
  nextStage = sessionStorage.getItem("NEXT_STAGE");
  
  // NTAJA-1272 두더지 게임 처음 접속하면 1판이 아닌 11판이 보임
  // 1판부터 보이도록 currentPage 초기화
  gCurrentPage = 0;
  
  // 배경 on/off
  this._theme[0].visible = true;
  this._theme[1].visible = false;
  this._theme[2].visible = false;
  /////////////////////////////////////////////

	// 치트 데이터 반영(갱신)
	this.btnPosChange();
};



var gLoadStageClearData = [];

Menu.prototype.sessionStorageLoad = function () {
	
	gStageIDX = sessionStorage.getItem("LAST_STAGE");
	console.log(gStageIDX);
	if (gStageIDX != 0)
		this._btnNextStage[0].hide();
	
	gLoadStageClearData = new Array();
	gLoadStageClearDataNoSession = new Array();
	
	for (var i=1; i<=50; i++) {
		var _json = sessionStorage.getItem("SAVE_DATA_"+i);
		
		if (_json !== null) {
//			gLoadStageClearData.push( JSON.parse(_json) );
			gLoadStageClearDataNoSession.push( JSON.parse(_json) );
		}
		else {
      nextStage = i-1;
			break;
		}
	}
	gLoadStageClearData.push({"result" : 0});
	gLoadStageClearData.push(gLoadStageClearDataNoSession);
	
	if (gOldPage == -1) {
		gCurrentPage = parseInt(nextStage/5);
	}
	else {
		// 19.04.09 modify
		if (nextStage > gCurrentStage) {
			gCurrentPage = gOldPage;
		}
		else {
			gCurrentPage = parseInt(gCurrentStage/5);
		}
	}
	if (gCurrentPage >= 10) gCurrentPage = 9;
	
	if (gCurrentPage > 0 && gCurrentPage < 10) {
		this._theme[gCurrentPage].visible = true;
		this._theme[gCurrentPage-1].visible = false;
	}
	
	this.btnPosChange();
};




//서버 연동.
//190221 - 서버에서 게임 클리어 정보 받아오기로 수정.(Menu.js에서 처리)
Menu.prototype.testServerLoad = function () {
	that = this;

	var reqStageClearData = {
			uuid : gUUID,
			nick_name : gNickName
		};	
	
	// Make sure to stringify
	var jsonData = JSON.stringify(reqStageClearData);

	var http = new XMLHttpRequest();
	http.open('POST', gURL + 'game/mole/info');
	http.setRequestHeader('Content-type', 'application/json');

	http.send(jsonData);


	http.onreadystatechange = function() {
	  	if ( http.readyState == 4 ) {
	  		if (http.status == 200) {
	  			gLoadStageClearData = new Array();
	  			
	  			var _json = http.responseText;
//	  			console.log(_json);
	  			gLoadStageClearData = JSON.parse(_json);
	  			
	  			if(gLoadStageClearData[0].result === 0){
	  				console.log("첫플레이어!!!!");
	  			}else{
//		  			console.log("gLoadStageClearData :::: " + JSON.stringify(gLoadStageClearData));
					gStageIDX = gLoadStageClearData[1].length;
//					console.log("gLoadStageClearData[1][1].star :::: "+ gLoadStageClearData[1][0].star);
//					console.log("gLoadStageClearData[0] :::: "+ gLoadStageClearData[0]);
//					console.log("gLoadStageClearData[1] :::: "+ JSON.stringify(gLoadStageClearData[1]));
					nextStage = gLoadStageClearData[1].length;
//					console.log("nextStage :::: "+ nextStage);	
//					console.log("gOldPage :::: "+ gOldPage);
					if (gOldPage == -1) {
						gCurrentPage = parseInt(nextStage/5);
//						console.log("gCurrentPage :::: "+ gCurrentPage);	
					}
					else {
						// 19.04.09 modify
						if (nextStage > gCurrentStage) {
							gCurrentPage = gOldPage;
//							console.log("nextStage가  gCurrentPage 보다 큽니다!!!!!");	
//							console.log("gCurrentPage = gOldPage  ::: " + gCurrentPage);	
						}
						else {
							gCurrentPage = parseInt(gCurrentStage/5);
//							console.log("gCurrentPage = parseInt(gCurrentStage/5) ::: " + parseInt(gCurrentStage/5));	
						}
					}
					if (gCurrentPage >= 10) gCurrentPage = 9;
						
					if (gCurrentPage > 0 && gCurrentPage < 10) {
						that._theme[gCurrentPage].visible = true;
						that._theme[gCurrentPage-1].visible = false;
					}
					that.btnPosChange();
	  			}
	  		}
	  		else {
	  			console.log("Menu - http.status : " + http.status);
	  		}
	  	}
	};
  
};


// 190304 : 의견 보내기 추가(한컴 요구)
function Opinion () {
	if (mEffectMute == false) {
		esMenuClick.volume = mEffectVolume * 0.01;
		esMenuClick.play();
	}
	window.open("https://goo.gl/forms/3CjpoXrh065djw1C2", "_blank");
	
//	this.cheating();
}

var audio;
Menu.prototype.setBGM = function (aAudioName, volume, aIsLoop){   
	   
	   var audioName = (aAudioName === undefined) ? null : aAudioName;
	   var isLoop = aIsLoop === undefined ? false : aIsLoop;
	   
	   if (audioName === null) return;
	   
	   audio = this.game.add.audio(audioName);
	   audio.volume = volume;
	   audio.loop = isLoop;
	   
};

Menu.prototype.playBGM = function (){
	audio.play();
};

Menu.prototype.stopBGM = function (){
	audio.stop();
};


