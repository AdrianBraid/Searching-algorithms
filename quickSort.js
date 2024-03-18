let keyPointer;
let pointer;

var words = ['robot', 'parentheses', 'rather', 'question', 'stoned', 'surface', 'terrible', 'mutate']


function quicksort(start, end) {
  if (end - start > 0) {
    keyPointer = start
    pointer = end
    
  while (keyPointer != pointer) {
      if ((words[keyPointer] > words[pointer] && keyPointer < pointer) || (words[keyPointer] < words[pointer] && keyPointer > pointer)) {

        let temp = words[keyPointer]
        words[keyPointer] = words[pointer]
        words[pointer] = temp

        temp = keyPointer
        keyPointer = pointer
        pointer = temp

      }
      if (keyPointer > pointer) {
        pointer++
      }
      else {
        pointer--
      }
    }

    quicksort(start, keyPointer - 1)
    quicksort(keyPointer + 1, end)
  }
  return 
}

console.log(words)
quicksort(0, words.length - 1)
console.log(words)