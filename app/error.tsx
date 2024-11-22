'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center flex-col h-dvh gap-5">
      <p>Oh no, something went wrong... maybe refresh?</p>
      <Button onClick={reset}>Refresh!</Button>
    </div>
  );
}
