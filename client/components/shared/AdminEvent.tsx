import Link from "next/link";
import Image from "next/image";

import Event from "@/public/images/event.jpeg";
import DeleteIcon from "@/public/icons/delete.svg";
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
  ];

  return (
    <>
      <Button className="w-full my-2">Add New events</Button>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
        {eventCardList.map((event, index) => (
          <div
            key={index}
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
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Delete
                  {/* <svg
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
                  </svg> */}
                  <svg
                    version="1.1"
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 14 10"
                  >
                    <g>
                      <path
                        style="fill:#B3404A;"
                        d="M182.746,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313
		c7.905,0,14.313,6.409,14.313,14.313v91.604C197.06,415.895,190.652,422.305,182.746,422.305z"
                      />
                      <path
                        style="fill:#B3404A;"
                        d="M251.808,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313
		c7.905,0,14.313,6.409,14.313,14.313v91.604C266.121,415.895,259.713,422.305,251.808,422.305z"
                      />
                      <path
                        style="fill:#B3404A;"
                        d="M320.869,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313
		c7.905,0,14.313,6.409,14.313,14.313v91.604C335.182,415.895,328.774,422.305,320.869,422.305z"
                      />
                      <path
                        style="fill:#B3404A;"
                        d="M434.571,135.961c-8.435-13.251-21.524-22.423-36.856-25.828
		c-7.712-1.722-15.362,3.152-17.076,10.869c-1.713,7.718,3.153,15.361,10.869,17.076c7.869,1.749,14.585,6.455,18.913,13.255
		c4.328,6.8,5.75,14.879,4.002,22.748l-7.423,33.418L99.603,139.224l7.423-33.42c3.608-16.243,19.754-26.519,36.002-22.917
		l145.2,32.249c7.713,1.713,15.361-3.153,17.076-10.869c1.713-7.718-3.153-15.361-10.869-17.076l-82.44-18.309l8.327-37.493
		l122.96,27.308l-11.431,51.467c-1.713,7.718,3.153,15.361,10.869,17.076c1.045,0.232,2.088,0.344,3.116,0.344
		c6.563,0,12.478-4.542,13.96-11.213l14.534-65.44c0.823-3.706,0.14-7.587-1.898-10.789c-2.038-3.202-5.266-5.463-8.972-6.286
		L212.555,0.342c-7.713-1.709-15.362,3.152-17.076,10.869l-11.43,51.466l-34.815-7.732C117.579,47.909,86.11,67.948,79.079,99.6
		l-10.526,47.391c-1.713,7.718,3.153,15.361,10.869,17.076l190.666,42.347H114.402c-7.905,0-14.313,6.409-14.313,14.313v276.96
		c0,7.904,6.408,14.313,14.313,14.313h274.81c7.905,0,14.313-6.409,14.313-14.313V236.049l11.243,2.498
		c1.026,0.229,2.067,0.341,3.103,0.341c2.701,0,5.37-0.764,7.686-2.239c3.202-2.038,5.463-5.266,6.288-8.972l10.526-47.391
		C445.776,164.954,443.006,149.212,434.571,135.961z M374.9,483.374H128.716V235.04H374.9V483.374z"
                      />
                    </g>
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
