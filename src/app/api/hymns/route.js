import { NextResponse } from "next/server";
import connect from "../../../../lib/db";
import Hymn from "../../../../lib/models/hymns";

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
