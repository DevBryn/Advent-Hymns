import { NextResponse } from "next/server";
import connect from "../../../../lib/db";
import Hymn from "../../../../lib/models/hymns";

//get all hymns
export const GET = async () => {
  try {
    await connect();
    const hymns = await Hymn.find();

    return new NextResponse(JSON.stringify(hymns), { status: 200 });
  } catch (error) {
    return new NextResponse("Error fetching hymns: " + error.message, {
      status: 500,
    });
  }
};

//add hymns
export const POST = async (request) => {
  try {
    const body = await request.json();
    await connect();

    const newHymn = new Hymn(body);
    await newHymn.save();

    return new NextResponse(
      JSON.stringify({ message: "Hymn added - ", hymn: newHymn }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse("Error adding hymns: " + error.message, {
      status: 500,
    });
  }
};
