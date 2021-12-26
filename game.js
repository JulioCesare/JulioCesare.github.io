var start = 0
var fase = 0
var total_points = 1
var hehgarancy = 0;
//Per la fase 0
let nameOriginal = ['EMAU', 'ASON', 'NENA', 'ALUE', 'NASU']
let names = ['EMAU', 'ASON', 'NENA', 'ALUE', 'NASU']
let namesCounter = ['EMAU', 'ASON', 'NENA', 'ALUE', 'NASU']
var name = 0
var nameC = 0
var lastname = "";
//Per la fase 1
var catNum = 0;
var catName = "";
//Per la fase 2
var cardPicker = 0;
var lastcard = 0;

card.addEventListener("click", checkContinue);

function checkContinue(){
	document.getElementById("turns").innerHTML = "T "+total_points;
	if (names.length == 0)
	{
		names = Array.from(nameOriginal);
	}
	if (namesCounter.length == 0){
		namesCounter = Array.from(nameOriginal);
	}
	if  (start == 0)
	{
		fase = 0
		start = 1
		document.getElementById("prompt").style.visibility = "visible";
	}
	switch (fase){
		case 0:
			name = Math.floor(Math.random() * (names.length));
			document.getElementById("prompt").innerHTML = names[name] + " TIME";
			document.getElementById("card").src = "cards/char/" + names[name] + "char.png";
			lastname = names[name]
			names.splice(name,1);
			fase++;
			break;
		case 1:
			catNum = Math.floor((Math.random() * 101));
			console.log(catNum);
			if (catNum >= 0 && catNum <= 5){
				catNum = 2;
				catName = "URCards";
				cardPicker = Math.floor((Math.random() * 125) + 1);
				while (cardPicker == lastcard){
					cardPicker = Math.floor((Math.random() * 125) + 1);
				}
			}
			else if (catNum > 5 && catNum <= 80){
				catNum = 0;
				catName = "SfideCards";
				cardPicker = Math.floor((Math.random() * 25) + 1);
				while (cardPicker == lastcard){
					cardPicker = Math.floor((Math.random() * 25) + 1);
				}
			}
			else if (catNum > 80 && catNum <= 100){
				catNum = 1;
				catName = "EventCards";
				cardPicker = Math.floor((Math.random() * 5) + 1);
				while (cardPicker == lastcard){
					cardPicker = Math.floor((Math.random() * 5) + 1);
				}
			}
			document.getElementById("card").src = "cards/categ/" + catNum + "event.png";
			lastcard = cardPicker;
			fase++;
			break;
		case 2:
			document.getElementById("card").src = "cards/prompt/" + catName + "/" + cardPicker + ".png";
			fase++;
			break;
		case 3:
			document.getElementById("card").src = "cards/char/versus/picker.gif";
			fase++;
			break;
		case 4:
			nameC = Math.floor(Math.random() * (namesCounter.length));
			while(namesCounter[nameC] == lastname){
				nameC = Math.floor(Math.random() * (namesCounter.length));
				if (namesCounter[nameC] == lastname && namesCounter.length == 1){
					hehgarancy = 1;
					break;
				}
			}
			if (catNum == 0){
				
				if (!hehgarancy){	
					document.getElementById("card").src = "cards/char/versus/" + namesCounter[nameC] + "char.png";
					namesCounter.splice(nameC,1);
				}
				else{
					document.getElementById("card").src = "cards/char/versus/push-ups.png";
					hehgarancy=0;
				}
			}
			else{
				document.getElementById("card").src = "cards/char/versus/EVERYBODYchar.png";
			}
			lastname = ""
			fase++;
			break;
		case 5:
			document.getElementById("card").src = "cards/char/spins/spin.gif";
			fase++;
			break;
		case 6:
			var spins = 0;
			spins = Math.floor(Math.random() * 3) + 1;
			document.getElementById("card").src = "cards/char/spins/spin" + spins + ".png";
			fase = 0;
			total_points++;
			break;
		}
}