//This function replaces the form with a story that uses the words typed into the empty boxes.

function fillBlanks() {
	
	//These variables grab the words from the boxes (or inputs).
	
	var firstWord = document.getElementById('box1').value;
	var secondWord = document.getElementById('box2').value;
	var thirdWord = document.getElementById('box3').value;
	var fourthWord = document.getElementById('box4').value;
	var fifthWord = document.getElementById('box5').value;
	var sixthWord = document.getElementById('box6').value;
	
	//This piece of the code replaces the div on the webpage called "story-space" 
	//with the story below, including the words grabbed by the variables up above.
	//It also addsa rest button to the page.
	
	document.getElementById("story-space").innerHTML = "<div><p>In the early days of the " + firstWord + " people used to " + secondWord + " email by " + thirdWord + ". They would hit the send button and then wait for " + fourthWord + " until the computer said, '" + fifthWord + ", you've got mail!' Back then, there were a lot of spam emails about " + sixthWord + ".</p><p><button onClick='resetPage()'>Reset</button></p></div>"
}

//This function reloads a fresh copy of the page when you click the "reset" button.

function resetPage() {

	window.location.reload(true); 

	$(document).ready(function () {
	    resetForms();
	});

	function resetForms() {
	    document.forms['story'].reset();
	}

}