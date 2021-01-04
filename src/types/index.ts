import { SyntheticEvent } from "react";

export type ShapeDetectProps = {
  image: string,
  options?: {
    type?: string
  },
  onRender: (data: SyntheticEvent) => void
}
