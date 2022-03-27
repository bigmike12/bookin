import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, email, password } = req.body;
  const userNameExists = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      username: true,
    },
  });
  const emailExists = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      email: true,
    },
  });
  if (userNameExists) {
    return res.status(400).json({ message: "Username aready exists" });
  }
  if (emailExists) {
    return res.status(400).json({ message: "Email aready exists" });
  }
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    res.status(200).json({ user: newUser, message: "User Created" });
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
}
