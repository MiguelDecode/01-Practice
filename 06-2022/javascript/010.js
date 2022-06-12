const arrayA = [1, 2, 3, 4, 5];
const arrayB = [5, 6, 7, 8, 9, 10, 13];

const valorRepe = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      } else {
        false;
      }
    }
  }
};

const concatArray = (array1, array2) => {
  if (valorRepe(array1, array2)) {
    const newArray = array1.concat(array2);
    return newArray;
  }
};

const granArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 4],
  [4, 5, 8],
  [11, 23],
  [21, 25],
  [0, 25],
];
const newGranArray = [];

const recorrerArray = (granArray) => {
  
  console.log(newGranArray);
};

recorrerArray(granArray);
