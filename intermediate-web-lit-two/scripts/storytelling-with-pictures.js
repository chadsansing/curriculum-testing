//With help from http://stackoverflow.com/questions/6764961/change-an-image-with-onclick

//Image credits
// https://commons.wikimedia.org/wiki/File:Fallen-ice_cream-cone.JPG CC-BY 3.0 by Tamorlan
// https://c1.staticflickr.com/9/8474/8134913912_4d725875a6_n.jpg CC-BY 2.0 by apasciuto
// http://reactiongifs.me/wp-content/uploads/2013/08/office-dwight-mad.gifby from http://reactiongifs.me/

//In this script, the picture changes each time you click the button.
//The "if" and "if else" statements tall the webpage which picture to display next
//based on the picture being displayed right now.

function pictureBook() {
	
	//If the first picture is displayed when the button is clicked, switch to the second one.
	
	if (document.getElementById("my-pictures").src == "https://c1.staticflickr.com/9/8474/8134913912_4d725875a6_n.jpg") 

           {			   
               document.getElementById("my-pictures-2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Fallen-ice_cream-cone.JPG/320px-Fallen-ice_cream-cone.JPG";
			   document.getElementById("my-pictures-2").style.display = "inline";
			   document.getElementById("my-button").innerHTML = "<div><p><button onclick='theEnd()'>Next</button></p></div>";
           }
	   }
		   
function theEnd() {
		   
   //If the second picture is displayed when the button is clicked,, switch to the third one.
		   
   if (document.getElementById("my-pictures-2").src == "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Fallen-ice_cream-cone.JPG/320px-Fallen-ice_cream-cone.JPG") 
           
	   {
           document.getElementById("my-pictures-3").src = "http://reactiongifs.me/wp-content/uploads/2013/08/office-dwight-mad.gif";
		   document.getElementById("my-pictures-3").style.display = "inline";
		   document.getElementById("my-button").innerHTML = "<div><p><button onclick='restartButton()'>Restart</button></p</div>";			   
       }
   }
		   
function restartButton() {
   	
	window.location.reload(true); 
	
	}