export default function(type: string) {
  let detect;
  
  switch(type) {
    case 'face':
      // @ts-ignore
      detect = new FaceDetector({
        maxDetectedFaces: 5,
        fastMode: false
      });
      break;
    case 'barcode':
      // @ts-ignore
      detect = new BarcodeDetector();
  }

  return detect;
}