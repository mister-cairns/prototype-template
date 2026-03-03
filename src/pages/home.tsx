import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LayoutGridIcon, RocketIcon } from "lucide-react";

export function HomePage() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8">
          <span className="text-6xl">🐿️</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Prototype starter
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Internal prototyping tool for PRD research. Build beautiful prototypes
          with our design system.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RocketIcon className="size-5" />
                Demo
              </CardTitle>
              <CardDescription>
                Your vibe-coded prototype lives here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm">
                This is where your custom prototype will be built. Start
                creating your demo experience.
              </p>
              <Button
                className="w-full"
                render={<Link to="/prototype" />}
                nativeButton={false}
              >
                View Demo
              </Button>
            </CardContent>
          </Card>

          <Card className="text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LayoutGridIcon className="size-5" />
                Components
              </CardTitle>
              <CardDescription>
                Browse all available UI components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm">
                Explore the full kitchen sink of shadcn/ui components with
                examples and usage patterns.
              </p>
              <Button
                className="w-full"
                render={<Link to="/components" />}
                nativeButton={false}
              >
                View Components
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
