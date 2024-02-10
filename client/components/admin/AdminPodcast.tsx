import React from "react";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import Image from "next/image";

import PlayIcon from "@/public/icons/play.svg";
import DownloadIcon from "@/public/icons/download.svg";
import LocationIcon from "@/public/icons/map.svg";
import CalendarIcon from "@/public/icons/calendar.svg";
import PlusIcon from "@/public/icons/plus.svg";

import PodcastBanner from "@/public/images/podcast-banner.jpg";

interface cardInterface {
  _id: string;
  banner: string | any;
  title: string;
  description: string;
  date: string;
  location: string;
}

const AdminPodcast: React.FC = () => {
  const cards: Array<cardInterface> = [
    {
      _id: "1",
      banner: PodcastBanner,
      title: "The Acquiring Mindset",
      description: "Hosted by John Doe",
      date: new Date("March 25, 2023").toDateString(),
      location: "New York, NY",
    },
    {
      _id: "2",
      banner: PodcastBanner,
      title: "The Acquiring Mindset",
      description: "Hosted by John Doe",
      date: new Date("March 25, 2023").toDateString(),
      location: "New York, NY",
    },
    {
      _id: "3",
      banner: PodcastBanner,
      title: "The Acquiring Mindset",
      description: "Hosted by John Doe",
      date: new Date("March 25, 2023").toDateString(),
      location: "New York, NY",
    },
    {
      _id: "4",
      banner: PodcastBanner,
      title: "The Acquiring Mindset",
      description: "Hosted by John Doe",
      date: new Date("March 25, 2023").toDateString(),
      location: "New York, NY",
    },
    {
      _id: "5",
      banner: PodcastBanner,
      title: "The Acquiring Mindset",
      description: "Hosted by John Doe",
      date: new Date("March 25, 2023").toDateString(),
      location: "New York, NY",
    },
  ];

  return (
    <section className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards ? (
        cards.map((card) => (
          <Card
            className="w-full shadow-lg backdrop-blur-lg shadow-[#ccbb82] dark:shadow-blue-900 max-w-sm mx-auto"
            key={card._id}
          >
            <div className="relative">
              <div className="aspect-[16/9] rounded-t-lg overflow-hidden">
                <Image
                  alt="Podcast cover"
                  height="337"
                  src={PodcastBanner}
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
            <CardContent className="p-6">
              <div className="grid gap-2">
                <h3 className="text-base font-bold leading-none">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500">{card.description}</p>
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
                  {card.date}
                  {"\n                  "}
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    alt="location_icon"
                    src={LocationIcon}
                    height={50}
                    width={50}
                    className="h-4 w-4 flex-shrink-0 dark:invert"
                  />
                  <span className="font-semibold">Location:</span>
                  {card.location}
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
        ))
      ) : (
        <p>no podcasts</p>
      )}
    </section>
  );
};

export default AdminPodcast;
