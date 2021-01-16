 
<ShapeDetect 
  image={image} // v0.1
  options={{
    type: 'face', // 'barcode', 'text'
    projection: {}, // specify what attributes will exist in onRender parameter
    overlay: {
      type: 'default', // overridden if overlay attribute has a value // v0.2
      color: 'white', // other common discreet colors
      scale: 'fit-to-overlay', // accept pixels '240px 180px' or percentages '90%'
      input: component // isomorphic? can accept component or image path // v0.3
    }
  }}
  onRender={data => this.setState(data)} // v0.1
/> 
 