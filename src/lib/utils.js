import mongoose from "mongoose";

const connection = {}
export const connectDB = async () => {
  try{
    if(connection.isConnected){
      console.log('Using Existing Connection');
      return;
    }
    const conn = await mongoose.connect(process.env.MONGO_URI)
    connection.isConnected = conn.connections[0].readyState;
    console.log(`NEW CONNECTION: CONNECTED TO DB... ${conn.connection.host}`)
  } catch (error){
    console.log(error)
    console.log('FAILED TO CONNECT DATABASE')
    throw new Error(error)
  }
}
