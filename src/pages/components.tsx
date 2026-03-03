import { Link } from "react-router-dom";

import { ComponentExample } from "@/components/component-example";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export function ComponentsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="border-b">
        <div className="mx-auto flex items-center gap-4 p-4">
          <Button
            variant="ghost"
            size="sm"
            render={<Link to="/" />}
            nativeButton={false}
          >
            <ArrowLeftIcon data-icon="inline-start" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-xl">🐿️</span>
            <span className="font-medium">Component Library</span>
          </div>
        </div>
      </div>

      {/* Component Examples */}
      <ComponentExample />
    </div>
  );
}
