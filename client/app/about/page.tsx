const AboutUs = () => {
  return (
    <>
      <div className=" w-full py-12 lg:py-24 xl:py-32">
        <div className="container grid items-center gap-8 px-4 text-center md:gap-10 lg:gap-16 lg:px-40">
          <div className="space-y-3">
            <h1 className="p-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Us
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400 text-justify">
              The Internship Cell at Institute of Innovation in Technology &
              Management serves as a bridge between academia and industry,
              facilitating valuable experiential learning opportunities for
              students across various disciplines. Our primary goal is to
              provide students with hands-on exposure to real-world work
              environments, helping them apply classroom knowledge to practical
              scenarios and develop essential skills for their future careers.
              Overall, the Internhub Cell strives to empower students to become
              versatile, adaptable professionals prepared to make meaningful
              contributions in their chosen fields.
            </p>
          </div>
        </div>
        <div className="container max-w-3xl grid items-start gap-6 px-4 py-10 text-left md:py-12 md:gap-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-12 xl:py-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Our Mission</h2>
            <p className="text-gray-500 md:text-xl/relaxed text-justify xl:text-base/relaxed dark:text-gray-400">
              To empower students with industry-relevant skills, practical
              experience, and professional networks, enabling them to excel in
              their chosen fields and contribute positively to society.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Our Vision</h2>
            <p className="text-gray-500 md:text-xl/relaxed text-justify xl:text-base/relaxed dark:text-gray-400 backdrop-blur-lg">
              To be recognized as a leading institution for fostering
              innovation, entrepreneurship, and career development through
              dynamic internship programs, guest lectures and industry visits
              equipping students with the tools and experiences necessary to
              thrive in a rapidly evolving global landscape.
            </p>
          </div>
        </div>
        <div className="container max-w-3xl grid items-start gap-6 px-4 py-10 text-left md:py-12 md:gap-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-12 xl:py-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Core Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-500  md:gap-y-2  dark:text-gray-400">
              <li> Student-Centric Approach</li>
              <li> Excellence</li>
              <li> Professionalism</li>
              <li> Innovation</li>
              <li> Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
