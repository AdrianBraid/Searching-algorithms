function bubbleSort1() {
  let arr = words.length
  for (let i = 0; i < arr - 2; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[j + 1] < words[j]) {
        let temp = words[j + 1]
        words[j + 1] = words[j]
        words[j] = temp
      }
    }
  }
  return true
}  
 
function insertionSort() { 
  for (i = 1; i < words.length; i++) {
    let current = words[i]
    let postion = i
    while (postion > 0 && words[postion - 1] > current) {
      words[postion] = words[postion - 1]
      position = position - 1
    }
    words[postion] = current
  }
  return true
}
