import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AddCompany = () => {
  return (
    <div
      key="1"
      className="mx-auto max-w-3xl space-y-8 shadow-lg backdrop-blur=lg p-3 m-3"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Upload Company Information</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill in the details below
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="company-name">Company Name</Label>
          <Input id="company-name" placeholder="Acme Inc" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="New York, NY" required />
        </div>
        <div className="space-y-2">
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium leading-none">
              Job Type
            </legend>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:border-blue-500 focus:bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                id="job-type"
              >
                <option value="remote">Remote</option>
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="space-y-2">
          <Label htmlFor="job-title">Job Title</Label>
          <Input id="job-title" placeholder="Software Engineer" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Job Description</Label>
          <Input
            id="location"
            placeholder="Require an adept SE who can handle..."
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company-description">Company Description</Label>
          <Textarea
            id="company-description"
            placeholder="Enter a brief description of the company"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="specialized-field">Specialized Field</Label>
          <Input id="specialized-field" placeholder="e.g. FinTech" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input id="date" required type="date" />
        </div>
        <div className="space-y-2">
          <Label>Logo Image Upload</Label>
          <Input accept="image/*" id="logo" required type="file" />
        </div>
        <div className="space-y-2">
          <Label>Banner Image Upload</Label>
          <Input accept="image/*" id="banner" required type="file" />
        </div>
        <div className="space-y-2">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default AddCompany;
