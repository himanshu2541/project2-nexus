import {NextResponse} from "next/server";
import {connectDB} from "@/lib/utils";
import {Feedback} from "@/lib/models";

export const POST = async (req) => {
  const res = await req.json();
  const {name, email, message} = res;

  if(!name || !email || !message){
    return NextResponse.json({msg: "Please provide all the data"}, { status: 500 })
  }

  try{
    await connectDB();
    await Feedback.create({name, email, message});
    console.log('Message Received')
    return NextResponse.json({msg: "Success"}, {status: 200})
  } catch(error){
    console.log(error);
    return NextResponse.json({msg: "Failed"}, {status: 500})
  }
}
