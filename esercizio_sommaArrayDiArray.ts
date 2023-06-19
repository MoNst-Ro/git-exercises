const generaArray = (lunghezza, max) => {
    //array vuoto
    const array = [];
    //popoliamo l'array con altri array
    for(let i=0; i<lunghezza; i++) {
      const arrayDiArray = [];
      //popoliamo gli array dell'Array
      for(let j=0; j<lunghezza; j++) {
        arrayDiArray.push(Math.floor(Math.random()*max) + 1);
      }
    //inseriamo gli array all'interno dell Array
            array.push(arrayDiArray);
    }
    return array;
  }
  
  const sommaArray = (array) => {
    //inizializzo la somma a 0
    let somma = 0;
    //per ogni array dell'array e per ogni elemento dell'array dell'array effettua la somma cumulativa e la ritorno
    for (let i=0; i<array.length; i++) {
      for (let j=0; j<array.length; j++) {
        somma += array[i][j];
        }
    }
    return somma;
  }
  
  const array1 = (generaArray(5, 4));
  
  console.log(sommaArray(array1));
  