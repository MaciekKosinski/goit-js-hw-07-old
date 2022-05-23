import { galleryItems } from './gallery-items.js';
// Change code below this line

const reference = {
    galleryContainer: document.querySelector('.gallery'),
};

const galleryMarkup = createGalleryMarkup(galleryItems);

reference.galleryContainer.innerHTML = galleryMarkup;

const galleryModalWindow = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(item => createGalleryItem(item)).join('');
}

function createGalleryItem({ preview, original, description }) {
    return `
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          loading="lazy"
        />
      </a>`;
}
