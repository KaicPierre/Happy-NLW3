
const map = L.map('mapid').setView([-23.5525197,-46.6385383],15);

//Create and add tileLayer

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

).addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})


function addMarker({id, name, lat, lng}){

    //Creat popup overlay
    const popup = L.popup({
        closeButton: false,
        calssName: "map-popup",
        minWidth: 240,
        minHeight: 240,
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`)
    

    //Createand add Marker
    L
    .marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
    }

    const orphanagesSpan = document.querySelectorAll('.orphanages span')
    orphanagesSpan.forEach( span => {
        const orphanage = {
            id: span.dataset.id,
            name: span.dataset.name,
            lat: span.dataset.lat,
            lng: span.dataset.lng
        }
    
        addMarker(orphanage)
    })