//With help from http://stackoverflow.com/questions/6764961/change-an-image-with-onclick

//Image credits
// https://commons.wikimedia.org/wiki/File:Fallen-ice_cream-cone.JPG CC-BY 3.0 by Tamorlan
// https://c1.staticflickr.com/9/8474/8134913912_4d725875a6_n.jpg CC-BY 2.0 by apasciuto
// http://reactiongifs.me/wp-content/uploads/2013/08/office-dwight-mad.gifby from http://reactiongifs.me/

function pictureBook() {
	
	//Switch from the first picture to the second one.
	
    if (document.getElementById("my-picture").src == "https://c1.staticflickr.com/9/8474/8134913912_4d725875a6_n.jpg") 
           {
               document.getElementById("my-picture").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Fallen-ice_cream-cone.JPG/320px-Fallen-ice_cream-cone.JPG";
           }
		   
	//Switch from the second picture to the third one.
		   	   
		   else if (document.getElementById("my-picture").src == "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Fallen-ice_cream-cone.JPG/320px-Fallen-ice_cream-cone.JPG") 
           {
               document.getElementById("my-picture").src = "http://reactiongifs.me/wp-content/uploads/2013/08/office-dwight-mad.gif";
           }
		   
	//Switch back to the first picture.
		   
		   else
        {
            document.getElementById("my-picture").src = "https://c1.staticflickr.com/9/8474/8134913912_4d725875a6_n.jpg";
        }
			
}