"use client";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import InternHubLogo from "@/public/images/internhub.jpg";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios-instance";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";
// export const metadata: Metadata = {
//   title: "InternHub - Events",
//   description: "IINTM Placement cell",
// };
interface EventInterface {
  id: string;
  eventTitle: string;
  eventDescription: string;
  eventDate: Date;
  eventLocation: string;
  eventSpeakers: string;
  eventRegistrationURL: string;
  eventImageIds: Array<string>;
}

const UPLOADCARE_BASE_URL = "https://ucarecdn.com/";

const Event = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [events, setEvents] = useState<EventInterface[] | null>();

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get("/api/v1/event/all");

        if (data?.events) {
          setEvents(data.events);
        }
      } catch (error) {
        const err = error as AxiosError;
        const data: any = err?.response?.data;
        toast.error(data?.message);
      } finally {
        setIsLoading(false);
      }
    };

    getAllEvents();
  }, []);

  if (isLoading) {
    return (
      <>
        <Loader />
        <p className="font-semibold text-sm text-center my-4">
          Fetching Events. Please be patience{" "}
        </p>
      </>
    );
  }

  return (
    <section
      key="1"
      className="w-full py-12 grid grid-rows-1 sm:grid-rows-2  gap-8 md:py-24 lg:py-32"
    >
      {!events ? (
        <p>Coming soon</p>
      ) : (
        <>
          {events.map((event: EventInterface) => (
            <div className="container p-4 md:p-6 gap-4 rounded-md shadow-lg backdrop-blur-lg dark:shadow-blue-900 ">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <Carousel className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        alt="Image 1"
                        height={310}
                        src={InternHubLogo}
                        style={{
                          aspectRatio: "550/310",
                          objectFit: "cover",
                        }}
                        width={550}
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      {event.eventTitle}
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      {event.eventDescription}
                    </p>
                    <p className="max-w-[600px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                      <span>Speakers: {event.eventSpeakers}</span>
                    </p>
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li>
                      <CalendarIcon className="mr-2 inline-block h-4 w-4" />
                      {new Date(event.eventDate).toDateString()}{" "}
                    </li>
                    <li>
                      <LocateIcon className="mr-2 inline-block h-4 w-4" />
                      {event.eventLocation}
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href={event.eventRegistrationURL}
                    >
                      {" "}
                      Register Now
                    </Link>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </section>
  );
};

function CalendarIcon(a: any) {
  return (
    <svg
      {...a}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function LocateIcon(b: any) {
  return (
    <svg
      {...b}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
export default Event;
