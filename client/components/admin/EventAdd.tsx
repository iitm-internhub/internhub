import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AddEvent = () => {
  return (
    <Card className="m-4 max-w-screen">
      <CardContent className="p-4">
        <div className="grid gap-6 px-4 sm:grid-cols-2 sm:gap-8">
          <div className="space-y-6 mb-2">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                className="min-h-[128px] resize-none"
                id="description"
                required
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2 ">
              <Label htmlFor="date">Date</Label>
              <Input id="date" className="dark:invert" required type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" required type="time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" required />
            </div>
          </div>
        </div>
        <div className="space-y-6 px-4">
          <div className="space-y-2">
            <Label htmlFor="speakers">Speaker(s)</Label>
            <Input id="speakers" placeholder="Enter speaker name(s)" />
          </div>
          <div className="space-y-2">
            <Label>Event Banner</Label>
            <Input accept=".jpg, .jpeg, .png" id="file" type="file" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="registration-url">Registration URL</Label>
            <Input
              id="registration-url"
              placeholder="Enter registration URL"
              type="url"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2.5">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AddEvent;
