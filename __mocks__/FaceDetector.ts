export default function setupFaceDetectorMock({
  type = null,
  detect = () => []
} = {}): void {
  // @ts-ignore
  class MockFaceDetector implements FaceDetector {
    readonly type: string | null = type;
    detect: (target: Element) => any[]
    constructor() {
      this.detect = (target: Element) => [];
    }
  }

  Object.defineProperty(
    window,
    'FaceDetector', {
      writable: true,
      configurable: true,
      value: MockFaceDetector
    }
  );

  Object.defineProperty(
    global,
    'FaceDetector', {
      writable: true,
      configurable: true,
      value: MockFaceDetector
    }
  );
}