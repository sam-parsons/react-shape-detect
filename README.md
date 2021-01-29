# react-shape-detect <sub>(v0.1)</sub>
![CI](https://github.com/sam-parsons/react-shape-detect/workflows/Node.js%20CI/badge.svg)

> A React component integration with the Shape Detection API. Provides coordinate data and overlay capabilites<sub>(v0.2)</sub>.


## Install

```
$ npm i react-shape-detect
```


## Usage

```js
import ShapeDetect from 'react-shape-detect';

const path = 'path-or-url-to-image';
const overlay = 'path-or-url-to-overlay';

const func = function(data) {
  console.log('objects detected: ', data);
}

export default function App() {
  return (
    <ShapeDetect 
      image={path} 
      onRender={func} 
      options={{ 
        type: 'face', 
        overlay: { 
          input: overlay
          options: {
            width: '70%'
          }
        }
      }} 
    />
  );
}
```

## Basic Props

### image

> `string` | _required_

Path to image - network or local.

### onRender

> `function(data: any)` | defaults to: `(data) => void`

Callback is executed with the onLoad event of the `<img/>` tag. <br>
Returns coordinate data from matches on criteria defined in options object.

### options

> `object`

Detector type, custom Shape Detector API options<sub>v0.2</sub>, and HTML img tag attributes

```js
{
  type?: string // 'barcode', 'text'
  attributes?: React.CSSProperties,
  resizeDebounce?: number // default 250(ms)
  overlay?: {
    input: string || ReactComponent,
    options?: {
      width?: string, // auto height or set height independently
      height?: string,
      offset?: { // in pixels
        top?: number,
        left?: number
      }
    }
  }
}
```

## License

MIT © [Sam Parsons]()
