// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  const emailExists = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      email: true,
      username: true,
      password: true,
    },
  });
  if (!emailExists) {
    return res.status(404).json({ message: "User not found" });
  }
  if (emailExists.password === password) {
    return res
      .status(200)
      .json({ user: emailExists, message: "User logged in" });
  } else {
    return res.status(500).json({ message: "Invalid Credentials" });
  }
}
