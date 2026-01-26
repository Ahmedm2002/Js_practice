function minimumAbsDifference(arr) {
  arr = arr.sort((a, b) => a - b);
  let minDiff = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  let minDiffArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];

    if (next - current == minDiff) {
      minDiffArr.push([current, next]);
    }
  }
  return minDiffArr;
}
const arr = [4, 2, 1, 3];
const arr2 = [3, 8, -10, 23, 19, -4, -14, 27];
const arr3 = [1, 3, 6, 10, 15];
const arr4 = [40, 11, 26, 27, -20];
const arr5 = [1, 3, 6, 10, 15];
console.log("Arr: ", minimumAbsDifference(arr));
console.log("Arr 2", minimumAbsDifference(arr2));
console.log("Arr 3", minimumAbsDifference(arr3));
console.log("Arr 4", minimumAbsDifference(arr4));
console.log("Arr 5", minimumAbsDifference(arr5));
