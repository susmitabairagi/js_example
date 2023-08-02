//text-change 
function textChange(){
    document.getElementById('h2').innerHTML="Hello there!";
}
//show date
function showDate(){
	document.getElementById('dh2').innerHTML=Date();
}
//variable repeat
function dataRepeat(){
	var message = "Welcome to SS";
	document.getElementById('dr').innerHTML=message.repeat(3);
}
//on/off
function bulbOn(){
	document.getElementById('bulb').src='images/pic_bulbon.gif';
}

function bulbOff(){
	document.getElementById('bulb').src='images/pic_bulboff.gif';

}
//fontsize
function fontSize(){
	document.getElementById('fs').style.fontSize="50px";
}
//show/hide
function textShow(){
	document.getElementById('tsh').style.display="block";

}
function textHide(){
	document.getElementById('tsh').style.display="none";
}
function valueAdd(){
	document.getElementById('va').innerHTML=5+6;
}