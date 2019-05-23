const mongoose=require('mongoose');
const schema=mongoose.schema;

let Trips =new schema({
    description:{
        type:String
    },
    title:{
        type:String
    },
    telephone:{
        type=String
    },
    passengers:{
        type=Number
    },
    location:{
        type=String
    },
    agency_name:{
        type=String
    }
})

module.exports=mongoose.model('Trips',Trips);