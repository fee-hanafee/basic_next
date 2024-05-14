import { NextResponse, NextApiRequest } from "next/server";
import repo from "../repository/auth";
import bcrypt from "../util/bcrypt";
import jwt from "../util/jwt";

export async function POST(req) {
  const data = await req.json();
  const user = await repo.findUsername(data.username);
  if (user.length == 0) return NextResponse.json({ message: "is_wrong" });

  const result = await bcrypt.compare(data.password, user[0].password);
  if (!result) return NextResponse.json({ messge: "is_wrong" });
  delete user.password;

  const token = jwt.sign({ id: user.id, role: user.role });

  return NextResponse.json({ token });
}
