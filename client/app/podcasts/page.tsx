"use client";

import React, { useEffect, useState } from "react";
import Loader from "@/components/shared/Loader";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios-instance";
import Podcasts from "@/components/shared/Podcasts";

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

const AdminPodcastPanel = () => {
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
        toast.error(`${data} something went wrong`);
      } finally {
        setIsLoading(false);
      }
    };

    getAllPodcasts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 my-20">
        <p className="font-semibold">wait, we are fetching latest podcasts</p>
        <Loader />
      </div>
    );
  }

  console.log(podcasts);

  return (
    <section className="mx-auto max-w-screen-xl px-10 grid gap-6 my-10">
      {!podcasts ? (
        <p>Coming soon</p>
      ) : (
        <>
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
export default AdminPodcastPanel;
