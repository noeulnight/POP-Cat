const PORT = process.env.POPPORT || 8080

const path = require('path').resolve()
const express = require('express')
const app = express()

app.use('/src', express.static(path + '/src'))
app.get('/', (_, res) => res.sendFile(path + '/page/index.html'))
app.use((_, res) => res.redirect('/'))

app.listen(PORT, () => console.log('Pop Cat Server is now online in http://localhost:' + PORT))
