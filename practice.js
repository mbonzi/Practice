let myArr = [4,5,6,7, 'end']
myArr[3];
console.log(myArr.length)
myArr.push(6)
let pos = myArr.indexOf('end')
let removedItem = myArr.splice(pos, 1)


let vegetables = ['cucumber', 'celery', 'carrots', 'zucchini']
console.log(vegetables)
let pos = 1
let n = 2
let removedItems = vegetables.splice(pos, n)
console.log(vegetables)
console.log(removedItems)

const firstNamesArray = ['Violet', 'Charlie', 'Veruca', 'Mike', 'Augustus'];
const lastNamesArray = ['Beauregarde', 'Bucket', 'Salt', 'Teavee', 'Gloop'];

firstNamesArray.reverse();
lastNamesArray.reverse();

for (let i = 0; i < firstNamesArray.length && lastNamesArray.length; i++) {
  console.log(firstNamesArray[i] + " " + lastNamesArray[i]);
}