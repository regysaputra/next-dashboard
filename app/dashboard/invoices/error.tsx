"use client";

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string },
  reset: () => void
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.log(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong</h2>
      <button 
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attemp to recover by trying to re-rencer the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}