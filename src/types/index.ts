import { Component, ReactComponentElement, ReactElement, SyntheticEvent } from "react";

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
    overlay?: {
      input?: any,
      scale?: number
    }
  },
  onRender?: (data: SyntheticEvent) => void
}

export type ModuleState = {
  componentData: [],
  input?: any,
}

// private
export type ShapeDetectProps = {
  image: string,
  options?: {
    type?: string,
    attributes?: ImageAttributes,
    overlay?: {
      scale?: number
    }
  },
  onRender: (data: SyntheticEvent) => void
}

export type OverlayProps = {
  component: JSX.Element,
  componentData: [],
  componentAttributes?: {
    scale?: number // scale of entire image, may not be placed correctly
  }
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


