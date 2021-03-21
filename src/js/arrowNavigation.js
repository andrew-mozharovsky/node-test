import refs from './refs';
import originalLinks from './originalLinks';

let indexOfOriginalLink = 0;
const modalOpen = evt => {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  refs.previewContainer.classList.add('is-open');
  const targetSource = evt.target.dataset.source;
  refs.modalImage.src = targetSource;
  refs.modalImage.alt = evt.target.alt;
  indexOfOriginalLink = originalLinks.indexOf(targetSource);
};
const moveToLeft = evt => {
  if (evt.code === 'ArrowLeft') {
    indexOfOriginalLink > 0
      ? (refs.modalImage.src = originalLinks[(indexOfOriginalLink -= 1)])
      : (refs.modalImage.src =
          originalLinks[(indexOfOriginalLink = originalLinks.length - 1)]);
  }
};

const moveToRight = evt => {
  if (evt.code === 'ArrowRight') {
    indexOfOriginalLink < originalLinks.length - 1
      ? (refs.modalImage.src = originalLinks[(indexOfOriginalLink += 1)])
      : (refs.modalImage.src = originalLinks[(indexOfOriginalLink = 0)]);
  }
};

const arrowNavigation = evt => {
  if (!refs.previewContainer.classList.contains('is-open')) {
    return;
  }
  moveToLeft(evt);
  moveToRight(evt);
};

export default { arrowNavigation, modalOpen };
