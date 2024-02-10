import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card } from "@/components/ui/card";

import PlayIcon from "@/public/icons/play.svg";
import DownloadIcon from "@/public/icons/download.svg";
import LocationIcon from "@/public/icons/map.svg";
import CalendarIcon from "@/public/icons/calendar.svg";

import PodcastBanner from "@/public/images/podcast-banner.jpg";
import Image from "next/image";
import React from "react";

interface podcastInterface {
  _id: string;
  banner: string | any;
  title: string;
  description: string;
  guest: string;
  date: string;
  location: string;
}

const AdminPodcastPanel = () => {
  const podcasts: podcastInterface[] = [
    {
      _id: "1",
      banner: PodcastBanner,
      title: "The Acquiring Mind",
      description:
        "A podcast about the intersection of technology and humanity.",
      guest: "with Seedhe maut",
      date: new Date("March 24 2024").toDateString(),
      location: "San Francisco, CA",
    },
    {
      _id: "2",
      banner: PodcastBanner,
      title: "The Acquiring Mind",
      description:
        "A podcast about the intersection of technology and humanity.",
      guest: "with Seedhe maut",
      date: new Date("March 24 2024").toDateString(),
      location: "San Francisco, CA",
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-10 grid gap-6 my-10">
      {!podcasts ? (
        <></>
      ) : (
        podcasts.map((podcast: podcastInterface) => (
          <Card
            className="shadow-lg backdrop-blur-lg shadow-gray-600 dark:shadow-blue-900 "
            key={podcast._id}
          >
            <div className="relative -mx-6 sm:px-0 px-4">
              <div className="aspect-[3/1] overflow-hidden rounded-t-xl">
                <Image
                  alt="Podcast cover"
                  className="object-cover w-full transition duration-150 hover:scale-110"
                  height={5000}
                  src={PodcastBanner}
                  style={{
                    aspectRatio: "320/100",
                    objectFit: "cover",
                  }}
                  width={5000}
                />
                {/* <div className="absolute inset-0 bg-neutral-700 mix-blend-multiply" /> */}
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
                <Button
                  size="sm"
                  className="dark:backdrop-blur-sm"
                  variant="ghost"
                >
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
                  {podcast.title}
                </h1>
                <p className="text-sm leading-none">{podcast.guest}</p>
              </div>
              <div className="grid gap-1 mb-4">
                <p className="text-sm leading-none">{podcast.description}</p>
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
                  <span className="opacity-70">Date: {podcast.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={LocationIcon}
                    height={50}
                    width={50}
                    className="h-4 w-4 dark:invert"
                    alt="play"
                  />
                  <span className="opacity-70">{podcast.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </section>
  );
};
export default AdminPodcastPanel;
