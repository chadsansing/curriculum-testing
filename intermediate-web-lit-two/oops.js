/*function Oops() {

    function Image (src, style, height, width) {
        this.src = src;
        this.style = style;
		this.height = height;
        this.width = width;
    }

    Image.prototype.display = function() {
        var img = document.createElement('img');
            img.setAttribute("src", this.src);
            img.setAttribute("height", this.height);
            img.setAttribute("width", this.width);
			img.setAttribute("style", this.style);
        document.body.appendChild(img);
    }
	
	var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
	
	var hexValueOne = hexValues[Math.round(Math.random()*(hexValues.length)-1)];
	var hexValueTwo = hexValues[Math.round(Math.random()*(hexValues.length)-1)];
	var hexValueThree = hexValues[Math.round(Math.random()*(hexValues.length)-1)];
	this.zIndex = Math.round(Math.random()*999);
	this.style = "background-color:#" + hexValueOne + hexValueTwo + hexValueThree + ";";
	this.height = Math.round(Math.random()*200 + 100);
	this.width = Math.round(Math.random()*200 + 100);

    var randomSpill = new Image("spill.png", this.style, this.height, this.width);

    randomSpill.display();
}*/