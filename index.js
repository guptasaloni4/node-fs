import fs from "fs";

//reading filename 
let fileName = import.meta.filename;
console.log(fileName);

//write
fs.writeFile('fs-write.txt','Hello There!! \nThis is a test document to write using fs module.','utf-8',(err)=>{
    if(err) console.error(err);
    else{
        console.log("Boom...File successfully written!!");
    }
})

//append
fs.appendFile('fs-write.txt','\nHello again!! \nThis is a test document to understand the node file system.',(err)=>{
    if(err) console.error(err);
    else{
        console.log("Boom...File successfully written!!");
    }
})

//read
fs.readFile('fs-write.txt','utf-8' ,(data,err)=>{
    if(err) console.error(err);
    else{
        console.log(data);
    }
})

//delete
fs.unlink('fs-write.txt',(err)=>{
    if(err) console.error(err);
    else{
        console.log("File deleted successfully");
    }
})