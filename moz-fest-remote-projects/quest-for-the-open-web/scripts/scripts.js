function fantasyName() {

//alt names

var altNames = ['Tom Trees', 'Casidhe Redwitch', 'Penny', 'Fez', 'Zuldana', 'Bash', 'Munono', 'Quadrus', 'Aeneas', 'Adwask', 'Gerrard', 'Powrang', 'Nanock', 'Rostam', 'Shahrazad', 'Sinbad', 'Jack Sleet', 'Saylor', 'Tauron', 'Luego', 'Marius', 'the Wander', 'the Wonder', 'Alana', 'Marko', 'Tee-ock', 'Rototo', 'Paisoo', 'Atasha', 'Adala', 'Inkle', 'Sheba', 'Angelus', 'Yffub', 'Kerom', 'Aerie', 'Ursula', 'Atreyutex', 'Oisín', 'Halcyon', 'Skully', 'Scylla', 'Karibdiz', 'Thisbe', 'Dallock', 'Dido', 'Zolid', 'Foabbatet', 'Indius', 'Nyota', 'Zeena', 'Cyangeeta', 'Scott of Toronto', 'Blizzard Dare', 'Polluz', "Skycutter", "Medusa", "Ogre Kaminos", 'Curipeera', 'Kaiporaa', 'Atalanta', 'Falkora', 'Mohammed', 'Malaika', 'Imam', 'Noah', 'Madinah', 'Kathoolus', 'Morfeo', 'Belezul', 'Babyaza', 'Raspert', 'Gráinne Mhaol', 'Cú Chulainn', 'Zel-daa', 'Wolpertinger ', 'Wodan', 'Donar', 'Loptr', 'Feldgeist', 'Lindwurm', 'Nachtkrapp', 'Ogrox', 'Zinmal', 'Cromnan', 'Minotia', 'Faedan', 'Neumenthia', 'Droros', 'Aarok', 'Krordan', 'Dortul', 'Broxim', 'Callistria', 'Rorx', 'Aluminel', 'Wellend', 'Eferette', 'Hugor', 'Galandrius', 'Madoria', 'Chromvatox', 'Scintellior', 'Talaria', 'Zori', 'Netemtia', 'Kadrellian', 'Deltia', 'Gorpidion', 'Kursod', 'Morphael', 'Ordo', 'Xetra', 'Ooyerta', 'Roklaf', 'Manik', 'Vocerion', 'Veritia', 'Abrentia', 'Nia', 'Feredel', 'Astrael', 'Aylia', 'Cineria', 'Memna', 'Choria', 'Quarion', 'Grimla', 'Markus Surmanikus', 'Gunneron', 'Codellia', 'Pthorn', 'Nella', 'Wextron', 'Luta', 'Clawgor', 'Abeja', 'Illiga', 'Podro', 'Jandalia', 'Trillior', 'Toboretna', 'Fuzzius von Fox', 'Compa', 'Trebbet', 'Mattox', 'Technia', 'Obert of Cacheego', 'Leandra', 'Linara', 'Cryana', 'Dynamina', "Aarok", "Gormarok", "Jelliper", "Hallix", "Fremedun", "Isladora", "Koren", "Andalaka", "Angelica", "Cryptrix", "Ashana", "Drevel", "Nordan", "Beatrix", "Danser", "Eerek", "Skycutter", "Wutu", "Midora", "Grida", "Relika", "Aurelia", "Jasmon", "Hebrida", "Vaspra", "Simidan", "Alukar", "Vedret", "Lort", "Kalador", "Arakaed", "Munia", "Nur", "Froden", "Gylidria", "Kyre", "Belik", "Drorn"];

var adjectives = ['bold', 'brave', 'daring', 'ardent', 'true', 'ultimate', 'heroic', 'invincible', 'honest', 'industrious', 'wily', 'uncanny', 'crafty', 'genius', 'courageous', 'indomitable', 'indefatigable', 'indestructible', 'unstoppable', 'worthy', 'inspiring', 'quick', 'speedy', 'kind', 'wise', 'sage', 'compassionate', 'rebellious', 'revolutionary', 'smiling', 'feisty', 'tenacious', 'unyielding', 'omnipresent', 'omniscient', 'all-knowing', 'telephonic', 'holographic', 'empathic', 'sensational', 'gutsy'];

var classes = ['coder', 'VP', 'director' , 'manager', 'fellow', 'researcher', 'pirate', 'scholar', 'scientist', 'reporter', 'teacher', 'captain', 'leader', 'programmer', 'artist', 'painter', 'dreamer', 'writer', 'explorer', 'gamer', 'organizer', 'activist', 'liberator', 'designer', 'maker', 'builder', 'guide', 'mentor', 'educator', 'librarian', 'crafter', 'tinkerer', 'sculptor', 'composer', 'dancer', 'elder', 'counsellor', 'puppeteer', 'director', 'associate', 'lead', 'visionary'];

var origins = ['the Open Web', 'repo', 'product', 'comms', 'social media', 'the backchannel', 'participation', 'curriculum', 'Hives', 'console', 'terminal', 'root access', 'sudo', 'Heroku', 'mentorship', 'leadership development', 'advocacy', 'heartbeats', 'redpens', 'wireframes', 'open educational resources', 'youth programming', 'museum education', 'Web-native apps', 'remix', 'mash-up', 'hackery', 'hack jams', 'game development', 'coding for the Web', 'the stack', 'snacks', 'coffee', 'scripting', 'Web styles', 'HTML', 'CSS', 'Web literacy', 'project management', 'debugging', 'localization', 'equity', 'equality', 'diversity', 'inclusion', 'collaboration', 'community', 'contribution ladders', 'the Internet', 'traceroute', 'ping', 'advocacy', 'leadership development', 'privacy', 'security', 'encryption', 'cryptography', 'mapping', 'cartography', 'inception', 'MozFest', 'Thimble', 'reverse image search', 'clubs', 'Firefox OS', 'mobile development', 'open science', 'open journalism', 'open news', 'citizen science', 'citizen journalism', 'Web-native production', 'meta-wrangling', 'space-wrangling', 'pathfinding', 'Ravensbourne', 'London', 'open source', 'transparency', 'make it, eff it, ship it', 'dev sprints', 'caffeine', 'storytelling', 'user experience', 'graphic design', 'Turtle Wushu', 'karaoke', 'the commons', 'open data', 'the distro', 'the fork', 'pull requests', 'merge', 'localization', 'l10n', 'Open'];

var buffs= ["+1", "+2", "+3", "+5"];

var skills = ["memes", "design sketches", "mock-ups", "brainstorms", "kittehs", "doge", "much", "so very", "rainbows", "the Interwebz", "Facegramming the Instatube", "same-same-but-different", "zines", "boardgames", "card games", "flow", "hyper-focus", "secret levels", "blog posts", "lazy consensus", "3D printing", "learning pathways", "Web comics",  "glitchstep", "chiptunes", "level design", "quest writing", "unicorns", "IRC", "Webbertubez", "design", "search", "navigation", "composing", "collaborating", "community practice", "sharing", "Git", "version control", "project management", "credibility", "Open practice", "privacy", "security", "data management", "UI", "UX", "AI"];

//alt names math 
//this.altName = altNames[Math.round(Math.random()*altNames.length)];

this.name = document.getElementById('myName').value;
this.adjective = adjectives[Math.round(Math.random()*(adjectives.length-1))];
this.altName= altNames[Math.round(Math.random()*(altNames.length-1))];
this.class = classes[Math.round(Math.random()*(classes.length-1))];
this.origin = origins[Math.round(Math.random()*(origins.length-1))];
this.buff = buffs[Math.round(Math.random()*(buffs.length-1))];
this.skill = skills[Math.round(Math.random()*(skills.length-1))];

//alt names output
//document.getElementById('myTrueName').innerHTML = "<div>I am "+ this.altName + ", the " + this.adjective + " " + this.class + " of " + this.origin + ".</div>"

document.getElementById('myTrueName').innerHTML = "<div>" + this.name + ", you are now <span style='color:#f08;'>" + this.altName + ", the " + this.adjective + " " + this.class + " of " + this.origin + ".</div>"

document.getElementById('myBuff').innerHTML = "<div>" + this.buff + " to " + this.skill + ".</span></div>"

}

$(document).ready(function(){

        $("#touchMe").click(fantasyName);

      });