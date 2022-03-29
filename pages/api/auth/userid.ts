// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.body;
  const books = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
      email: true,
      username: true,
      password: true,
      bookings: true,
      eventTypes: true,
    },
  });
  return res.status(200).json({ books });
}
