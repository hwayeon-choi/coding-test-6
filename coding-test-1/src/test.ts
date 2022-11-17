function cone_volume(radius : number, height : number) {
  if(radius % 1 === 0 && height % 1 === 0) {
    if(radius <= 100 && height <= 100) {
      let value = (Math.PI * ( radius*radius ) * height) / 3;
      return value.toFixed();
    } 
  } 
} 