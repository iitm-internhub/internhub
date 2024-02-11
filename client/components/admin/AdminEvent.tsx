"use client";

import Link from "next/link";
import Image from "next/image";

import Event from "@/public/images/event.jpeg";
import DeleteIcon from "@/public/icons/delete.svg";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

import PlayIcon from "@/public/icons/play.svg";
import DownloadIcon from "@/public/icons/download.svg";
import LocationIcon from "@/public/icons/map.svg";
import CalendarIcon from "@/public/icons/calendar.svg";
import PlusIcon from "@/public/icons/plus.svg";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios-instance";

import Loader from "../shared/Loader";

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

const AdminEventPanel = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [events, setEvents] = useState<EventInterface[] | null>();

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("admin_access_token");
        const { data } = await axiosInstance.get("/api/v1/event-admin/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
    <>
      <Link href="/admin/event">
        <Button className="m-2">Create new event</Button>
      </Link>

      {!events ? (
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
          {events.map((event) => (
            <Card
              className="w-full  shadow-lg backdrop-blur-lg shadow-[#ccbb82] dark:shadow-blue-900 max-w-sm mx-auto"
              key={event.id}
            >
              <div className="relative">
                <div className="aspect-[16/9] rounded-t-lg overflow-hidden">
                  <Image
                    alt="Event cover"
                    height="337"
                    src={`${UPLOADCARE_BASE_URL}${event.eventImageIds[0]}/`}
                    style={{
                      aspectRatio: "600/337",
                      objectFit: "cover",
                    }}
                    width="600"
                    className="backdrop-brightness-50"
                  />
                </div>
              </div>
              <CardContent className="p-6 max-h-[16vh] min-h-[16vh] overflow-auto no-scrollbar">
                <div className="grid gap-2">
                  <h3 className="text-base font-bold leading-none">
                    {event.eventTitle}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {event.eventDescription}
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
                    {new Date(event.eventDate).toDateString()}
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
                    {event.eventLocation}
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

export default AdminEventPanel;
