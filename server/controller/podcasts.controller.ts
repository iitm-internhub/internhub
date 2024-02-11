import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import Podcast from "../model/podcast.model";

const getAllPodcasts = async (req: Request, res: Response) => {
  try {
    const podcasts = await Podcast.find({});

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
