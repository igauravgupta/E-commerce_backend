const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim :true
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProdCategory",
    },
    quantity:{
        type:Number,
        required:true,
    },
    images:{
        type:Array,
    },
    color:{
        type:String,
        enum:["Black","Red","Brown"],
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"brands"
    },
    sold:{
        type:Number,
        default:0
    },
    ratings:[{
        star:Number,
        comment:String,
        postedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
    }],
    totalRatings:{
        type:String,
        default:0,
    }
},{
    timestamps:true,
});

//Export the model
module.exports.product = mongoose.model('product', productSchema);