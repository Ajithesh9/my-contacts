const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        require:[true,"Please add the Contact name"],        
    },
    email:{
        type: String,
        require:[true,"Please add the Contact email"],
    },
    phone:{
        type: String,
        require:[true,"Please add the Contact Phone Number"]
    }
},{
    timestamps:true
}
);

module.exports = mongoose.model("Contact",contactSchema);