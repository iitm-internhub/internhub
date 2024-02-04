
import { Metadata } from "next";
import Link from "next/link"
import { JSX, SVGProps } from "react"
export const metadata: Metadata = {
    title: "InternHub - Teams",
    description: "IINTM Placement cell",
};

const Resources = () => {
    return (
        <section key="1" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Resources for Success
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            A curated list of resources to help you excel in your college internship.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <div className="rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <MapIcon className="h-6 w-6 mb-2" />
                            <h3 className="text-xl font-bold mb-2">Roadmaps</h3>
                            <p className="text-gray-500 mb-4">
                                Detailed roadmaps for specific domains to guide your learning journey.
                            </p>
                            <Link className="text-blue-600 hover:underline" href="#">
                                Explore Roadmaps
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <BookIcon className="h-6 w-6 mb-2" />
                            <h3 className="text-xl font-bold mb-2">College Books</h3>
                            <p className="text-gray-500 mb-4">A collection of essential books for your college curriculum.</p>
                            <Link className="text-blue-600 hover:underline" href="#">
                                Browse Books
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <PowerIcon className="h-6 w-6 mb-2" />
                            <h3 className="text-xl font-bold mb-2">Other Resources</h3>
                            <p className="text-gray-500 mb-4">Additional resources to enhance your knowledge and skills.</p>
                            <Link className="text-blue-600 hover:underline" href="#">
                                View Resources
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
    )
}


function MapIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
            <line x1="9" x2="9" y1="3" y2="18" />
            <line x1="15" x2="15" y1="6" y2="21" />
        </svg>
    )
}


function PowerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
            <line x1="12" x2="12" y1="2" y2="12" />
        </svg>
    )
}

export default Resources;