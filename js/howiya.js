var audio = [];
audio[0] = document.getElementById('audio0');
audio[1] = document.getElementById('audio1');
audio[2] = document.getElementById('audio2');
audio[3] = document.getElementById('audio3');
var i = 0;

var img = new Array();
img[0] = "images/Head5.png";
img[1] = "images/Head6.png";
img[2] = "images/Head7.png";
img[3] = "images/Head8.png";
img[4] = "images/Head9.png";
img[5] = "images/Head10.png";
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
