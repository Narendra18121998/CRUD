import mongoose from 'mongoose'

const ConnectDB=async()=>{
    const username = process.env.DB_Username;
    const password = process.env.DB_Password;
    const url=`mongodb+srv://${username}:${password}@cluster0.z6b3rvx.mongodb.net/crud-app?retryWrites=true&w=majority&appName=Cluster0`
    try {
        await mongoose.connect(url)
        console.log("database connection successful")
    } 
    catch (error) {
        console.log("database connection failed",error)    
    }
}

export default ConnectDB;
