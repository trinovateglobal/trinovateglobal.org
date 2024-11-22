const NotFound = () => {
  return (
    <div className="bg-background flex h-dvh w-full flex-1 flex-col items-center justify-center pt-9 text-primary">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        {"Oh no! This page doesn't exist."}
      </h1>
      <p>If you expected to see something here.</p>
    </div>
  );
};

export default NotFound;
