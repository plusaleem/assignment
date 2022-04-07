const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');


const app = express();
app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose')

 mongoose.connect("mongodb://localhost:27017/admin-api",{
     useCreateIndex:true,
     useNewUrlPraser:true,
     useUnifiedTopology:true
 }).then(()=>{
     console.log("connection is succesful");
 }).catch((e)=>{
     console.log("no connection");
 })

app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});

