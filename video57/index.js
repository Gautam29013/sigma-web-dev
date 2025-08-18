console.log("I am a tutorial on loops")



let a = 1;

for (let i = 0; i<100; i++) {
    console.log(a + i);
}





let obj = {
    name: "Jony Gautam",
    role : "Programmer",
    company : "CodeWithHarry AI"
}

for (const key in obj) {
    console.log(key)
}

for (const c of "Gautam") {
    console.log(c)
}


let i = 0;
while (i<6) {
    console.log(i)
    i++;
}


let i = 0;
do {
    console.log(i)
    i++;
} while (i<6);