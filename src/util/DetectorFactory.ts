// handle options input
export default function(type: string) {

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