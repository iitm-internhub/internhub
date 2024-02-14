import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import Event from "../model/event.model";

import nodeCache from "node-cache";

const cache = new nodeCache();

const getAllEvents = async (req: Request, res: Response) => {
  try {
    if (cache.has("events")) {
      const events = cache.get("events");
      return res.status(200).json({
        success: true,
        message: "events fetched successfully",
        events,
      });
    }
    const events = await Event.find({});

    cache.set("events", events, 60);

    if (Object.keys(events).length === 0) {
      return res.status(404).json({
        success: false,
        message: "no events found, come back later",
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
