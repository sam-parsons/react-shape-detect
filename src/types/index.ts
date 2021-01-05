import { SyntheticEvent } from "react";

export type ShapeDetectProps = {
  image: string,
  options?: {
    type?: string,
    attributes?: {
      alt?: string
    }
  },
  onRender: (data: SyntheticEvent) => void
}
