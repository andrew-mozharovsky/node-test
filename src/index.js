import './css/styles.css';
import refs from './js/refs';
import generateGallery from './js/generateGallery';
import closeModal from './js/closeModal';
import closeModalByEscKey from './js/closeModalByEscKey';
import navigation from './js/arrowNavigation';

refs.galleryList.insertAdjacentHTML('beforeend', generateGallery);
refs.galleryList.addEventListener('click', evt => {
  evt.preventDefault();
  navigation.modalOpen(evt);
});
refs.modalCloseButton.addEventListener('click', closeModal);
refs.previewContainerOverlay.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModalByEscKey);
window.addEventListener('keydown', navigation.arrowNavigation);
