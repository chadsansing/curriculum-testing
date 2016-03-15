//This multipart function draws on a lot 
//of what you've already learned 
//plus Object Oriented Programming (OOP)
//to help you create a randomized 
//storytelling generator.

function storyChallenge() {

	//We'll do four things here.
	
	//First, we'll create objects for the story
	//like characters, plot points, and props.
	
	//Then we'll make lots of each type of object.
	
	//Then we'll put the objects into arrays
	//so our storytelling resource can
	//recombine them in random and suprising ways.
	
	//Finally, we'll draw values from our arrays
	//and return a storytelling prompt to the webpage.

	//1. Creating objects. Objects are their own functions.
	//Each object has a certain
	//set of attrbiutes we can define later
	//by making new objects as variables
	//that all use the same blueprint from their
	//parent function.
	
	function Protagonist(firstName, dream) {
		this.firstName = firstName;
		this.dream = dream;
	}
	
	function Antagonist(firstName, motivation) {
		this.firstName = firstName;
		this.motivation = motivation;
	}
	
	function supportingCharacter(firstName, role) {
		this.firstName = firstName;
		this.role = role;
	}
	
	function Conflict(type) {
		this.type = type;
	}
	
	function Setting(time, place) {
		this.time = time;
		this.place = place;
	}
	
	function Genre(trope) {
		this.trope = trope;
	}
	
	
	//2. Making new objects. Now we'll make
	// variabls that are new objects
	//based on the blueprints in our functions.
	//These variables take more specific values.
	
	
	//Protagonists
	var dee = new Protagonist ("Dee", "wants to design a solar-powered spaceship");
	var karla = new Protagonist ("Karla", "wants to start a AAA video game company");
	var mo = new Protagonist ("Mo", "wants to start a news-based social media network");
	var lia = new Protagonist ("Lia", "wants to start a local farming co-op for teens");
	var jazmin = new Protagonist ("Jazmin", "wants to write a novel about a middle school in a fantasy world");
	
	//Antoagonists
	var drew = new Antagonist ("Drew", "wants everyone to follow the rules");
	var khalil = new Antagonist ("Khalil", "wants to start a rival project");
	var tania = new Antagonist ("Tania", "believes everything should be punk");
	var lei = new Antagonist ("Lei", "wants people off social media");
	var jabir = new Antagonist ("Jabir", "questions popular media");
	
	//Supporting characters
	var dorcas = new supportingCharacter ("Dorcas", "bestie");
	var niki = new supportingCharacter ("Niki", "comedian");
	var markes = new supportingCharacter ("Markes", "tech person");
	var tumelo = new supportingCharacter ("Tumelo", "popular kid");
	var leela = new supportingCharacter ("Leela", "wise person");
	
	//Conflicts
	var iVsSelf = new Conflict ("individual vs. self");
	var iVsSociety = new Conflict ("individual vs. society");
	var iVsSupernatural = new Conflict ("individual vs. super-natural");
	var iVsIndividual = new Conflict ("individual vs. individual");
	var iVsTechnology = new Conflict ("individual vs. technology");
	var iVsNature = new Conflict ("individual vs. nature");
	
	//Settings
	var nineties = new Setting ("1997", "middle school");
	var oughties = new Setting ("2004", "high school");
	var eighties = new Setting ("1983", "summer vacation");
	var teens = new Setting ("2015", "tech meet-up");
	var future = new Setting ("2122", "Mars colony");
	
	//Genres
	var sciFi = new Genre ("science-fiction");
	var manga = new Genre ("manga");
	var comedy = new Genre ("comedy");
	var roadTrip= new Genre ("road trip");
	var popMusicVideo = new Genre ("pop music video");
	
	//3. Building arrays. Now we put our objects
	//into arrays we can pull from later
	//in the script.
	
	var protagonists = [dee, karla, mo, lia, jazmin];
	var antagonists = [drew, khalil, tania, lei, jabir];
	var supportingCharacters = [dorcas, niki, markes, tumelo, leela];
	var conflicts = [iVsSelf, iVsSociety, iVsSupernatural, iVsIndividual, iVsTechnology, iVsNature];
	var settings = [nineties, oughties, eighties, teens, future];
	var genres = [sciFi, manga, comedy, roadTrip, popMusicVideo];
	
	//4. Return a prompt. This part of the code
	//will pick and ship values back to the webpage 
	//to make a storytelling prompt.
	//Notice how easy it is to grab values
	//from an object using the object.value method.
	
	var myProtagonist = protagonists[Math.round(Math.random()*(protagonists.length-1))];
	var myAntagonist = antagonists[Math.round(Math.random()*(antagonists.length-1))];
	var mySupportingCharacter = supportingCharacters[Math.round(Math.random()*(supportingCharacters.length-1))];
	var myConflict = conflicts[Math.round(Math.random()*(conflicts.length-1))];
	var mySetting = settings[Math.round(Math.random()*(settings.length-1))];
	var myGenre = genres[Math.round(Math.random()*(genres.length-1))];
	
	document.getElementById("story-space").innerHTML =
	
	"<div><p>In this epic " + myConflict.type + " " + myGenre.trope + " set in a " + mySetting.time + " " + mySetting.place + ", " + myProtagonist.firstName + ", who " + myProtagonist.dream + ", has to struggle against " + myAntagonist.firstName + ", who " + myAntagonist.motivation + ".</p> <p>Luckily for " + myProtagonist.firstName + ", they get help from " + mySupportingCharacter.firstName + ", who is a fantasitc " + mySupportingCharacter.role + ".</p></div>"
	
}