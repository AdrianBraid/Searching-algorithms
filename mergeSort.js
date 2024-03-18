let data = ['robot', 'parentheses', 'rather', 'question', 'stoned', 'surface', 'terrible', 'mutate']

console.log(data)
mergesort(0, data.length - 1)
console.log(data)

function mergesort(start, end) {
  if (end - start < 1) { 
    return 
  }
  // calculate mid point of list
  let mid = Math.floor((start + end) / 2)
  mergesort(start, mid)
  mergesort(mid + 1, end)

  let temp = []
  let leftPointer = start
  let rightPointer = mid + 1
  while (leftPointer <= mid && rightPointer <= end) {
    if (data[leftPointer] < data[rightPointer]) {
      temp.push(data[leftPointer])
      leftPointer++
    } else {
      temp.push(data[rightPointer])
      rightPointer++
    }
  }
    if (leftPointer <= mid) {
      for (let p = leftPointer; p <= mid; p++) {
        temp.push(data[p])
      }
    } else {
      for (let p = rightPointer; p <= end; p++) {
        temp.push(data[p])
      }
    }
    for (let p = start, i = 0; p <= end; p++ , i++) {
      data[p] = temp[i]
    }
  }

