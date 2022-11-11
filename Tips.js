// TIPS:
// DIA 1


function FindNeedle(haystack, needle){
    for(let i = 0; i < haystack.length; i++){
        for(let j = 0; j < needle.length; j++){
            if(needle[j] !== haystack[i + j])break;
            if(j === needle.length - 1) return i
        }
    }
}

function FindNeedle2(haystack, needle){
    const arr = haystack.split(needle)          //"react-redux" | "redux"  -->  ["react-", ""]
    if(arr.length === 1)return -1;
    return arr[0].length;
}

function findNeedleSlice(haystack, needle){
    for(let i = 0; i < haystack.length; i++){
        if(haystack.slice(i, i + needle.length) === needle)return i
    }
}

//DIA 2

   
//  |        |   --->   9

function MaxValue(shares){
    let maxProfit = shares[0] - shares[1];
    for(let i = 0; i < shares.length - 1; i++){
        const buy = shares[i]
        for(let j = j + i; j < shares.length; j++){
            const sell = shares[j]
            const actualProfit = sell - buy;
            if(actualProfit > maxProfit) maxProfit = actualProfit
        }
    }
    return maxProfit
}

[1,3,6,8,10]  

function MaxValue2(shares){
    let minBuy = shares[0];
    let maxProfit = -Infinity;
    for(let i = 1; i < shares.length; i++){
        const sell = shares[i];
        const actualProfit = sell - minBuy;
        if(actualProfit > maxProfit)maxProfit = actualProfit;
        if(minBuy > sell) minBuy = sell;
    }
    return maxProfit
}

// DIA 3

function balancefRefactor(string){
    const stack = [];
    const validateBrackets = {
        "{":"}",
        "[":"]",
        "(":")"
    }
    for(const bracket of string){
        if(validateBrackets[bracket])stack.push(bracket);
        else if(validateBrackets[stack.pop()] !== bracket)return false
    }
    return !stack.length 
}



// DIA 4


//Grafos



function SolveGraph(graph, start, end, visited = []){
    if(visited.includes(start)) return false;
    visited.push(start)
    for(const node of graph[start]){
        if(node === end)return true;
        if(SolveGraph(graph, node, end, visited) === true)return true;
    }
    return false;
}

function graphRefactor(graph, start, end, visited = {}){
    if(visited[start])return;
    visited[start] = true;
    for(const node of graph[start]){
        if(node === end)return true;
        if(graphRefactor(graph, node, end, visited) === true)return true;
    }
    return false;
}


const graph = {
    a: ["c"],
    b: ["c"],
    c: ["s", "r"],
    d: ["a"],
    s: ["a", "c"],
    r: ["d"],
    z: ["z"]
}


// DIA 5

//BinaryToDecimal



const binaryToDecimal = (num) => {
    let bin = num.split("").reverse();
    let acc = 0;
    bin.forEach((d, i) => {
        acc += d * 2 ** i
    })
    return acc
}


const binaryToDecimalReduce = (num) => {
    return num.split("")
    .reverse()
    .reduce((acc, num, index) => (acc += num * 2 ** index), 0)
}


const binaryToDecimalRecurcion = (num) => {
    let acc = num[0] * 2 ** [num.length - 1]
    return(num.slice(1)) ? acc + binaryToDecimalRecurcion(num.slice(1)) : acc
}


// DecimalToBinary

const decimalToBinary = (num) => {
    let binary = "";
    while(num){
        binary = (num % 2) + binary;
        num = Math.trunc(num / 2)
    }
    return binary;
}


const decimalToBinaryRecurcion = (num) => {
    return num  ? decimalToBinaryRecurcion(Math.trunc(num / 2)) + num % 2 : ""
}

// DIA 6


// SUMA HORAS



const clockMinureAdder = (time, minutesToAdd) => {
    const [hours, minutes] = time.split(":")
    let totalMinutes = parseInt(minutes) + minutesToAdd;
    let totalHours = parseInt(hours) + Math.floor(totalMinutes / 60);
    totalMinutes = totalMinutes % 60 
    totalHours = ((totalHours - 1) % 12 )+ 1
    totalMinutes = totalMinutes < 10 ? "0" + totalMinutes  : totalMinutes ;
    totalHours = totalHours < 10 ? "0" + totalHours : totalHours;
    return `${totalHours}:${totalMinutes}`
}   




// DIA 7

// result = [1, 4, 7]
   [1, 3, 4, 6, 7]
//           ^
   [1, 2, 4, 5, 7]
//              ^ 

const coincidencias = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            result.push(arr[i]);
            i++;
            j++;
        }else{
            arr1[i] > arr2[j] ? j++ : i++
        }
    }
    return result
}

const coincidenciasHashMap = (arr1, arr2) => {
  const result = [];
  const hashMap = {};  
  for(const num1 of arr1) hashMap[num1] = true;
  for(const num2 of arr2) if(hashMap[num2]) result.push(num2)
  return result
}

const coincidenciasHashMap2 = (arr1, arr2) => {
    const hashMap = {};  
    for(const num1 of arr1) hashMap[num1] = true;
    return arr2.filter(num => hashMap[num])
}

const arrayAsociativo = (arr1, arr2) => {
    const arrayAsociativo = [];
    for (const num1 of arr1) arrayAsociativo[num1] = true;
    return arr2.filter((num) => arrayAsociativo[num])
}


const hashMapInstanciaMap = (arr1, arr2) => {
    const hashMap = new Map();
    for(const num1 of arr1) hashMap.set(num1, true);
    return arr2.filter(num => hashMap.get(num))
}


// DIA 8

function spuOn(fn){
    let callCount = 0
    let calledWith = new Map()
    let returned = new Map()
    const spy = (...args) => {
        callCount ++
        args.forEach(arg => calledWith.set(arg, true))
        const result = fn(...args)
        returned.set(result), true
        return result
    }
    spy.getCallCount = () => callCount
    spy.wasCalledWith = (value) => {
        return !!calledWith.get(value)  
    }
    spy.returned = (value) => {
        return !!returned.get(value) 
    }
    return spy 
}

// DIA 9

const curry = (cb) => {
    return function(var1){
        return function(var2){
            cb(var1, var2)
        }
    }
}

const callAllFour = (var1) => {
    return var1 + 1;
}

const curriedCalcAllFour = curry(ca)

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// const sum = function (a, b){
//     // sum.length --> 2
//     // arguments.length ---> 8
//     return a + b
// }

// sum(1,2,3,4,5,6,7,8)


// arguments.length  --> argumentos que recibe mi funcion != PARAMETROS *!ARROWS NO MANEJAN ARGUMENTS!*
// FUNCTION.length  ---> parametros que recibe mi funcion != argumentos


const curry = (cb) => {
   let args = [];
   return currentFunction = (arg) => {
        args.push(arg)
        if(fn.length === args.length) return fn(...args) 
        return (nextArg) => currentFunction(nextArg)
   }
}


const curry = (cb) => {
    let args = [];
    return currentFunction = (...arg) => {
        args.push(...arg)
        if(fn.length === args.length) return fn(...args) 
        return function(nextArg){
          return currentFunction(nextArg)
        }
    }
}




// ETAPA 2 DIA 1
// encontrar si la convinacion de cualquier de los numeros dentro de un array forma el numero que nos pasan



const SumArray = (array, n) => {
    let i = 0;
    let j = array.length - 1
    while(i !== j){
        const sum = array[i] + array[j] 
        if(sum === n)return true
        sum > n ? j-- : i++
    }
    return false
}
// O(n)

// DIA 2   

// suma todo los elementos de un array (pueden haber arreglos adentro)

function mdArraySum(arr, sum = 0){
    for(const element of arr){
        sum = typeof element === "number" ? sum + element : mdArraySum(element, sum)
    }
    return sum
}
// O(n)

function mdArraySumRecurcion(arr){
    return arr.reduce(((acc, e) => acc + (typeof e === "number" ? e : mdArraySum(e))), 0)
}
// O(n)


[1,5,3,7,[3,-1[3,8,6,-3], 3, 34], 2, [3]] 



// DIA 5 

// Dado un arreglo de numeros encotra el length creciente mas larga posible. esta secuencia puede saltear numeros en el arreglo 

function longesIncreasingSubsequence(nums){
    let sequences = [] 
    for(const num of nums){
        sequences.push([num])
        for(const seq of sequences){
            if(num > seq[seq.length - 1]){
                const newSeq = seq.concat(num)
                sequences.push(newSeq)
            }
        }
    }
    let longest = 0
    for(const seq of sequences){
       longest = seq.length > longest ? seq.length : longest
    }
    return longest
}

function longesIncreasingSubsequence2(nums){
    let sequences = [];
    let longest = 0;
    for(const num of nums){
        const seqCopy = [...sequences];
        sequences.push([num]);
        for(const seq of seqCopy){
            if(num > seq[seq.length - 1]){
                const newSeq = seq.concat(num);
                sequences.push(newSeq);
                longest = newSeq.length > longest ? newSeq.length : longest;
            }
        }
    }
    return longest
}
