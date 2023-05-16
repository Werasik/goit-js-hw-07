import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery")
const galleryImages = galleryItems
.map((item) => `<li><a class = "gallery__link href = "${item.original}"><img class = "gallery__image" id="item${galleryItems.indexOf(item)}" src = "${item.preview}" data-source = "${item.original}" alt = "${item.description}"></li>`)
.join("")
gallery.insertAdjacentHTML("afterbegin", galleryImages)
gallery.addEventListener("click", (event) => {
    const imageUrl = event.target.dataset.source;
    const imageAlt = event.target.alt;
    basicLightbox.create(`<img src="${imageUrl}" alt="${imageAlt}">`).show();
}
)