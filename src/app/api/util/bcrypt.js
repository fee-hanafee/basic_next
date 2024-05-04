import bcrypt from "bcryptjs";

const hashed = async (password) =>
  await bcrypt.hash(password, +process.env.BCRYPT_SALT ?? 10);
const compare = async (input, hashed) => await bcrypt.compare(input, hashed);

export default { hashed, compare };
