const generaArray = (lunghezza, max) => {
    
    const array = [];
    
    for(let i=0; i<lunghezza; i++) {
      const arrayDiArray = [];
      
      for(let j=0; j<lunghezza; j++) {
        arrayDiArray.push(Math.floor(Math.random()*max) + 1);
      }
    
            array.push(arrayDiArray);
    }
    return array;
  }
  
  const sommaArray = (array) => {
    
    let somma = 0;
    
    for (let i=0; i<array.length; i++) {
      for (let j=0; j<array.length; j++) {
        somma += array[i][j];
        }
    }
    return somma;
  }
  
  const array1 = (generaArray(5, 4));
  
  console.log(sommaArray(array1));
  