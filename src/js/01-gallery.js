// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Documented in the documentation
import SimpleLightbox from 'simplelightbox';
// Additional import of styles
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const markupItems = galleryItems
  .map(
    item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join('');
// console.log(markupItems);
galleryList.insertAdjacentHTML('beforeend', markupItems);
galleryList.addEventListener('click', onclick);

function onclick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const urlImage = evt.target.dataset.source;
  console.log(urlImage);
  const option = {
    onShow: instance => {
      document.addEventListener('keydown', escCloseModal);
    },

    onClose: instance => {
      document.removeEventListener('keydown', escCloseModal);
    },
  };
  const instance = new SimpleLightbox(`.gallery a`, option);

  function escCloseModal(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
