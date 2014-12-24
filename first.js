var polls = [];
var curPoll = 0;
var thisPoints = 0;
var thatPoints = 0;
var testVariableThis = "";
var testVariableThat = "";


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
	thatImage: "http://barnalab.stanford.edu/page6/files/stacks_image_442.png",
	thatName: "Night Vision Hawk",
	thatReasons: []
}

function getPost(i) {
	document.getElementById("thisImage").src = polls[i].thisImage;
	document.getElementById("thisName").innerHTML = polls[i].thisName;

	document.getElementById("thatImage").src = polls[i].thatImage;
	document.getElementById("thatName").innerHTML = polls[i].thatName;
	curPoll++;
}

function getThisPost() {
	console.log("you gotted this post");
    $("#thisDialog").dialog("open");
}
function getThatPost() {
	console.log("you gotted that post");
	$("#thatDialog").dialog("open");
}

function loadThisPost() {
	console.log("load this post");
	testVariableThis=document.getElementById("thatReason").value;
}

function loadThatPost() {
	console.log("load that post");
	testVariableThat=document.getElementById("thatReason").value;
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

function loadNextPost() {
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




