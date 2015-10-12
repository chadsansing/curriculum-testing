function likeIt() {
	document.getElementById("buttonHolder").innerHTML = "<div id='buttonHolder'><button style='background-color:yellow;' class='likeButton' alt='A square smiley face button in the kawaii style' onClick='unlikeIt()'/></div>"
}

function unlikeIt() {
	document.getElementById("buttonHolder").innerHTML = "<div id='buttonHolder'><button style='background-color:none;' class='likeButton' alt='A square smiley face button in the kawaii style' onClick='likeIt()'/></div>"
	
}