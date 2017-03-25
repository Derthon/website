setInterval(function() {
	document.getElementById('timenow').innerHTML = Date()
	document.getElementById("timenow").style.color = "yellow";
	}, 1000);
	which = 1
setInterval(function(){
	var whichBanner = document.getElementById("homeBanner");
	if (which == 1){
		whichBanner.src = "img/Home-Banner.png";
		which = 2;
	}
	else if(which == 2){
		whichBanner.src = "img/Home-Banner2.jpg";
		which = 1;
	}
}, 2000);