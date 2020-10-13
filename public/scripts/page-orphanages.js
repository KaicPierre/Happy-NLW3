const map = L.map('mapid').setView([-23.5525197,-46.6385383],15);

//Create and add tileLayer

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

).addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//Creat popup overlay

const popup = L.popup({
    closeButton: false,
    calssName: "map-popup",
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class=""choose-orphanage><img src="./public/images/arrow-white.svg"></a>')

//Createand add Marker
L
.marker([-23.5525197,-46.6385383], { icon })
.addTo(map)
.bindPopup(popup)
