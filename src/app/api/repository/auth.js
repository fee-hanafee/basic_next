import prisma from "../config/prisma";

const register = async (data) => await prisma.user.create({ data });
const findUserAndEmail = async (user) =>
  await prisma.user.findFirst({
    where: {
      OR: [{ email: user.email }, { username: user.username }],
    },
  });
export default { register ,findUserAndEmail};
