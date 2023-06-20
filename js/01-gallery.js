import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryImages = galleryItems
  .map(
    ({ original, preview, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
    <img 
    class="gallery__image" 
    src="${preview}" data-source="${original}" 
    alt="${description}"></a></li>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", galleryImages);
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const imageUrl = event.target.dataset.source;
  const imageAlt = event.target.alt;

  const instance = basicLightbox.create(`
  <img src="${imageUrl}" alt="${imageAlt}">`);
  instance.show();
});
