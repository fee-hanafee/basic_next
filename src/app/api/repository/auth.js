import { Prisma } from "@prisma/client";
import prisma from "../config/prisma";

const register = async (data) => await prisma.user.create({ data });
const findUserAndEmail = async (user) =>
  await prisma.user.findFirst({
    where: {
      OR: [{ email: user.email }, { username: user.username }],
    },
  });

const findUsername = async (username) => {
  const result = await prisma.$queryRaw(
    Prisma.sql`select * from users where username = ${username}`
  );

  return result;
};
export default { register, findUserAndEmail, findUsername };
