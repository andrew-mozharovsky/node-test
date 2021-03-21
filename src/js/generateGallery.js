import imageCollection from './gallery-items';
export default imageCollection
  .map(element => {
    return `<li class = "gallery__item"><a class="gallery__link" href="${element.original}"> <image class = "gallery__image" src = "${element.preview}" data-source="${element.original}" alt = "${element.description}"></a></li>`;
  })
  .join('');
