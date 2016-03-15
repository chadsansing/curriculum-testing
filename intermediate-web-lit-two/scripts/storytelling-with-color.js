//This function pulls a random color from the array below
//to fill the background of the webpage.

function changeColor() {
	
	//This variable holds the array - or set - of possible colors
	//for the webpage's background.
	
	//You can edit the color values using a webpage like 
	//http://www.w3schools.com/colors/colors_picker.asp
	
	//The color values use rgb values between 0 and 255
	//with the first number being the red value,
	//the second being the green value
	//and the third being the blue value.
	//Mix, match, and see what colors you can find!
	
	var spectrum = [
		
		"(255,0 ,0)", //red
		"(255, 153, 0)", //orange
		"(255, 255, 0)", //yellow
		"(0, 255, 0)", //green
		"(0, 0, 255)", //blue
		"(0, 0, 102)", //indigo
		"(102, 0, 102)" //violet
		
	];
	
	//This variable picks one of those possible color values
	//from the spectrum variable.
	
	var colorPicker = spectrum[Math.round(Math.random()*(spectrum.length-1))];
	
	//This part of the code returns the random color to the webpage
	//using the value of the colorPicker variable.
	//These instructions push a new stylesheet
	//into the webpage that changes the background color
	//and makes the title and license more visible.
	
	//With help from 
	//http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
	
	var css = "body { background-color: rgb" + colorPicker + " ; } h1 { color: white; } h2 { color: white; } .license { color: white; } .license a { color: white; }",
	head = document.head,
	style = document.createElement("style");
	
	style.type = "text/css";
	if (style.styleSheet){
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}
	
	head.appendChild(style);
	
}

//Can you think of how to rewrite that function
//to generate random r, g, and b values between 0 and 255
//each time the button on the webpage is clicked?