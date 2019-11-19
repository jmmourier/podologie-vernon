//var modalVar = document.getElementById('myModal');
var modalVar = document.getElementsByClassName("modalA")[0];

// Get the button that opens the modal
//var trigger = document.getElementById("myBtn");
var trigger = document.getElementsByClassName("trigger")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeA")[0];

//alert(trigger[0]+trigger[1]);

// When the user clicks the button, open the modal 
trigger.onclick = function() {
    //modalVar.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalVar.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalVar) {
        modalVar.style.display = "none";
    }
}

/*
var generalTrigger = document.getElementsByClassName("trigger");
var generalModal = document.getElementsByClassName("modalA");

for (var i = 0; i < generalTrigger.length; i++) {
	var a = i;
	generalTrigger[a].onclick = function() {
    generalModal[a].style.display = "block";
    alert(a);
}
}*/