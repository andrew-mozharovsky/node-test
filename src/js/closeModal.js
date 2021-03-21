import refs from './refs';
import resetAttribute from './resetAttribute';
export default () => {
  refs.previewContainer.classList.remove('is-open');
  resetAttribute();
};
