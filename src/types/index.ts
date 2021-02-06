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
    attributes?: ImageAttributes,
    resizeDebounce?: number
    overlay?: OverlayOptionsProps
  },
  onRender?: (data: SyntheticEvent) => void
}

// private
export type ModuleState = {
  componentData: [],
  input?: any,
  imageData: {},
  id: string
}

export type ShapeDetectProps = {
  image: string,
  options?: {
    type?: string,
    attributes?: ImageAttributes,
    overlay?: OverlayOptionsProps
  },
  id?: any,
  onRender: (data: SyntheticEvent, imageData: any) => void
}

export type OverlayOptionsProps = {
  options: {
    width?: number, // accept pixels '240px 180px' or percentages '90%'
    height?: string,
    scale?: number, // 0-100->
    offset?: {
      top?: number,
      left?: number
    },
  },
  input: any
}

export interface OverlayProps extends OverlayItemDefsProps {
  component: JSX.Element,
  componentData: []
}

export type OverlayItemDefsProps = {
  imageData?: imageData
  input?: any,
  componentAttributes?: {
    scale?: number, // scale of entire image, may not be placed correctly
    width?: number
  },
}

export type imageData = {
  width?: any,
  height?: any,
  naturalWidth?: any,
  naturalHeight?: any
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


