//create map
const map = L.map("mapid").setView([-23.5525197, -46.6385383], 15);

//Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add campo de fotos

function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // verificar se o campo está vazio, se sim não adicionar ao container de imagens
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  // limpar o campo antes de adicionar ao container de imagens
  input.value = "";
  // adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo
  span.parentNode.remove();
}

// selecionar sim ou nao
function toggleSelect(event) {
  //retirar a classe active dos botões
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  //colocar a class active no botão clicado

  const button = event.currentTarget;
  button.classList.add("active");

  // pegar o botão clicado

  const input = document.querySelector('[name="open_on_weekends"]');

  //verificar se é sim ou não

  input.value = button.dataset.value;

  // atualizar o input hidden com o vaor selecionado
}
/*
  function validate(event){
    const needsLatAndLng = true
      if(needsLatAndLng){
      event.preventDefaut()
      alert('Selecione um ponto no Mapa')
  }
}
*/