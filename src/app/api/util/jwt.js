import jwt from "jsonwebtoken";

const sign = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY ?? "key", {
    algorithm: process.env.JWT_ALGORITHM ?? "HS384",
    expiresIn: process.env.JWT_EXPIRES ?? "30d",
  });

export default { sign };
