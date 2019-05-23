const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const tripsRoutes=express.Router();
let Trips=require('./trip.model');

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

tripsRoutes.route('/').get(function(req,res){
  Trips.find(function(err,data){
    if(err){
      console.log(err);
    }
    else{
      res.json(data)
    }
  });
});
tripsRoutes.route('/:id').get(function(req,res){
  let id=req.params.id;
  Trips.findById(id,function(err,data){
    if(err){
      console.log(err)
    }
    else {
      console.log(data);
    }
  });
});

tripsRoutes.route('/create').post(function(req,res){
let trips=new Trips(req.body);
    trips.save()
    .then(todo=>{
      res.status(200).json({'trips':'trips added succesfully'});
    })
    .catch(err=>{
      res.status(400).json({'trips':'adding trips failled'});
    });
});


tripsRoutes.route('/update/:id').post(function(req,res){
  Trips.findById(req.params.id,function(err,data){
    if(!data)
      res.status(404).send('data is not found');
    else
      data.description=req.body.description;
      data.telephone=req.body.telephone;
      data.title=req.body.title;
      data.passengers=req.body.passengers;
      data.location=req.body.location;
      data.agency_name=req.body.agency_name;
      data.save().then(data=>{
        res.json('trips updated');
      })
        .catch(err=>{
          res.status(400).send("update not possible");
        });
  });
});
app.use('/trips',tripsRoutes);



app.listen(port, () => console.log(`Server up and running on port ${port} !`));