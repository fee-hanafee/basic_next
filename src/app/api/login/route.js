import { NextResponse, NextApiRequest } from "next/server";

export async function POST(req) {
  const data = await req.body.json();
  return NextResponse.json(data);
}
