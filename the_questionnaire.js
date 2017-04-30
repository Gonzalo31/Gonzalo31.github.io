
function checkPoints() {
	var totalPoints = 0;
	// checks if answer is right and adds one to total points
	if (document.getElementById("right.1").checked) {
	totalPoints = totalPoints + 1;
}	if (document.getElementById("right.2").checked) {
	totalPoints = totalPoints + 1;
}	if (document.getElementById("right.3").checked) {
	totalPoints = totalPoints + 1;
}	if (document.getElementById("right.4").checked) {
	totalPoints = totalPoints + 1;
}	if (document.getElementById("right.5").checked) {
	totalPoints = totalPoints + 1;
}	if (document.getElementById("right.6").checked) {
	totalPoints = totalPoints + 1;
}	if (document.getElementById("right.7").checked) {
	totalPoints = totalPoints + 1;
}	if (document.getElementById("right.8").checked) {
	totalPoints = totalPoints + 1;
}
	// shows the total points
	if (totalPoints === 1) {
		document.getElementById("display").innerHTML = "You got " + totalPoints + " point!";
	} else if (totalPoints === 0) {
		document.getElementById("display").innerHTML = "You didn't get any answer right!";
	} else if (totalPoints === 8) {
		document.getElementById("display").innerHTML = "You got everything right!";
	} else {
		document.getElementById("display").innerHTML = "You got " + totalPoints + " points!";
	}
}
