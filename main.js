	var start = new Date().getTime();
	//this starts the time


	function getRandomColor() {

    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

	}


	function makeShapeAppear(){

		

		var width = ((Math.random()*300)+100);

		if (Math.random()>0.5) {

			document.getElementById("shape").style.borderRadius= "50%"
		}

		else {

		document.getElementById("shape").style.borderRadius= "0%"

		}

		document.getElementById("shape").style.backgroundColor = getRandomColor();

		document.getElementById("shape").style.top = Math.random()*400 +"px"
		document.getElementById("shape").style.bottom = Math.random()*400 +"px"
		document.getElementById("shape").style.right = Math.random()*400 +"px"
		document.getElementById("shape").style.left = Math.random()*400 +"px"
		document.getElementById("shape").style.width = width + "px"
		document.getElementById("shape").style.height = width + "px"
		document.getElementById("shape").style.display = "block";
		
		
		start = new Date().getTime();
	}


	
	function makeItAppearAgain(){

		setTimeout(makeShapeAppear, Math.random()*1500);
		//basically executes the function again (showing the shape) after a certain random period of time between 1.5 seconds

	}


	makeItAppearAgain();
	//to make the shape appear after some random time

	document.getElementById("shape").onclick = function() {

		document.getElementById("shape").style.display = "none";
		var end = new Date().getTime();
		var timeTaken = (end - start)/1000;
		document.getElementById("timeTaken").innerHTML= timeTaken + "s";
		makeItAppearAgain();
		//after the button is clicked the function is called again to restart and to create a new shape with random time 
		

	}




