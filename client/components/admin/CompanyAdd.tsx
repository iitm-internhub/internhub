"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import companyFormSchema from "@/lib/schemas/company.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

const AddCompany = () => {
  const form = useForm<z.infer<typeof companyFormSchema>>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      companyName: "",
      companyLocation: "",
      companyJobType: undefined,
      companyJobTitle: "",
      companyJobDescription: "",
      companyDescription: "",
      companyJobDate: undefined,
      companyLogo: { type: undefined, size: undefined },
      companyBanner: { type: undefined, size: undefined },
    },
  });
  const onSubmit = (values: z.infer<typeof companyFormSchema>) => {
    console.log(values);
  };
  return (
    <div
      key="1"
      className="mx-auto dark:shadow-blue-900 backdrop-blur-lg max-w-3xl space-y-8 shadow-lg backdrop-blur=lg p-3 m-3"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Upload Company Information</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill in the details below
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="company-name">Company Name</FormLabel>
                    <FormControl>
                      <Input
                        id="company-name"
                        placeholder="Acme Inc"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="company-location">Location</FormLabel>
                    <FormControl>
                      <Input
                        id="company-location"
                        placeholder="IITM"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
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
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="company-location">Job Title</FormLabel>
                    <FormControl>
                      <Input
                        id="company-location"
                        placeholder="Software Engineer"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="company-location">
                      Job Decription
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="company-location"
                        placeholder="Require an adept SE who can handle..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="company-location">
                      Company Decription
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        id="company-location"
                        placeholder="Enter a brief description of the company"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="specialized-field">
                Specialized Field
              </FormLabel>
              <Input
                id="specialized-field"
                placeholder="e.g. FinTech"
                required
              />
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="date">Date</FormLabel>
              <Input id="date" required type="date" />
            </div>
            <div className="space-y-2">
              <FormLabel>Logo Image Upload</FormLabel>
              <Input accept="image/*" id="logo" required type="file" />
            </div>
            <div className="space-y-2">
              <FormLabel>Banner Image Upload</FormLabel>
              <Input accept="image/*" id="banner" required type="file" />
            </div>
            <div className="space-y-2">
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddCompany;
