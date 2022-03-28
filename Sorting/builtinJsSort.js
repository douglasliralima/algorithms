let list = ["eu", "acho", "você", "muito", "bestinha"]

list = list.sort()

console.log(list) // [ 'acho', "bestinha", 'eu', 'muito', você' ]

list = [4001, 122, 55, 61]

list = list.sort()

console.log(list) // [ 122, 4001, 55, 61 ]

list = list.sort((a, b) => a - b);

console.log(list) // [ 55, 61, 122, 4001 ]

list = [ "eu", "acho", "você", "absurdamente", "bestinha" ]

list = list.sort((a, b) => a.length - b.length);

console.log(list) // [ "eu", "acho", "você", "bestinha", "absurdamente"]
