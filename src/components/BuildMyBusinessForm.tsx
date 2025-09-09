import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";

const BuildMyBusinessForm = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Build My Business Form submitted!");
    toast.success("Your business plan request has been sent!");
    setOpen(false); // Close the dialog
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Build My Business</DialogTitle>
        <DialogDescription>
          Tell us about your business idea and we'll help you get started.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" defaultValue="" placeholder="Your Name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input id="email" defaultValue="" placeholder="Your Email" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="businessIdea" className="text-right">
            Business Idea
          </Label>
          <Textarea id="businessIdea" placeholder="Describe your business idea..." className="col-span-3" />
        </div>
        <DialogFooter>
          <Button type="submit">Submit Request</Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default BuildMyBusinessForm;