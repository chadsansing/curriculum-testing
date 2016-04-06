function twoDoors() {
	
	document.getElementById("story-space").innerHTML = "<div><p>Would you rather eat PANCAKES or WAFFLES?</p><pType your answer: <form><input type='text' name='box1' id='box1' oninput='foodRain()'></form></p></div>"
	
}

function foodRain() {
	
	 var myFav = document.getElementById('box1');
	 
	 if (myFav.value == 'pancakes') {
	  document.getElementById('story-space').innerHTML = "<div><p>How fortunate. Look outside - it's raining pancakes!</p><p>SYRUP or ICE CREAM?</p><p><form><input name='box2' id='box2' type='text' oninput='toppings()'></form></p></div>"
		 
		 console.log("Pancake-rain machine = science.");
	 }
	 else if (myFav.value == 'waffles') {
	   document.getElementById('story-space').innerHTML = "<div><p>Oh, bummer. I only have a machine to make it rain pancakes.</p><p>SYRUP or ICE CREAM?</p><p><form><input name='box2' id='box2' type='text' oninput='toppings()'></form></p></div>"
		 
		 console.log("Boo, waffles.");
	 }
	 
	 else {
		 console.log("Waiting....");
	 }
	 
}

function toppings() {

	var myTopping = document.getElementById('box2');


	if (myTopping.value == 'syrup') {
   	 	document.getElementById('story-space').innerHTML = "<div><p>We are out of syrup. Here, take these pickles.</p><p>GAME OVER.</div>"
 
		console.log("Don't try this at home.");
	 }

	 else if (myTopping.value == 'ice cream') {
	 	document.getElementById('story-space').innerHTML = "<div><p>Is this DESSERT FOR BREAKFAST or BREAKFAST FOR DESSERT?</p><p><form><input name='box3' id='box3' type='text' oninput='newBrunch()'></form></p></div>"
 
		 console.log('Winning.');

	 }

	 else {
		 console.log("Waiting....");
	 }
 }
 
function newBrunch() {
	
	var myNewWord = document.getElementById('box3');
	
	if (myNewWord.value == 'breakfast for dessert') {
   	 	document.getElementById('story-space').innerHTML = "<div><p>Enjoy your bressert. It's the new dunch.</p><p>GAME OVER.</div>"
 
		console.log("Bon appetit.");
	 }

	 else if (myNewWord.value == 'dessert for breakfast') {
	 	document.getElementById('story-space').innerHTML = "<div><p>There's nothing better than a good dreakfast. It's the new linner.</p><p>GAME OVER.</p></div>"
 
		 console.log('Enjoy.');

	 }

	 else {
		 console.log("Waiting....");
	 }
}