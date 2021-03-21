import refs from './refs';
import originalLinks from './originalLinks';
export default evt => {
  let indexOfOriginalLink = 0;
  if (evt.code === 'ArrowLeft') {
    indexOfOriginalLink > 0
      ? (refs.modalImage.src = originalLinks[(indexOfOriginalLink -= 1)])
      : (refs.modalImage.src =
          originalLinks[(indexOfOriginalLink = originalLinks.length - 1)]);
  }
};
