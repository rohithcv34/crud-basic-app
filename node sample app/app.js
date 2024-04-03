
// import readline function and storing it into a variable


const sample = require("readline");

// creating an interface for terminal

const interface= sample.createInterface({
    input:process.stdin,
    output:process.stdout
});

// reading interface from terminal

interface.question("enter ur name:",(name)=>{
    console.log("you entered:"+name);
    interface.close();//close the interface

});
//used to close interface
interface.on("close",()=>{
    console.log("interface closed");
    process.exit(0)
})