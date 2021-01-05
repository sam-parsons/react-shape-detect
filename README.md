# react-shape-detect [![CI](https://github.com/sam-parsons/react-shape-detect/workflows/CI/badge.svg)](https://github.com/lukeed/clsx/actions?query=workflow%3ACI)

> A React componment integration with the Shape Detection API. Provides coordinate data and overlay capabilites as a higher order function.


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
