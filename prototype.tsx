 
<ShapeDetect 
  image={image} // v0.1
  options={{
    type: 'face', // 'barcode', etc..
    projection: {}, // specify what attributes will exist in onRender parameter
    overlay: {
      type: 'rectangle', // overridden if overlay attribute has a value
      color: 'white', // other common discreet colors
      scale: 'fit-to-overlay' // accept pixels '240px 180px' or percentages '90%'
    }
  }}
  overlay={overlay} // isomorphic? can accept component or image path // v0.2
  onRender={data => this.setState(data)} // v0.1
/> 
 