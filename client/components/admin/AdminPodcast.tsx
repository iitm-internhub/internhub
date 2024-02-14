"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import Image from "next/image";

import PlayIcon from "@/public/icons/play.svg";
import DownloadIcon from "@/public/icons/download.svg";
import LocationIcon from "@/public/icons/map.svg";
import CalendarIcon from "@/public/icons/calendar.svg";
import PlusIcon from "@/public/icons/plus.svg";

import PodcastBanner from "@/public/images/podcast-banner.jpg";
import Link from "next/link";
import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import Loader from "../shared/Loader";

interface PodcastInterface {
  _id: string;
  podcastTitle: string;
  podcastDescription: string;
  podcastDate: Date;
  podcastBanner: string;
  podcastYouTubeURL: string;
}
const UPLOADCARE_BASE_URL = "https://ucarecdn.com/";

const AdminPodcast: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [podcasts, setPodcasts] = useState<PodcastInterface[] | null>();

  useEffect(() => {
    const getAllPodcasts = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("admin_access_token");
        const { data } = await axiosInstance.get("/api/v1/podcast-admin/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (data?.podcasts) {
          setPodcasts(data.podcasts);
        }
      } catch (error) {
        const err = error as AxiosError;
        const data: any = err?.response?.data;
        toast.error(data?.message);
      } finally {
        setIsLoading(false);
      }
    };

    getAllPodcasts();
  }, []);
  if (isLoading) {
    return (
      <>
        <Loader />
        <p className="font-semibold text-sm text-center my-4">
          Fetching Podcasts. Please be patience{" "}
        </p>
      </>
    );
  }
  return (
    <>
      <Link href="/admin/podcast" className="">
        <Button className="my-2 mx-2">Add new podcast</Button>
      </Link>
      {!podcasts ? (
        <p className="text-center mt-10 font-bold text-xl">
          No event found{" "}
          <Link
            href="/admin/event"
            className="text-blue-500 underline underline-offset-2"
          >
            create one
          </Link>
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 mb-4 md:grid-cols-3 grid-cols-1 gap-6">
          {podcasts.map((podcast) => (
            <Card
              className="w-full  shadow-lg backdrop-blur-lg shadow-[#ccbb82] dark:shadow-blue-900 max-w-sm mx-auto"
              key={podcast._id}
            >
              <div className="relative">
                <div className="aspect-[16/9] rounded-t-lg overflow-hidden">
                  <Image
                    alt="Podcast cover"
                    height="337"
                    src={`${UPLOADCARE_BASE_URL}${podcast.podcastBanner}/`}
                    style={{
                      aspectRatio: "600/337",
                      objectFit: "cover",
                    }}
                    width="600"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="sm" variant="ghost" asChild>
                    <div>
                      <Image
                        alt="podcast_banner"
                        src={DownloadIcon}
                        height={50}
                        width={50}
                        className="h-4 w-4 dark:invert"
                      />
                      <span className="sr-only">Download</span>
                    </div>
                  </Button>
                  <Button className="mx-2" size="sm" variant="ghost" asChild>
                    <div>
                      <Image
                        src={PlayIcon}
                        alt="play_icon"
                        className="h-6 w-6 dark:invert"
                        height={50}
                        width={50}
                      />
                      <span className="sr-only">Play</span>
                    </div>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <div>
                      <Image
                        alt="plus_icon"
                        src={PlusIcon}
                        height={50}
                        width={50}
                        className="h-4 w-4 dark:invert"
                      />
                      <span className="sr-only">Add to library</span>
                    </div>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 max-h-[16vh] min-h-[16vh] overflow-auto no-scrollbar">
                <div className="grid gap-2">
                  <h3 className="text-base font-bold leading-none">
                    {podcast.podcastTitle}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {podcast.podcastDescription}
                  </p>
                </div>
              </CardContent>
              <div className="border-t border-gray-200 dark:border-gray-800">
                <CardFooter className="p-4 grid gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Image
                      alt="calendar_icon"
                      src={CalendarIcon}
                      height={50}
                      width={50}
                      className="h-4 w-4 flex-shrink-0 dark:invert"
                    />
                    <span className="font-semibold">Date:</span>
                    {new Date(podcast.podcastDate).toDateString()}
                    {"\n                  "}
                  </div>

                  <div className="flex gap-2 my-4">
                    <Button size="sm" variant="default">
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      Delete
                    </Button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminPodcast;
