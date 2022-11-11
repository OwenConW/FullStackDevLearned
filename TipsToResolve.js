
//MIN STACK

// Implementar un stack que tenga los siguientes metodos:

// 1. push(value): añadir el elemento
// 2. pop(): sacar el ulitmo elemento
// 3. min(): obtener el elemento con el valor minimo
// 4. peek(): obtener el elemento que esta en el top del MediaStreamTrack
// TODOS los metodos deber ner de O(1)

function Node(valor){
    this.value = valor || null
    this.next = null
    this.min = Infinity
}

function MinStack() {
    this.head = null;
}

MinStack.prototype.push = function(valor){
    let previous = this.head
    this.head = new Node(valor)
    this.head.next = previous
    if(!previous){   
        this.head.min = valor
    }else{
        this.head.min = previous.value > valor ? valor : previous.value
    }
}


MinStack.prototype.pop = function(){
    let pop = this.head
    this.head = this.head.next
    return pop.value
}

MinStack.prototype.peek = function(){
    return this.head.value
}

MinStack.prototype.min = function(){
  return this.head.min
}

let test = new MinStack()


test.push(743)
test.push(415)
test.push(53)
test.push(543)
test.push(34)
// test.pop()

console.log(test.min())