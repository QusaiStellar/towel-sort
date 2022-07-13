const matrix = [
   [1, 2, 4],
   [5, 6, 7, 8],
   [9, 12],
];
// You should implement your task here.

function towelSort(matrix) {
   let result = [];

   if (matrix) {
      for (let i = 0; i < matrix.length; i++) {
         const element = matrix[i];
         if (i % 2 === 0) {
            result = result.concat(element)
         } else {
            result = result.concat(element.reverse())
         }
      }
   }

   return result;
}

towelSort()