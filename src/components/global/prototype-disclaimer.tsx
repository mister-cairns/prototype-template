import { HelpCircleIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PrototypeDisclaimer() {
  const location = useLocation();

  // Don't show on home or components pages
  if (location.pathname === "/" || location.pathname === "/components") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md size-10 bg-background cursor-pointer"
            />
          }
        >
          <HelpCircleIcon className="size-5" />
          <span className="sr-only">Prototype Info</span>
        </PopoverTrigger>
        <PopoverContent align="end" side="top" className="w-64 mb-2">
          <PopoverHeader>
            <PopoverTitle>Prototype Only</PopoverTitle>
            <PopoverDescription>
              This is a generated prototype for demonstration purposes. Data and
              functionality may not be real or persistent.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  );
}
