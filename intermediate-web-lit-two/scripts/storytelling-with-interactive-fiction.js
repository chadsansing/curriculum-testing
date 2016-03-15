//With help from 

function twoDoors() {
	
	document.getElementById("story-space").innerHTML = "<div><p>Would you rather eat PANCAKES or WAFFLES?</p><pType your answer: <form><input type='text' name='box1' id='box1' oninput='foodRain()'></form></p></div>"
	
}

function foodRain() {
	
	 var myFav = document.getElementById('box1'); 
	 
	 if(myFav.value == 'pancakes') {
	  document.getElementById("story-space").innerHTML = "<div><p>How fortunate. Look outside - it's raining pancakes!</p></div>"
	 }
	 else if (myFav.value == 'waffles') {
	   document.getElementById("story-space").innerHTML = "<div><p>Oh, bummer. I only have a machine to make it rain pancakes.</p></div>"
	 }
	 else {
		 console.log("Waiting....");
	 }
}