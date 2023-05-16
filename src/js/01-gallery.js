// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const itemGalleryEl = document.querySelector('.gallery')
itemGalleryEl.style.listStyle = "none";

const newGallery = galleryItems.map(
    item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`)
    .join("")
itemGalleryEl.insertAdjacentHTML('beforeend', newGallery)

new SimpleLightbox('.gallery a', {'captionsData': 'alt', 'captionDelay': 250});

// Change code below this line

console.log(galleryItems);




