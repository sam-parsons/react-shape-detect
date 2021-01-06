// handle options input
export default function(type: string) {
  const detectorType = type[0].toUpperCase() + type.slice(1) + 'Detector';
  if (!(detectorType in window)) 
    alert('Your browser doesn\'t support the Shape Detection API');
  
  let detect;

  switch(type) {
    case 'face':
      // @ts-ignore
      detect = new FaceDetector();
      break;
    case 'barcode':
      // @ts-ignore
      detect = new BarcodeDetector();
      break;
    case 'text':
      // @ts-ignore
      detect = new TextDetector();
      break;
    default:
      break;
  }

  return detect;
}