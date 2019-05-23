const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Trips = new Schema({
    description:String,
    title:String,
    telephone:String,
    passengers:String,
    location:String,
    agency_name:String,
})

module.exports=mongoose.model('Trips',Trips);