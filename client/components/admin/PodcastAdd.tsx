import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AddPodcast = () => {
  return (
    <Card className="w-full mx-auto my-auto max-w-3xl">
      <CardHeader className="space-y-1">
        <CardTitle>Upload a new episode</CardTitle>
        <CardDescription>
          Fill out the form below to upload a new episode to your podcast.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter the title" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="youtube">YouTube URL</Label>
            <Input
              id="youtube"
              placeholder="Enter the YouTube URL"
              required
              type="url"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="datetime">Date and Time</Label>
            <Input id="datetime" required type="datetime-local" />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea
            className="min-h-[100px]"
            id="description"
            placeholder="Enter the description"
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="file">Thumbnail</Label>
          <Input id="file" type="file" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Upload</Button>
      </CardFooter>
    </Card>
  );
};

export default AddPodcast;
