import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

import PlayIcon from "@/public/icons/play.svg";
import DownloadIcon from "@/public/icons/download.svg";
import CalendarIcon from "@/public/icons/calendar.svg";
import YoutubeIcon from "@/public/icons/youtube.svg";
import Link from "next/link";

interface PodcastsProps {
  id: string;
  podcastTitle: string;
  podcastDescription: string;
  podcastDate: string;
  podcastBanner: string;
  podcastYouTubeURL: string;
}

const Podcasts: React.FC<PodcastsProps> = ({
  id,
  podcastTitle,
  podcastBanner,
  podcastDescription,
  podcastDate,
  podcastYouTubeURL,
}) => {
  return (
    <Card
      className="shadow-lg backdrop-blur-lg shadow-gray-600 dark:shadow-blue-900 "
      key={id}
    >
      <div className="relative -mx-6 sm:px-0 px-4">
        <div className="aspect-[3/1] overflow-hidden rounded-t-xl">
          <Image
            alt="Podcast cover"
            className="object-cover w-full transition duration-150 hover:scale-110"
            height={5000}
            src={podcastBanner}
            style={{
              aspectRatio: "320/100",
              objectFit: "cover",
            }}
            width={5000}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end px-6 sm:pb-10 pb-6">
          <Button
            className="mr-2  dark:backdrop-blur-sm"
            size="sm"
            variant="ghost"
          >
            <Image
              src={PlayIcon}
              height={50}
              width={50}
              className="h-4 w-4 mr-2.5 dark:invert"
              alt="play"
            />
            Play
          </Button>
          <Button size="sm" className="dark:backdrop-blur-sm" variant="ghost">
            <Image
              src={DownloadIcon}
              height={50}
              width={50}
              className="h-4 w-4 mr-2.5 dark:invert "
              alt="play"
            />
            Download
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="grid gap-1 mb-4">
          <h1 className="text-lg font-bold leading-none">
            {podcastTitle.charAt(0).toUpperCase() + podcastTitle.slice(1)}
          </h1>
          {/* <p className="text-sm leading-none">{podcastGuest}</p> */}
        </div>
        <div className="grid gap-1 mb-4">
          <p className="text-sm leading-none">{podcastDescription}</p>
        </div>
        <div className="grid gap-0.5 text-sm leading-none md:flex md:items-center md:justify-between md:gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={CalendarIcon}
              height={50}
              width={50}
              className="h-4 w-4 dark:invert"
              alt="play"
            />
            <span>Date: {podcastDate}</span>
          </div>

          <Link
            href={podcastYouTubeURL}
            className="dark:text-white flex items-center gap-2"
            target="_blank"
          >
            <Image
              src={YoutubeIcon}
              height={50}
              width={50}
              className="h-4 w-4 dark:invert"
              alt="play"
            />
            <span className="font-semibold dark:text-white">Youtube</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Podcasts;
