const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/clients')
.then(console.log("connection successful"))
  .catch(console.error);        

// useCreateIndex:true,
// useNewUrlParser:true,
// useUnifiedTopology:true

// mongoose.connect('mongodb://localhost:27017/clients',{useCreateIndex:true,
//  useNewUrlParser:true,
// useUnifiedTopology:true})
// .then(()=>{
//     console.log("connection successful");
// }).catch((e)=>
// {console.log("no coonect")});  .......................................................find bug in this not working
