function iniciMapa() {

    //map fa referència a l'element div de la pàgina html
    //a setView indiquem les coordinades [latitud,longitud] i el nivell de zoom 
    var mapa = L.map('mapa').setView([38.986158, -0.535115], 15);

    //afegim una capa amb mosaic d'imatges de mapbox
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
        {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoicnZhbGxzaWVzc2ltYXJybyIsImEiOiJjanY3b2RnY24wNzRsNDNtajV2dDNoOXAwIn0.KA5nnb-3Z8LwDkwo2SxEew'
        }).addTo(mapa);
   
    //afegim un marcador
    var marcador = L.marker([38.986158, -0.535115]).addTo(mapa);

    //afegim un cercle
    /*var cercle = L.circle([38.986158, -0.535115],
        {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(mapa);*/

    //afegim un polígon
	/*var poligon = L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	]).addTo(mapa);*/


    //afegim finestres emergents (popups) als objectes creats
    marcador.bindPopup("<strong>Institut d'Educació Secundària Dr. Lluís Simarro</strong><br/>Marcador Leaflet.").openPopup();
    //cercle.bindPopup("Cercle amb Leaflet.");
    //poligon.bindPopup("Polígon amb Leaflet."); 

    //afegim un popup com a capa

    //var popup = L.popup().setLatLng([51.5, -0.09]).setContent("Finestra emergent com a capa.").openOn(mapa);


    //afegim una reacció a un esdeveniment
    //funció que s'executarà en resposta a l'esdeveniment
	/*function clicEnMapa(e) {
		alert("Has fet clic en el mapa en: " + e.latlng);
	}
	//relacionem el tipus d'esdeveniment amb la funció corresponent
	mapa.on('click', clicEnMapa);*/

    var popup2 = L.popup();
    //funció que s'executarà en resposta a l'esdeveniment
    function clicEnMapa(e) {
        popup2
            .setLatLng(e.latlng)
            .setContent("Has fet clic en: " + e.latlng.toString())
            .openOn(mapa);
    }
    //relacionem el tipus d'esdeveniment amb la funció corresponent

    mapa.on('click', clicEnMapa);
    mapa.addControl(new L.Control.Fullscreen());
    var ggl = new L.Google();
    var ggl2 = new L.Google('TERRAIN');
    var ggl3 = new L.Google('ROADMAP');
    map.addLayer(ggl);
    map.addControl(new L.Control.Layers( {'Google':ggl, 'Google Terrain':ggl2, 'Road':ggl3}, {}));
}

window.addEventListener("load", iniciMapa, false);