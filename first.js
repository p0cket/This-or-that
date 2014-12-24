var polls = [];
var curPoll = 0;
var thisPoints = 0;
var thatPoints = 0;


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
	thatImage: "http://i.imgur.com/1OcMhWV.jpg",
	thatName: "A Rotting Pineapple"
}

polls[1] = {
	thisImage: "http://s.hswstatic.com/gif/ferret.jpg",
	thisName: "Peeking Ferret",
	thatImage: "http://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000717&imageID=154354704&recipeName=400x400",
	thatName: "Kids"
}

polls[2] = {
	thisImage: "http://www.joomla51.com/demo/0115/images/portfolio-base/image03.jpg",
	thisName: "A hot cup of coffee",
	thatImage: "http://barnalab.stanford.edu/page6/files/stacks_image_442.png",
	thatName: "Night Vision Hawk"
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


$( "#thisDialog" ).submit(function( event ) {
  	getPost(curPoll)
	thisPoints++;
	console.log("this points:" + thisPoints);
});

$( "#thatDialog" ).submit(function( event ) {
  	getPost(curPoll)
	thisPoints++;
	console.log("this points:" + thisPoints);
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




