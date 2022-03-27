import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    user,
    title,
    startTime,
    endTime,
    attendeName,
    attendeEmail,
    description,
  } = req.body;
  try {
    const newBook = await prisma.booking.create({
      data: {
        user,
        title,
        startTime,
        endTime,
        attendeName,
        attendeEmail,
        description,
      },
    });
    res
      .status(200)
      .json({ booking: newBook, message: "Booking Created Successfully" });
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
}
