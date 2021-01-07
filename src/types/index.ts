import { SyntheticEvent } from "react";

// public
export interface ImageAttributes {
  align?: string,
  alt?: string,
  border?: string,
  crossorigin?: string,
  height?: string,
  hspace?: string,
  ismap?: string,
  longdesc?: string,
  src?: string,
  usemap?: string,
  vspace?: string,
  width?: string
}

export interface ModuleProps {
  image: string,
  options?: {
    type?: string
    attributes?: ImageAttributes
  },
  onRender?: (data: SyntheticEvent) => void
}

// private
export type ShapeDetectProps = {
  image: string,
  options?: {
    type?: string,
    attributes?: ImageAttributes
  },
  onRender: (data: SyntheticEvent) => void
}

export interface detectImage {
  type: DetectorType, 
  onRender: (data: any) => void
}

export enum DetectorType {
  'face',
  'barcode',
  'text'
}


