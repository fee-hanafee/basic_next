import { NextResponse, NextApiRequest } from "next/server";
import repo from "../repository/auth";
import bcrypt from "../util/bcrypt";

export async function POST(req) {
  const data = await req.json();
  const existUser = await repo.findUserAndEmail(data);

  if (existUser) {
    if (existUser.email == data.email)
      return NextResponse.json({ message: "email_in_use" }, { status: 403 });
    return NextResponse.json({ message: "username_in_use" }, { status: 403 });
  }

  data.password = await bcrypt.hashed(data.password);
  delete data.confirmPassword;

  await repo.register(data);

  console.log(data);
  return NextResponse.json(data);
}
