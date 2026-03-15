import { connectDB } from "@/lib/mongodb";
import Url from "@/models/url";
import { generateShortCode } from "@/utils/generateShortCode";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    await connectDB();

    const body = await req.json();
    const originalUrl = body.url;

    const shortCode = generateShortCode();   // generate code

    await Url.create({
      originalUrl: originalUrl,
      shortCode: shortCode
    });

    return NextResponse.json({
      shortUrl: `http://localhost:3000/${shortCode}`
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );

  }
}