export default {
  scalePixels(scale: number, size: string): string {
    if (size.slice(-2) === 'px') {
      return (parseInt(size.slice(0,-3)) * (scale * 0.01)).toString()
    }
    return '';
  },
  computeScale(imageData: any): number {
    return (imageData.width / imageData.naturalWidth);
  }
}