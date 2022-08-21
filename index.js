const express = require('express')
const appRoutes = require('./routes/appRoutes')

const app = express()


app.set('view engine', 'ejs')
app.use(appRoutes)

app.listen(process.env.PORT || 5000, () => console.log('Server has been connected'))