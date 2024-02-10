import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card } from "@/components/ui/card";

import PlayIcon from "@/public/icons/play.svg";
import DownloadIcon from "@/public/icons/download.svg";
import LocationIcon from "@/public/icons/map.svg";
import CalendarIcon from "@/public/icons/calendar.svg";
import DeleteIcon from "@/public/icons/delete.svg";
import PodcastBanner from "@/public/images/podcast-banner.jpg";
import Image from "next/image";

const AdminPodcastPanel = () => {
  return (
    <div className="flex gap-4 flex-col my-4">
      <Card>
        <div className="relative sm:px-0 px-4">
          <div className="aspect-[3/1] overflow-hidden -mx-4 sm:-mx-0  rounded-t-xl">
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
            <Button className="mr-2" size="sm" variant="ghost">
              <Image
                src={PlayIcon}
                height={50}
                width={50}
                className="h-4 w-4 mr-2.5"
                alt="play"
              />
              Play
            </Button>
            <Button size="sm" variant="ghost">
              <Image
                src={DownloadIcon}
                height={50}
                width={50}
                className="h-4 w-4 mr-2.5"
                alt="play"
              />
              Download
            </Button>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="grid gap-1 mb-4">
            <h1 className="text-lg font-bold leading-none">
              The Acquiring Mind
            </h1>
            <p className="text-sm leading-none">with Sarah Day</p>
          </div>
          <div className="grid gap-1 mb-4">
            <p className="text-sm leading-none">
              A podcast about the intersection of technology and humanity.
            </p>
          </div>
          <div className="grid gap-0.5 text-sm leading-none md:flex md:items-center md:justify-between md:gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={CalendarIcon}
                height={50}
                width={50}
                className="h-4 w-4 opacity-50"
                alt="play"
              />
              <span className="opacity-70">Last episode: 2 days ago</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LocationIcon}
                height={50}
                width={50}
                className="h-4 w-4 opacity-50"
                alt="play"
              />
              <span className="opacity-70">San Francisco, CA</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex p-6 gap-4">
          <Button size="lg">Edit</Button>
          <Button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Delete
            <Image
              src={DeleteIcon}
              alt="Delete Icon"
              height={20}
              width={20}
              className="ml-2"
            />
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <div className="relative  sm:px-0 px-4">
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
            <Button className="mr-2" size="sm" variant="ghost">
              <Image
                src={PlayIcon}
                height={50}
                width={50}
                className="h-4 w-4 mr-2.5"
                alt="play"
              />
              Play
            </Button>
            <Button size="sm" variant="ghost">
              <Image
                src={DownloadIcon}
                height={50}
                width={50}
                className="h-4 w-4 mr-2.5"
                alt="play"
              />
              Download
            </Button>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="grid gap-1 mb-4">
            <h1 className="text-lg font-bold leading-none">
              The Acquiring Mind
            </h1>
            <p className="text-sm leading-none">with Sarah Day</p>
          </div>
          <div className="grid gap-1 mb-4">
            <p className="text-sm leading-none">
              A podcast about the intersection of technology and humanity.
            </p>
          </div>
          <div className="grid gap-0.5 text-sm leading-none md:flex md:items-center md:justify-between md:gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={CalendarIcon}
                height={50}
                width={50}
                className="h-4 w-4 opacity-50"
                alt="play"
              />
              <span className="opacity-70">Last episode: 2 days ago</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LocationIcon}
                height={50}
                width={50}
                className="h-4 w-4 opacity-50"
                alt="play"
              />
              <span className="opacity-70">San Francisco, CA</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex p-6 gap-4">
          <Button size="lg">Edit</Button>
          <Button size="lg" variant="outline">
            Delete
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <div className="relative  sm:px-0 px-4">
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
            <Button className="mr-2" size="sm" variant="ghost">
              <Image
                src={PlayIcon}
                height={50}
                width={50}
                className="h-4 w-4 mr-2.5"
                alt="play"
              />
              Play
            </Button>
            <Button size="sm" variant="ghost">
              <Image
                src={DownloadIcon}
                height={50}
                width={50}
                className="h-4 w-4 mr-2.5"
                alt="play"
              />
              Download
            </Button>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="grid gap-1 mb-4">
            <h1 className="text-lg font-bold leading-none">
              The Acquiring Mind
            </h1>
            <p className="text-sm leading-none">with Sarah Day</p>
          </div>
          <div className="grid gap-1 mb-4">
            <p className="text-sm leading-none">
              A podcast about the intersection of technology and humanity.
            </p>
          </div>
          <div className="grid gap-0.5 text-sm leading-none md:flex md:items-center md:justify-between md:gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={CalendarIcon}
                height={50}
                width={50}
                className="h-4 w-4 opacity-50"
                alt="play"
              />
              <span className="opacity-70">Last episode: 2 days ago</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LocationIcon}
                height={50}
                width={50}
                className="h-4 w-4 opacity-50"
                alt="play"
              />
              <span className="opacity-70 dark:invert dark:opacity-100">
                San Francisco, CA
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex p-6 gap-4">
          <Button size="lg">Edit</Button>
          <Button size="lg" variant="outline">
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default AdminPodcastPanel;
