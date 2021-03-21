import imageCollection from './gallery-items';
export default imageCollection.map(elem => {
  return elem.original;
});
