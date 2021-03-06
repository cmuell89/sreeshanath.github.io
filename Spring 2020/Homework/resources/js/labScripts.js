$(document).ready(function(){

   $('.collapseAll').click(function(){
	   $('.collapse')
		.collapse('hide');
	});
	$('.expandAll').click(function(){
	$('.collapse')
		.collapse('show');
	});
});

function loadPage(){
		var timeList = document.getElementsByClassName("time");
		var totalTime = 0;
		for (var i=0; i < timeList.length; i++){
			totalTime += parseInt(timeList[i].innerHTML);
		}
		document.getElementById("eta").innerHTML = totalTime;

	}

function updateProgressBar(stepCompleted){
	var currentColor = getComputedStyle(document.querySelector("#step" + stepCompleted)).backgroundColor;
	console.log(currentColor);
	if(currentColor.includes("rgb(255, 255, 255)")){
		//Check the step as completed
		document.getElementById("step" + stepCompleted).style.backgroundColor="dimgray";
		document.getElementById("step" + stepCompleted).style.color="white";

		var currentTime = document.getElementById("eta").innerHTML;
		currentTime -= document.getElementById("time" + stepCompleted).innerHTML;
		//document.getElementById("eta").innerHTML = currentTime;
	}
	else{
		//Uncheck the step as still in progress

		document.getElementById("step" + stepCompleted).style.backgroundColor="white";
		document.getElementById("step" + stepCompleted).style.color="black";

		var currentTime = parseInt(document.getElementById("eta").innerHTML);
		currentTime += parseInt(document.getElementById("time" + stepCompleted).innerHTML);
		document.getElementById("eta").innerHTML = currentTime;
	}
}

function isChecked(num){
  if (document.getElementById("check" + num).checked){
    document.getElementById("row" + num).style.backgroundColor = "gray";
  }
  else{
    document.getElementById("row" + num).style.backgroundColor = "white";
  }
}

function showHideVisionSample(){
  console.log(document.getElementById("visionSample").style.display);
  if(document.getElementById("visionSample").style.display == "none"){
    document.getElementById("hidetext").innerHTML = "Hide sample visions.";
    document.getElementById("visionSample").style.display = "block";
  }
  else{
    document.getElementById("visionSample").style.display = "none";
    document.getElementById("hidetext").innerHTML = "Show sample visions.";
  }
}
