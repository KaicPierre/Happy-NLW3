const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const map = L.map("mapid", options).setView([-23.5525197, -46.6385383], 15);

//Create and add tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//Createand add Marker
L.marker([-23.5525197, -46.6385383], { icon }).addTo(map);

//image galery

function selectImage(event) {
  const button = event.currentTarget;

  //Remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //Selecionar a Imagem Clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  imageContainer.src = image.src;

  //Adicionar a classe .active para este botão
  button.classList.add("active");
}
