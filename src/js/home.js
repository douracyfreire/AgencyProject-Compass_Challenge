fetch("/data.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector("#container-better-opportunities");

    data.map((opportunity) => {
      const card = document.createElement("div");
      card.classList.add("card-opportunity");

      const img = document.createElement("div");
      img.classList.add("image-opportunity");
      const imageOpportunity = opportunity.image;
      img.style.backgroundImage = `url("${imageOpportunity}")`;

      const price = document.createElement("h3");
      price.textContent = opportunity.price;

      const size = document.createElement("p");
      const area = document.createElement("span");
      area.textContent = opportunity.size;
      size.appendChild(area);
      const textMeasure = document.createTextNode(" m²");
      size.appendChild(textMeasure);

      const listRooms = document.createElement("ul");
      listRooms.classList.add("tags-rooms");

      const elementBedroom = document.createElement("li");
      const bedrooms = document.createElement("span");
      bedrooms.textContent = opportunity.bedrooms;
      elementBedroom.appendChild(bedrooms);
      const textBedroom = document.createTextNode(" quartos");
      elementBedroom.appendChild(textBedroom);

      listRooms.appendChild(elementBedroom);

      const elementBathroom = document.createElement("li");
      const bathrooms = document.createElement("span");
      bathrooms.textContent = opportunity.bathrooms;
      elementBathroom.appendChild(bathrooms);
      const textBathroom = document.createTextNode(" banheiros");
      elementBathroom.appendChild(textBathroom);

      listRooms.appendChild(elementBathroom);

      card.appendChild(img);
      card.appendChild(price);
      card.appendChild(size);
      card.appendChild(listRooms);

      container.appendChild(card);
      
      card.addEventListener('click', () => {
        openModal(opportunity);
      });
    });
  });

const modal = document.getElementById("modal");

function openModal(cardElement){
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("image-modal");
  const modalPrice = document.getElementById("price-modal");
  const modalBedrooms = document.getElementById("bedrooms-modal");
  const modalBathrooms = document.getElementById("bathrooms-modal");
  const modalSize = document.getElementById("size-modal");
        
  const imageCardElement = cardElement.image;
  modalImage.style.backgroundImage = `url("${imageCardElement}")`;
  modalPrice.textContent = cardElement.price;
  modalBedrooms.textContent = cardElement.bedrooms;
  modalBathrooms.textContent = cardElement.bathrooms;
  modalSize.textContent = cardElement.size;

  modal.showModal();
}

document.addEventListener("click", (event) => {
  if(event.target === modal){
    modal.close();
  }
});

document.querySelector(".close").addEventListener("click", () => {
  modal.close();
});
