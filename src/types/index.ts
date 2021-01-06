import { SyntheticEvent } from "react";

// private
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

export interface detectImage {
  type: string, 
  onRender: (data: any) => void
}

// public
export interface ModuleProps {
  image: string,
  options?: {},
  onRender?: (data: SyntheticEvent) => void
}
