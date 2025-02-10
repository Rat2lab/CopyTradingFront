import React from "react";

export function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-8 gap-4">
    <img
      src="/favicon1024x1024.ico"
      alt="Loading..."
      className="w-24 h-24 animate-spin"
    />
    <h1 className="text-2xl">Getting magnificent and verified data...</h1>
  </div>
  );
}
