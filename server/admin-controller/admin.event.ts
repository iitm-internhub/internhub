import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import Event, { EventSchemaInterface } from "../model/event.model";

import nodeCache from "node-cache";

const cache = new nodeCache();

const createEventDetails = async (req: Request, res: Response) => {
  try {
    const {
      eventTitle,
      eventDescription,
      eventDate,
      eventLocation,
      eventRegistrationURL,
      eventSpeakers,
      eventImageIds,
    }: EventSchemaInterface = req.body;

    if (
      !eventTitle ||
      !eventDate ||
      !eventDescription ||
      !eventLocation ||
      !eventRegistrationURL ||
      !eventSpeakers ||
      !eventImageIds
    ) {
      return res.status(400).json({
        success: false,
        message: "please provide all the details",
      });
    }

    const newEvent = new Event({
      eventTitle,
      eventDescription,
      eventDate,
      eventLocation,
      eventRegistrationURL,
      eventSpeakers,
      eventImageIds,
    });

    const eventCreated = await newEvent.save();

    if (cache.has("events")) {
      cache.del("events");
    }

    if (Object.keys(eventCreated).length === 0) {
      return res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }

    return res.status(201).json({
      success: true,
      message: "event created successfully",
      event: eventCreated,
    });
  } catch (err) {
    console.log("error while uploading events");
    handleError(err, res);
  }
};

const getAllEvents = async (req: Request, res: Response) => {
  try {
    if (cache.has("events-admin")) {
      const events = cache.get("events-admin");
      return res.status(200).json({
        sucess: true,
        message: "all events fetched successfully",
        events,
      });
    }

    const events = await Event.find({});

    cache.set("events-admin", events, 60);

    return res.status(200).json({
      sucess: true,
      message: "all events fetched successfully",
      events,
    });
  } catch (err) {
    handleError(err, res);
  }
};

export { createEventDetails, getAllEvents };
