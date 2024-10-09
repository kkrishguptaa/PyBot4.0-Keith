"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SignInButtons } from "./navbar-auth";
import {} from "next-auth";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="relative z-10 flex items-center justify-between px-4 py-4 lg:px-6">
      <div className="text-2xl font-bold">PyBot</div>
      <div className="hidden md:flex space-x-4">
        <Link
          className="text-foreground/60 hover:text-foreground transition-colors"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-foreground/60 hover:text-foreground transition-colors"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="text-foreground/60 hover:text-foreground transition-colors"
          href="#"
        >
          Docs
        </Link>
        <Link
          className="text-foreground/60 hover:text-foreground transition-colors"
          href="#"
        >
          About
        </Link>
      </div>
      <div className="hidden md:flex space-x-2">
        <SignInButtons />
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="p-0">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                className="text-foreground/60 hover:text-foreground transition-colors"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                className="text-foreground/60 hover:text-foreground transition-colors"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                className="text-foreground/60 hover:text-foreground transition-colors"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Docs
              </Link>
              <Link
                className="text-foreground/60 hover:text-foreground transition-colors"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <SignInButtons />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
