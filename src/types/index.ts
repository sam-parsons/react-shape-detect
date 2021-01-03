export type ShapeDetectProps = {
  image: string,
  options?: {
    type?: string
  },
  onRender: (data: any) => void
}

export type ShapeDetectState = {
  data: any
}