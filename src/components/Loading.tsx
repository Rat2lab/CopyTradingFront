import React from "react";
import Image from "next/image";

export function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-8 gap-4">
      <Image
        src="/favicon1024x1024.ico"
        alt="Loading..."
        width={96}
        height={96}
        className="animate-spin"
      />
      <h1 className="text-2xl">Getting magnificent and verified data...</h1>
    </div>
  );
}
