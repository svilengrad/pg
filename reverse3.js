let arr = [3, 2, 1]

let temp = arr[0] // arr = [3, 2, 1]; temp = 3
arr[0] = arr[2] // arr = [1, 2, 1]
arr[2] = temp // arr = [1, 2, 3]
console.log(arr)

let brr = [2, 4, 9]

let forn = brr[0]
brr[0] = brr[1] // brr = [4, 4, 9]
brr[1] = forn // brr = [4, 2, 9]
console.log(brr)
