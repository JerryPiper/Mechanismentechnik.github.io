window.onhashchange = function() { 
    var getLng = document.getElementById('language');
	var e = getLng.options[getLng.selectedIndex].value;

	if(e == 'Englisch'){
		var lng = '_eng';
	}
	else {
		var lng = '';
	}
	
	var url = window.location.href.split('#');
	var src = url[1];
	if(src.includes("Zusatzaufgabe")){
		document.getElementById('exam').src = e + "/" + src + lng + "/" + src + ".html";
	}
	else {
		var year = src.split('');
		var path = e + "/WS1" + year[3] + "/" + src + "_fertig" + lng + "/" + src + ".html";
		document.getElementById('exam').src = e + "/WS1" + year[3] + "/" + src + "_fertig" + lng + "/" + src + ".html";
	}

}

document.getElementById('language').onchange = function() {
	onhashchange();
}
