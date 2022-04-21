const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
  }))
  app.set('view engine', 'handlebars')
  
const port = process.env.PORT || 3000


const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.listen(port, () => console.log('App up and running on port 3000'))