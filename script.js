const fs = require('fs')

fs.writeFileSync('file.txt', 'Hello world\n')

fs.appendFileSync('file.txt', 'The First Message')