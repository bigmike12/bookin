// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const query = req.query;
    const { username } = query;
    const userNameExists = await prisma.user.findUnique({
      where: {
        username: String(username),
      },
    });
    if (!userNameExists) {
      return res.status(200).json({ user: null, message: "User not found" });
    }
    return res.status(200).json({ user: userNameExists, message: "Okay" });
  }
}
