// loading file-system module, part of nodeJs not javascript
const fs = require('fs')

// writing data to a file synchronously. syntax : fs.writeFileSync(file_name, file_content to be written)
fs.writeFileSync("note.txt", "The quick brown fox jumps over the lazy dog.\n")


// Challenge : Append a Message to note.txt

fs.appendFileSync("note.txt", "This sentence contains all the english alphabet.")

