const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const postsRoutes = require('./routes/posts.js')

const app = express()



app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts', postsRoutes)

const CONNECTION_URL = 'mongodb+srv://cicadA:1112*anurag2000@cluster0.udtrn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message))

mongoose.set('useFindAndModify',false);




