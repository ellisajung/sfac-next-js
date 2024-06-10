"use client";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <>
      <div>Blog Error component: {error.message}</div>
      <button onClick={reset}>Try again!</button>
    </>
  );
}

export default Error;
