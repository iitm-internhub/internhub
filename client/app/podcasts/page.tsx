"use client";

import React, { useEffect, useState } from "react";
import Loader from "@/components/shared/Loader";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios-instance";
import Podcasts from "@/components/shared/Podcasts";
import { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";
// export const metadata: Metadata = {
//   title: "InternHub - Podcasts",
//   description: "IINTM Placement cell",
// };
interface podcastInterface {
  _id: string;
  podcastBanner: string | any;
  podcastTitle: string;
  podcastDescription: string;
  podcastGuest: string;
  podcastDate: string;
  podcastLocation: string;
  podcastYouTubeURL: string;
}

const UPLOADCARE_BASE_URL = "https://ucarecdn.com/";

const Podcast = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [podcasts, setPodcasts] = useState<podcastInterface[] | null>();

  useEffect(() => {
    const getAllPodcasts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get("/api/v1/podcast/all");

        if (data?.podcasts) {
          setPodcasts(data.podcasts);
        }
      } catch (error) {
        const err = error as AxiosError;
        const data: any = err.response?.data;

        toast(`${data.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    getAllPodcasts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 my-20">
        <Loader />
        <p className="font-semibold">wait, we are fetching latest podcasts</p>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-screen-xl px-10 grid gap-6 my-10">
      {!podcasts ? (
        <ComingSoon />
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center">Podcasts</h1>
          {podcasts.map((podcast: podcastInterface) => (
            <Podcasts
              key={podcast._id}
              id={podcast._id}
              podcastTitle={podcast.podcastTitle}
              podcastBanner={`${UPLOADCARE_BASE_URL}/${podcast.podcastBanner}/`}
              podcastYouTubeURL={podcast.podcastYouTubeURL}
              podcastDescription={podcast.podcastDescription}
              podcastDate={new Date(podcast.podcastDate).toDateString()}
            />
          ))}
        </>
      )}
    </section>
  );
};
export default Podcast;
