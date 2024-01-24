import getAlbum from "@/app/api/photos/google-photos";
import {NextResponse} from "next/server";

export const GET = async () => {
  try {
    const results = await getAlbum(process.env.GOOGLE_PHOTOS_ID);
    return NextResponse.json(results, {status: 200})
  } catch (error){
    return NextResponse.json([], {status: 500})
  }
}
