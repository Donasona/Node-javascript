// how many times each word appears

let text = "javascript is easy and javascript is powerful"
count = new Map()
let words = text.split(" ")
console.log(words)

// for(let i of words){
//     count.set(i , (count.get(i) || 0) + 1);
// }
// console.log(count)