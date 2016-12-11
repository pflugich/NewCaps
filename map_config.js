// JavaScript Document

var map = L.map('map', {
            center : [47.264269, 11.385312],
            zoom : 16
        });

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(map);