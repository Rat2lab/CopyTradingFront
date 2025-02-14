import React from "react";
import LoginButton from "./loginButton";
import { Button } from "./ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-8 gap-4">
    <h1 className="text-8xl">🤦‍♀️</h1>
    <h1 className="text-2xl">Oops we couldn&apos;t find what you were looking for, but you can...</h1>
    <Button variant="outline">
            <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
            <Link href="/explore"> Explore</Link>
          </Button>
    <LoginButton textLogin="Create your own profile" />
  </div>
  );
}
