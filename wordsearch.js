
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word.toUpperCase())) return true;
  }

  let vertArr = [];
  let vertArrSize = letters.length;
  let horiArrSize = letters[0].length;

  //for each array inside of letters
  for (let i = 0; i < horiArrSize; i++) {
    for (let j = 0; j < vertArrSize; j++) {
        console.log(letters[j][i])
      //pushes all of one index into arr.
      vertArr.push(letters[j][i]);
      if (vertArr.length === vertArrSize) {
        let newStr = vertArr.join("");
        if (newStr.includes(word.toUpperCase())) {
          return true;
        } else {
          vertArr = [];
        }
      }
    }
  }
  return false;
};

module.exports = wordSearch;

let arr =[
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ]

console.log(wordSearch(arr, "bisl"))  