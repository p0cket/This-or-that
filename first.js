var polls = [];
var curPoll = 0;
var thisPoints = 0;
var thatPoints = 0;
var testVariableThis = "";
var testVariableThat = "";

var answers = [];

// Polls.023923
// function Polls(thisImage, thisName, thatImage, thatName){
	// this.thisImage = thisImage;
	// this.thisName = thisName;
	// this.thatImage = thatImage;
	// this.thatName = thatName;
// }

polls[0] = {
	thisImage: "http://i.imgur.com/8Olvbjv.jpg",
	thisName: "Kourtney Kardashian",
	thisReasons: [],
	thatImage: "http://i.imgur.com/1OcMhWV.jpg",
	thatName: "A Rotting Pineapple",
	thatReasons: []
}

polls[1] = {
	thisImage: "http://s.hswstatic.com/gif/ferret.jpg",
	thisName: "Peeking Ferret",
	thisReasons: [],
	thatImage: "http://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000717&imageID=154354704&recipeName=400x400",
	thatName: "Kids",
	thatReasons: []
}

polls[2] = {
	thisImage: "http://www.joomla51.com/demo/0115/images/portfolio-base/image03.jpg",
	thisName: "A hot cup of coffee",
	thisReasons: [],
	thatImage: "http://i.imgur.com/pUwYtvm.jpg",
	thatName: "Night Vision Hawk",
	thatReasons: []
}

function getPost(i) {
	document.getElementById("thisImage").src = polls[i].thisImage;
	tImage = document.getElementById("thisImage").src;
	document.getElementById("thisName").innerHTML = polls[i].thisName;
	tName = document.getElementById("thisName").innerHTML

	document.getElementById("thatImage").src = polls[i].thatImage;
	thImage = document.getElementById("thisImage").src;
	document.getElementById("thatName").innerHTML = polls[i].thatName;
	thName = document.getElementById("thisName").innerHTML
	curPoll++;
}

function showScore(count1, count2) {
	document.getElementById("resultsCount1").textContent = count1;
	document.getElementById("resultsCount2").textContent = count2;
	console.log("you gotted this post");
    $("#thisDialog").dialog("open");
}


function loadThisPost() {
	testVariableThis=document.getElementById("thatReason").value;
	console.log(testVariableThis);
	document.getElementById("ui-id-2").click();
	getPost(curPoll);
}

function loadThatPost() {
	testVariableThat=document.getElementById("thatReason").value;
	console.log(testVariableThat);
	document.getElementById("ui-id-2").click();
	getPost(curPoll);
}

// $( "#thisDialog" ).submit(function( event ) {
//   	getPost(curPoll)
// 	thisPoints++;
// 	alert("this points:" + thisPoints);
// 	event.preventDefault();
// });

// $( "#thatDialog" ).submit(function( event ) {
//   	getPost(curPoll)
// 	thatPoints++;
// 	alert("this points:" + thatPoints);
// 	event.preventDefault();
// });


$('#thisForm').submit(function(event) {
	console.log("yo yo");
});

// $( "#dialog" ).submit(function( event ) {
//   alert( "Handler for .submit() called." );
//   event.preventDefault();
// });

function loadNextThisPost() {
	sendAnswerToServer(tImage, tName, 1);
}

function loadNextThatPost(){
	sendAnswerToServer(tImage, tName, 2);
	
}


$(document).ready(function() {
    $("#thisDialog").dialog({
        autoOpen: false,
    });
    $("#thatDialog").dialog({
        autoOpen: false,
    });
});

window.onload = function() {
	getPost(curPoll);
}


//Node
function sendAnswerToServer(first, second, answer) {
	var first = encodeURIComponent(first);
	var xhr = new XMLHttpRequest();
	xhr.open("GET", '/answer/' + first + "/" + second + "/" + answer, true);
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			// RESPONSE
			var resp = xhr.responseText;
			alert(resp);
			// manipulation of response
			var scores = resp.split(":");
			var chosen = scores[0];
			var firstScore = scores[1];
			var secondScore = scores[2];
			console.log(firstScore);
			console.log(secondScore);

			// code for making popup appear and changing score values in popup
			console.log("CHOSEN :  "+ chosen)
			showScore(firstScore, secondScore);
			



		}
	}
	xhr.send();
}






