import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import Event from "../model/event.model";

const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find({});

    if (Object.keys(events).length === 0) {
      return res.status(404).json({
        success: false,
        message: "no podcast found, come back later",
      });
    }

    return res.status(200).json({
      success: true,
      message: "events fetched successfully",
      events,
    });
  } catch (err) {
    handleError(err, res);
  }
};

export { getAllEvents };
