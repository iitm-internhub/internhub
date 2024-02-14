import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import Podcast from "../model/podcast.model";

import nodeCache from "node-cache";

const cache = new nodeCache();

const getAllPodcasts = async (req: Request, res: Response) => {
  try {
    if (cache.has("podcasts")) {
      const podcasts = cache.get("podcasts");
      return res.status(200).json({
        success: true,
        message: "podcasts fetched successfully",
        podcasts,
      });
    }

    const podcasts = await Podcast.find({});

    cache.set("podcasts", podcasts, 60);

    if (Object.keys(podcasts).length === 0) {
      return res.status(404).json({
        success: false,
        message: "no podcast found, come back later",
      });
    }

    return res.status(200).json({
      success: true,
      message: "podcasts fetched successfully",
      podcasts,
    });
  } catch (err) {
    handleError(err, res);
  }
};

export { getAllPodcasts };
