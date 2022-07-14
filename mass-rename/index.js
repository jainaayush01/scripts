const fs = require('fs')
const files = fs.readdirSync(__dirname)
console.log({ fs });

for (const file of files) {
  if (file.endsWith('.jsx')) {
    fs.mkdirSync(
      __dirname + '/' + file.replace('.jsx', ''),
      { recursive: true },
      (err) => {
        console.log(err)
      }
    )

    fs.renameSync(
      __dirname + '/' + file,
      __dirname + '/' + file.replace('.jsx', '') + '/index.jsx',
      (err) => {
        console.log(err)
      }
    )
  }
}
