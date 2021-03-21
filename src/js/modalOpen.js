import refs from './refs';
import originalLinks from './originalLinks';
export default evt => {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  refs.previewContainer.classList.add('is-open');
  const targetSource = evt.target.dataset.source;
  refs.modalImage.src = targetSource;
  refs.modalImage.alt = evt.target.alt;
  indexOfOriginalLink = originalLinks.indexOf(targetSource);
};
