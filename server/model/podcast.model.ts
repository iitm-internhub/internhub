import mongoose, { Schema } from "mongoose";

export interface PodcastSchemaInterface {
  podcastTitle: string;
  podcastDescription: string;
  podcastDate: Date;
  podcastBanner: string;
  podcastYouTubeURL: string;
}

const podcastSchema: Schema = new mongoose.Schema(
  {
    podcastTitle: { type: String, min: 4, required: true },
    podcastDescription: { type: String, min: 20, required: true },
    podcastDate: { type: Date, required: true },
    podcastBanner: { type: String, min: 4, required: true },
    podcastYouTubeURL: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Podcast = mongoose.model("podcast", podcastSchema);
export default Podcast;
