// JavaScript Document

//stampa la data odierna
function printDate(){
	var today = new Date();
	var startYear = 1900;
	document.getElementById("data").innerHTML = "Data: " + today.getDate() + "/" + (today.getMonth()+1) + "/" + (today.getYear()+startYear);
}

function onDeviceReady(){
	getLocation();
}
function getLocation(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(printPosition, onError); 
	}
	else{
		document.getElementById("divMap").innerHTML = "Localizzazione non supportata dal browser";	
	}
}
function printPosition(position){
	var latlon = position.coords.latitude+","+position.coords.longitude;
	var map_url="https://maps.google.com/?ie=UTF8&amp;ll="+latlon+"&amp;spn=0.017802,0.042014&amp;t=h&amp;z=15&amp;output=embed";
	document.getElementById("divMap").innerHTML="<iframe id='frameMap' src="+map_url+"></iframe";
}
function onError(error){
	switch(error.code){
		case error.PERMISSION_DENIED:
			document.getElementById("divMap").innerHTML="Permesso negato dall'utente";break;
		case error.POSITION_UNAVAIABLE:
			document.getElementById("divMap").innerHTML="Informazioni sulla localizzazione non disponibili";break;
		case error.TIMEOUT:
			document.getElementById("divMap").innerHTML="La richiesta per la posizione è scaduta";break;
		case error.UNKNOWN_ERROR:
			document.getElementById("divMap").innerHTML="Errore sconosciuto";break;	
	}
}
