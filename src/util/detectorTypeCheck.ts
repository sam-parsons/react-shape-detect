export default (type: string) => { 
  if (type) {
    const detectorType = type[0].toUpperCase() + type.slice(1) + 'Detector';
    if (!(detectorType in window)) 
      throw new Error('Your browser doesn\'t support the Shape Detection API');
  }
}