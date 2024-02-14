import { Button } from "@/components/ui/button";

const ComingSoon = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="sm:text-[200px] text-[100px] font-bold text-[#E0E0E0]">
        404
      </div>
      <div className="text-center">
        <h1 className="mb-2 sm:text-6xl text-3xl font-bold text-gray-800">
          Coming Soon
        </h1>
        <p className="mb-4 sm:text-lg text-sm text-gray-600">
          The page you are trying to access is under construction.
          <br />
          Please check back later for updates.
        </p>
        <Button className="mt-4" size="sm">
          Take me back to home page
        </Button>
      </div>
    </div>
  );
};

export default ComingSoon;
