// handle options input
export default function(type: string) {

  let detector;

  switch(type) {
    case 'face':
      // @ts-ignore
      detector = new FaceDetector();
      break;
    case 'barcode':
      // @ts-ignore
      detector = new BarcodeDetector();
      break;
    case 'text':
      // @ts-ignore
      detector = new TextDetector();
      break;
    default:
      break;
  }

  return detector;
}