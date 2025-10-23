import mongoose from "mongoose";
export async function connectDB(){
    console.log('data base connected.')
    try{
        await mongoose.connect('mongodb://localhost:27017/storageApp')

    }catch(err){
        console.log(err);
        console.log("Could not connect to database")    
        process.exit(1)
    }
        
}


process.on("SIGINT", async ()=>{
    await mongoose.disconnect()
    console.log("Client Disconnected.")
    process.exit(0)
})



