 
<ShapeDetect 
  image={image} // v0.1
  options={{
    type: 'face', // 'barcode', 'text'
    projection: {}, // specify what attributes will exist in onRender parameter
    overlay: {
      input: component, // isomorphic? can accept component or image path // v0.3
      options: {
        width: '100%', // accept pixels '240px 180px' or percentages '90%'
        height: '230px',
        offset: {
          top: 10,
          left: 10
        }
      },
    }
  }}
  onRender={data => this.setState(data)} // v0.1
/> 
 