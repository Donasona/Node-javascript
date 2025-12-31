// find the largest num in the given Array

num = [2,5,1,3,6,19,6,14]

largest = num[0]

for(let i=0;i < num.length;i++){
    if(num[i]>largest){
        largest = num[i]
    }
}
console.log(largest)

// find the smallest num in a given range

num = [2,5,1,3,6,19,6,14]

smallest = num[0]

for(let i=0;i < num.length;i++){
    if(num[i]<smallest){
        largest = num[i]
    }
}
console.log(smallest)