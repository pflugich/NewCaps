// JavaScript Document
//Set fixed map frame
//zoom to middle of Germany

     var map = L.map('map').setView([51.199635, 10.452953], 6);
			
        mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            minZoom: 6,
			maxZoom: 18,
            }).addTo(map);