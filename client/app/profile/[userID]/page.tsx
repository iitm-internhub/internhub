import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const ProfileSettings = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="py-12 sm:py-16">
        <div className="container px-4">
          <div className="grid gap-6 sm:gap-8">
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h2 className="text-2xl font-bold tracking-tight">
                      Account Information
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Update your account information.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" value="Sarah Dayan" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value="sarah.dayan@example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-4 items-start sm:flex sm:gap-4 sm:justify-end">
                    <Button size="sm">Save</Button>
                  </div>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Picture</CardTitle>
                    <CardDescription>
                      Update your profile picture.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <img
                        alt="Your profile picture"
                        className="rounded-full"
                        height="96"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "96/96",
                          objectFit: "cover",
                        }}
                        width="96"
                      />
                      <div className="space-y-2">
                        <Button size="sm">Upload new picture</Button>
                        <Input
                          accept="image/*"
                          className="sr-only"
                          id="file"
                          type="file"
                        />
                        <Button size="sm" variant="outline">
                          Remove picture
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                      Manage your notification preferences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between">
                        <span>New messages</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Friend requests</span>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Manage your security preferences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Button size="sm">Change Password</Button>
                      </div>
                      <div>
                        <Button size="sm">
                          Enable Two-factor Authentication
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
