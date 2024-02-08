import Link from "next/link";
import Image from "next/image";

import Event from "@/public/images/event.jpeg";
import { Button } from "../ui/button";

const AdminEventPanel = () => {
  const eventCardList = [
    {
      image: Event,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so, far in reverse chronological order.",
      date: "20-10-2023",
    },
    {
      image: Event,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so, far in reverse chronological order.",
      date: "20-10-2023",
    },
    {
      image: Event,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so, far in reverse chronological order.",
      date: "20-10-2023",
    },
    {
      image: Event,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so, far in reverse chronological order.",
      date: "20-10-2023",
    },
    {
      image: Event,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so, far in reverse chronological order.",
      date: "20-10-2023",
    },
  ];

  return (
    <>
      <Button className="w-full my-4">Add New events</Button>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
        {eventCardList.map((event) => (
          <div
            key={1}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href="#">
              <Image
                className="rounded-t-lg"
                src={event.image}
                alt=""
                height={500}
                width={500}
              />
            </Link>
            <div className="p-5">
              <Link
                href="#"
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {event.title}
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {event.description}
              </p>
              <p className="mb-3 text-gray-700 dark:text-gray-400 text-sm font-medium">
                {event.date}
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Delete
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminEventPanel;
