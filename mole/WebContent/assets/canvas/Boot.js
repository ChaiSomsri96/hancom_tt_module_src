
// -- user code here --

/* --- start generated code --- */

// Generated by Phaser Editor 1.4.3 (Phaser v2.6.2)


/**
 * Boot.
 */
function Boot() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Boot_proto = Object.create(Phaser.State.prototype);
Boot.prototype = Boot_proto;
Boot.prototype.constructor = Boot;

Boot.prototype.init = function () {
	
//	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
////	this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
//	this.scale.pageAlignHorizontally = true;
//	this.scale.pageAlignVertically = false;
	
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
};

Boot.prototype.preload = function () {
	
	this.game.load.image('Title', 'assets/images/LoadingBackImg.png');
	this.game.load.image('GamesRated', 'assets/images/GamesRated.png');
	
	this.load.pack('boot', 'assets/pack.json');
	
	this.game.stage.disableVisibilityChange = true;
};

Boot.prototype.create = function () {
	
	var _title = this.game.add.sprite(360.0, 400.0, 'Title');
	_title.anchor.x = 0.5;
	_title.anchor.y = 0.5;
	
	var _rated = this.game.add.sprite(0.0, 0.0, 'GamesRated');
	
	getSessionID();
		
	// all the assets used in the splash are loaded
	// so jump to the Preloader state
	this.game.state.start("Preloader");
	
	
};

/* --- end generated code --- */
// -- user code here --

var GAME_ID = 10002;

var gSessionId = "";
var gUserInfo;

var gUUID = 0;
var gNickName = "";
var gCharType = 0;
var query = new Array();
var gOldPage = -1;

function getQuery(needle)
{
	if (needle === undefined || needle === null) {
        return null;
    }

    var
        items = {},
        queries = {};

    if (window.location.search) {
        items = window.location.search.substr(1).split('&');
    }

    for (var key in items) {
        var fragments = items[key].split('=');
        queries[fragments[0]] = fragments[1];
    }

    if (queries[needle]) {
        return queries[needle];
    }

    return null;
}

// get session_id or guest_id
function getSessionID(){
   
	var sessionID = getCookie('session_id');
	
	if (sessionID != "") {		
		console.log("로그인 유저!");
		gSessionId = sessionID;
		requestUserInfo();
	}
	else {
		console.log("게스트 유저!");
		
		sessionID = getCookie('guest_id');
		
		// local test code
		sessionID = "Guest_3X2geR";

		if (sessionID != "") {
			gUserInfo = { 
					result : 0	// success
			};			
			gUUID = sessionID;
			gNickName = sessionID;
			gCharType = 0;
		}
	}
   
	if (sessionID == "") {
		
		gUserInfo = { 
			result : -1	// error
		};
	}
	   
}


var gUserInfo;

// 유저 정보 요청.
function requestUserInfo() {
  	that = this;

	var reqSessionId = {
			session_id : gSessionId
		};

	// Make sure to stringify
  	var jsonData = JSON.stringify(reqSessionId);
  	
  	var http = new XMLHttpRequest();
    http.open('POST', gURL + 'game/request_userinfo2');
    http.setRequestHeader('Content-type', 'application/json');

    http.send(jsonData);

    http.onreadystatechange = function() {
    	if ( http.readyState == 4 ) {	// 서버로부터 모든 데이터 로딩
    		if (http.status == 200) {	// 정상 처리
    			console.log("Boot - response : ui load Complete!");
    			
    			var _json = http.responseText;
    			
    			gUserInfo = JSON.parse(_json);
    			
    			if (gUserInfo.result == 0) {
    				gUUID = gUserInfo.uuid;
    				gNickName = gUserInfo.nick_name;
    				gCharType = gUserInfo.character_type;
    			}
    			else {
    				// error
    				console.log("Boot - res error : " + gUserInfo.result);
    			}
    		}
    		else {
    			console.log("Boot - http.status : " + http.status);
    		}
    	}
    }
    
}

// 쿠키 가져오는 함수
// getCookie('session_id') 로 session_id 가져오면 됩니다
// 게스트는 getCookie('guest_id')로 가져오면 됩니다
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

