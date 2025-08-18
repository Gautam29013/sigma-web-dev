async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(445)
        }, timeout);
    },3500);    

}
async function getData(){
        let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        let data = await x.json()
        console.log(data)
   
}


async function main(){
    
console.log("Loading modules")

console.log("do something else")

console.log("Load data")    

let data = await getData()

console.log("Data")

console.log("Process data")

console.log("task 2")

}

main()




postData("https://example.com/answer" , {answer : 42}).then((data) => {
    console.log(data);

})