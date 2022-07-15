function wavesorting(arr, n) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i = i + 2) {
    //Swap
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}

let arr = [1, 2, 3, 4, 5]; // 2 1 4 3 5
let n = arr.length;

wavesorting(arr, n);
for (let i = 0; i < n; i++) console.log(arr[i]);


function finduniqe(arr) {
  let i, j, k;
  let count = 0;
  let n = arr.length;

  for (i = 0; i < n; i++) {
    count = 0;
    for (j = 0, k = n; j < k + 1; j++) {
      //Increment the counter there is duplicate
      if (i != j) {
        if (arr[i] == arr[j]) count++;
      }
    }
    if (count == 0) console.log(arr[i]);
  }
}

let arr = [1, 2, 2, 3, 3, 5, 4, 4, 3];
console.log(finduniqe(arr));

