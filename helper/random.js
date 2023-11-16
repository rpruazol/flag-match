function randomPairs(pairs, max){
  if(pairs > max){throw Error('not enough unique numbers for given pairs')}
  const output = [];
  const used = {};
  let length = 0
  
  while(length < pairs * 2){
    num = Math.ceil(Math.random() * max);
    if(!used[num]){
      output.push(num, num);
      used[num] = true
      length = length + 2
      // console.log(length, pairs * 2, output)
    }
  }
  return output;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}