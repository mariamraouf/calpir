import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";

const CustomQuoteForm = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Custom Quote Form submitted!");
    toast.success("Your custom quote request has been sent!");
    setOpen(false); // Close the dialog
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Get a Free Consultation / Custom Quote</DialogTitle>
        <DialogDescription>
          Tell us your specific needs and we'll provide a tailored quote.
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
          <Label htmlFor="requirements" className="text-right">
            Requirements
          </Label>
          <Textarea id="requirements" placeholder="Describe your project requirements..." className="col-span-3" />
        </div>
        <DialogFooter>
          <Button type="submit">Request Quote</Button>
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

export default CustomQuoteForm;