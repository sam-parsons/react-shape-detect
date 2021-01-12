export default (props: string) => { 
  if (props) {
    const detectorType = props[0].toUpperCase() + props.slice(1) + 'Detector';
    if (!(detectorType in window)) 
      throw new Error('Your browser doesn\'t support the Shape Detection API');
  }
}