# node-fs
fs: File System



OPERATIONS WITH FILESTSTEM
Methods:

Async/await architecture:

fs.promises
.readFile()
.then()
.catch

fs.promises
.writeFile()
.then()
.catch

fs.promises
.appendFile()
.then()
.catch

Callback architecture:
fs.mkdir(dirName)
fs.writeFile(filename, dataToWrite, callback )
fs.readFile(filename, dataToWrite, format, callback )
fs.appendFile(filename, dataToWrite, callback )
fs.unlink(filename, callback)


Sync:
fs.mkdirSync(dirName)
fs.writeFileSync(filename, dataToWrite)
fs.readFileSync(filename, dataToWrite, format )
fs.appendFileSync(filename, dataToWrite )
fs.unlinkSync(filename)
