"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export function SignInButtons() {
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <Button className="font-display" onClick={() => signIn("google")}>
        Sign in with Google
      </Button>
    );
  } else {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"}>
            <Avatar className="h-6 w-auto">
              <AvatarImage src={session.user.image ?? undefined} />
              <AvatarFallback>{session.user.name?.at(0)}</AvatarFallback>
            </Avatar>

            <span className="ml-2">{session.user.name}</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-gray-50">
          <DropdownMenuItem>
            <Button variant={"ghost"} onClick={() => signOut()}>
              Sign out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
