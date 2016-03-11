function EditThisAlert() {
	alert("Change this message!");
}

function WhatsGood() {
	
	var name = document.getElementById('userName').value;

	alert("Hey, " + name + ", what's good? Change this message, too");
}

function MadLib() {
	
	var firstAdj = document.getElementById('adjectiveOne').value;
	var secondAdj = document.getElementById('adjectiveTwo').value;
	var firstNoun = document.getElementById('nounOne').value;
	var secondNoun = document.getElementById('nounTwo').value;
	var firstVerb = document.getElementById('verbOne').value;
	var secondVerb = document.getElementById('verbTwo').value;
	
	alert("Once there was a " + firstAdj + " " + firstNoun + " that " + firstVerb + " and " + secondVerb + " the " + secondAdj + " " + secondNoun + ". Now change this story, too!")
	
}

function SquareRoot(){
	
	var result = Math.sqrt(document.getElementById("boxTen").value);
	document.getElementById("squareRoot").innerHTML = "<div class='answer'>" + result + "</div>"
	
}