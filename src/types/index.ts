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

export type ModuleProps = {
  image: string,
  options?: {},
  // 
  onRender?: (data: SyntheticEvent) => void
}
