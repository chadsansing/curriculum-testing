function pickStory() {
  
  var stories = ["Clue", "Sherlock Holmes", "The Big Lebowski", "Scooby Doo", "Harry Potter", "Romeo and Juliet", "Labyrinth", "Ferris Bueller's Day Off", "The Usual Suspects", "Princess Bride", "Little Red Riding Hood", "Hansel and Gretel", "Sixth Sense", "The Man in the High Castle", "Star Wars"];
  
  var story = stories[Math.round(Math.random()*(stories.length-1))];
  this.story = story;
  
  document.getElementById("story-prompt").innerHTML = "<div>" + this.story + "</div>";
}