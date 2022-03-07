 import img from "../img/heart.png"



  const generateColor = () => {
    let aux = []; 
    for (let i = 0; i < 3; i++) {
        aux.push(Math.ceil(Math.random() * 256));
         
    }
    let color = `rgb(${aux[0]}, ${aux[1]}, ${aux[2]})`;
  //  console.log(typeof color);
    return color;
}
///

  export const finalColors = (quantity) => {

     let colors = [];
     for (let i = 0; i < quantity; i++) {
        colors.push(generateColor())
       
     }
     return colors 
     
  }


  export const pickeAdRandomColor = (colors) => {
    const pickedColor = colors[Math.ceil(Math.random() * colors.length - 1)];
    return pickedColor
  }

  /// 
  export const heartGenerator = (lives) => {
       let aux = []
      for (let i = 0; i < lives; i++) {
          aux.push(i + 1)
        
      }
      return aux.map(a => (<img key={a} src={img} alt="" width="40px" />))
  }


   