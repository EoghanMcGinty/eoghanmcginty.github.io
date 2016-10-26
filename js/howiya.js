var audio = [];
audio[0] = document.getElementById('audio0');
audio[1] = document.getElementById('audio1');
audio[2] = document.getElementById('audio2');
audio[3] = document.getElementById('audio3');
var i = 0;
var width = window.innerWidth;
var height= window.innerHeight;
var headElement = document.getElementById('head');


var img = new Array();
img[0] = "images/Head5.png";
img[1] = "images/Head6.png";
img[2] = "images/Head7.png";
img[3] = "images/Head8.png";
img[4] = "images/Head9.png";
img[5] = "images/Head10.png";
img[6] = "images/Head17.png";
img[7] = "images/Head15.png";
img[8] = "images/Head16.png";
img[9] = "images/Head18.png";
img[10] = "images/Head19.png";
img[11] = "images/Head22.png";
img[12] = "images/Head20.png";
img[13] = "images/Head21.png";

var j = 0;

var clicked = 0;
function mouseClick(Image) {
	Image.src = img[j++];
	if(j==img.length) j = 0;
	audio[i++].play(); // audio will load and then play
	if (i==audio.length) i = 0;
	clicked = 1;
};

function mouseOver(Image){
	if(clicked==0)	Image.src = "images/Head2.png";
	else Image.src = "images/Head14.png";
};

function mouseOut(Image){
	Image.src = "images/Head3.png";
};

function mousePosition(e){
	var positionInfo = headElement.getBoundingClientRect();
	var xPos = e.clientX;
	var yPos = e.clientY;
	if (xPos < positionInfo.left){
		if (yPos < positionInfo.top){
			headElement.src = img[6];
		} else if (yPos < positionInfo.bottom){
			headElement.src = img[9];
		} else if (yPos > positionInfo.bottom){ 
			headElement.src = img[11];
		}
	}
	else if (xPos < positionInfo.right){
		if (yPos < positionInfo.top){
			headElement.src = img[7];
		}
		else if (yPos > positionInfo.bottom){
			headElement.src = img[12];
		}
	}
	if (xPos > positionInfo.right){
		if (yPos < positionInfo.top){
			headElement.src = img[8];
		} else if (yPos < positionInfo.bottom){
			headElement.src = img[10];
		} else if (yPos > positionInfo.bottom) {
			headElement.src = img[13];
		}
	}	
	
}
