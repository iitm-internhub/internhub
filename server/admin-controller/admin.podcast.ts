import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import Podcast, { PodcastSchemaInterface } from "../model/podcast.model";

import nodeCache from "node-cache";

const cache = new nodeCache();

const createPodcastDetails = async (req: Request, res: Response) => {
  try {
    const {
      podcastTitle,
      podcastDescription,
      podcastDate,
      podcastBanner,
      podcastYouTubeURL,
    }: PodcastSchemaInterface = req.body;

    console.log(req.body);

    if (
      !podcastTitle ||
      !podcastDescription ||
      !podcastDate ||
      !podcastBanner ||
      !podcastYouTubeURL
    ) {
      return res.status(400).json({
        success: false,
        message: "please provide all the details",
      });
    }

    const newPodcast = new Podcast({
      podcastTitle,
      podcastDescription,
      podcastDate,
      podcastBanner,
      podcastYouTubeURL,
    });

    const podcastCreated = await newPodcast.save();

    if (cache.has("podcasts")) {
      cache.del("podcasts");
    }

    if (Object.keys(podcastCreated).length === 0) {
      return res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }

    return res.status(201).json({
      success: true,
      message: "event created successfully",
      event: podcastCreated,
    });
  } catch (err) {
    console.log("error while uploading podcasts");
    handleError(err, res);
  }
};

const getAllPodcasts = async (req: Request, res: Response) => {
  try {
    if (cache.has("podcasts-admin")) {
      const events = cache.get("podcasts-admin");
      return res.status(200).json({
        sucess: true,
        message: "all events fetched successfully",
        events,
      });
    }

    const podcasts = await Podcast.find({});

    cache.set("podcasts-admin", podcasts, 60);

    return res.status(200).json({
      sucess: true,
      message: "all podcasts fetched successfully",
      podcasts,
    });
  } catch (err) {
    handleError(err, res);
  }
};

export { createPodcastDetails, getAllPodcasts };
