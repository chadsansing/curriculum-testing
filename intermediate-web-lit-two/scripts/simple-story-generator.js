function storyTime() {
	
	var lead = ["Once upon a time", "When the clock struck midnight", "When I was a little kid"];
	var who = ["my dog", "my best friend", "my worst enemy"];
	var didWhat = ["barked", "baked a pie", "stole an ancient artifact"];
	var forAReason = ["for me", "for old time's sake", "for an hour"];
	var andThen = ["time stood still.", "the bell rang for class.", "I woke up on the moon."];
	
	myLead = lead[Math.round(Math.random()*(lead.length-1))];
	myWho = who[Math.round(Math.random()*(who.length-1))];
	myDidWhat = didWhat[Math.round(Math.random()*(didWhat.length-1))];
	myForAReason = forAReason[Math.round(Math.random()*(forAReason.length-1))];
	myAndThen = andThen[Math.round(Math.random()*(andThen.length-1))];
	
	document.getElementById("story-space").innerHTML = "<div>" + myLead + ", " + myWho+ " " + myDidWhat + " " + myForAReason + ", and then " + myAndThen + "</div>"
	
}