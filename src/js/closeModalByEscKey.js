import refs from './refs';
import resetAttribute from './resetAttribute';
export default evt => {
  if (!refs.previewContainer.classList.contains('is-open')) {
    return;
  }
  if (evt.code === 'Escape') {
    refs.previewContainer.classList.remove('is-open');
    resetAttribute();
  }
};
