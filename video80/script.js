class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eat(){
        console.log("khana kha rha hu")
    }

    jumps(){
        console.log("kood rha hu")
    }
}

class lion extends Animal{

}

let a = new Animal("Bunny");
console.log(a)

let l = new lion("Shera")
console.log(l)