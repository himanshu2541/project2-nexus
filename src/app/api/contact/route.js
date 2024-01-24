import {NextResponse} from "next/server";
import {connectDB} from "@/lib/utils";
import {Contact} from "@/lib/models";

export const POST = async (req) => {
  const res = await req.json();
  const {name, email, subject,message} = res;

  if(!name || !email || !message || !subject){
    return NextResponse.json({msg: "Please provide all the data"}, { status: 500 })
  }

  try{
    await connectDB();
    await Contact.create({name, email, subject ,message});
    console.log('Info Received')
    return NextResponse.json({msg: "Success"}, {status: 200})
  } catch(error){
    console.log(error);
    return NextResponse.json({msg: "Failed"}, {status: 500})
  }
}
