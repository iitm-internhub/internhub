import { Button } from "@/components/ui/button";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AdminEventPanel = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <Tabs className="flex flex-col gap-2 items-start" defaultValue="events">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="events">Add New Event</TabsTrigger>
          <TabsTrigger value="posts">Add New Blog Post</TabsTrigger>
        </TabsList>
        <TabsContent className="p-1 mx-auto" value="events">
          <form className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="event-title">Title</Label>
              <Input id="event-title" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="event-date">Date</Label>
              <Input id="event-date" required type="date" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="event-description">Description</Label>
              <Textarea id="event-description" required />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center w-full">
                <label
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  htmlFor="dropzone-file"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 20 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    className="hidden"
                    id="dropzone-file"
                    multiple
                    type="file"
                  />
                </label>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Add Event
            </Button>
          </form>
        </TabsContent>
        <TabsContent className="p-1 mx-auto" value="posts">
          <form className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="post-title">Title</Label>
              <Input id="post-title" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="post-date">Date</Label>
              <Input id="post-date" required type="date" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="post-description">Description</Label>
              <Textarea id="post-description" required />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center w-full">
                <label
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  htmlFor="dropzone-file"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 20 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span>
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    className="hidden"
                    id="dropzone-file"
                    multiple
                    type="file"
                  />
                </label>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Add Blog Post
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default AdminEventPanel;
