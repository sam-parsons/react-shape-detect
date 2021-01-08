# react-shape-detect <sub>(v0.0)</sub>
![CI](https://github.com/sam-parsons/react-shape-detect/workflows/Node.js%20CI/badge.svg)

> A React component integration with the Shape Detection API. Provides coordinate data<sub>(v0.1)</sub> and overlay capabilites<sub>(v0.2)</sub>.


## Install

```
$ npm i react-shape-detect
```


## Usage

```js
import ShapeDetect from 'react-shape-detect';

const path = 'path-or-url-to-image';

const func = function(data) {
  console.log('objects detected: ', data);
}

export default function App() {
  return (
    <ShapeDetect 
      image={path} 
      onRender={func} 
      options={{ type: 'face' }} />
  );
}
```


## API


### image
Type: `String`

### onRender
Type: (data) => void <br>
Returns: [`Object`]

### options
Type: `Object` <br>


## License

MIT © [Sam Parsons]()
