import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryImages = galleryItems
  .map(
    (item) => `<li class="gallery__item" >
<a class="gallery__link" href="${item.original}">
<img 
class="gallery__image" 
src="${item.preview}" 
alt="${item.description}" />
</a>
</li>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", galleryImages);
const lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});