export default {
  galleryList: document.querySelector('.js-gallery'),
  previewContainer: document.querySelector('.js-lightbox'),
  previewContainerOverlay: document.querySelector(
    '.js-lightbox .lightbox__overlay',
  ),
  modalImage: document.querySelector('.js-lightbox .lightbox__image'),
  modalCloseButton: document.querySelector('[data-action="close-lightbox"]'),
};
