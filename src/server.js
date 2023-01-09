import express, { application } from 'express'
import ejs from 'ejs'

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.send('hello world') )

app.listen(3000)
console.log("server is listening on port 3000")
