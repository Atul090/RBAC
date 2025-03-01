const mongoose = require("mongoose");

const dbConnect = async() => {
    try{
        const uri=process.env.CONNECTION_STRING;
        const connect = await mongoose.connect(uri);
        console.log(`Database connext : ${connect.connection.host}, ${connect.connection.name}`);
    } catch(ex) {
        console.log(ex);
        process.exit();
    }
}

module.exports = {
    dbConnect  
}