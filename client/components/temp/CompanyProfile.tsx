
import { Input } from "@/components/ui/input"
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link"
import { JSX, SVGProps } from "react";
export const metadata: Metadata = {
    title: "InternHub - Companies",
    description: "IINTM Placement cell",
};

const CompanyProfile = () => {
    return (
        <div key="1" className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
            <header className="w-full py-6 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Company Profiles</h1>
                    <div className="relative w-64">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <Input className="pl-10" placeholder="Search companies..." type="search" />
                    </div>
                </div>
            </header>
            <main className="flex-1 bg-gray-50 dark:bg-gray-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/*TODO: Add For each to go over all company in db and render hem in this div */}
                        <div className="flex flex-col bg-white dark:bg-gray-900 shadow rounded-lg p-6">
                            <Image
                                alt="Company Logo"
                                className="mb-4"
                                height="80"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width="80"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Company Name</h2>
                            <p className="text-gray-500 dark:text-gray-400 flex-grow">
                                Brief description about the company. This is just a placeholder text.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                href="#"
                            >
                                Read More
                            </Link>
                        </div>
                        <div className="flex flex-col bg-white dark:bg-gray-900 shadow rounded-lg p-6">
                            <Image
                                alt="Company Logo"
                                className="mb-4"
                                height="80"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width="80"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Company Name</h2>
                            <p className="text-gray-500 dark:text-gray-400 flex-grow">
                                Brief description about the company. This is just a placeholder text.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                href="#"
                            >
                                Read More
                            </Link>
                        </div>
                        <div className="flex flex-col bg-white dark:bg-gray-900 shadow rounded-lg p-6">
                            <Image
                                alt="Company Logo"
                                className="mb-4"
                                height="80"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width="80"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Company Name</h2>
                            <p className="text-gray-500 dark:text-gray-400 flex-grow">
                                Brief description about the company. This is just a placeholder text.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                href="#"
                            >
                                Read More
                            </Link>
                        </div>
                        <div className="flex flex-col bg-white dark:bg-gray-900 shadow rounded-lg p-6">
                            <Image
                                alt="Company Logo"
                                className="mb-4"
                                height="80"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width="80"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Company Name</h2>
                            <p className="text-gray-500 dark:text-gray-400 flex-grow">
                                Brief description about the company. This is just a placeholder text.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                href="#"
                            >
                                Read More
                            </Link>
                        </div>
                        <div className="flex flex-col bg-white dark:bg-gray-900 shadow rounded-lg p-6">
                            <Image
                                alt="Company Logo"
                                className="mb-4"
                                height="80"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width="80"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Company Name</h2>
                            <p className="text-gray-500 dark:text-gray-400 flex-grow">
                                Brief description about the company. This is just a placeholder text.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                href="#"
                            >
                                Read More
                            </Link>
                        </div>
                        <div className="flex flex-col bg-white dark:bg-gray-900 shadow rounded-lg p-6">
                            <Image
                                alt="Company Logo"
                                className="mb-4"
                                height="80"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width="80"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Company Name</h2>
                            <p className="text-gray-500 dark:text-gray-400 flex-grow">
                                Brief description about the company. This is just a placeholder text.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                href="#"
                            >
                                Read More
                            </Link>
                        </div>
                        <div className="flex flex-col bg-white dark:bg-gray-900 shadow rounded-lg p-6">
                            <Image
                                alt="Company Logo"
                                className="mb-4"
                                height="80"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width="80"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Company Name</h2>
                            <p className="text-gray-500 dark:text-gray-400 flex-grow">
                                Brief description about the company. This is just a placeholder text.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                href="#"
                            >
                                Read More
                            </Link>
                        </div>
                        <div className="flex flex-col bg-white dark:bg-gray-900 shadow rounded-lg p-6">
                            <Image
                                alt="Company Logo"
                                className="mb-4"
                                height="80"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width="80"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Company Name</h2>
                            <p className="text-gray-500 dark:text-gray-400 flex-grow">
                                Brief description about the company. This is just a placeholder text.
                            </p>
                            <Link
                                className="mt-4 inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                href="#"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}

export default CompanyProfile;