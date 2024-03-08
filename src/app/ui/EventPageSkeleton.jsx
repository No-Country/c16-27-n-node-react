const EventPageSkeleton = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen p-3 animate-pulse ">
      <main className="md:mt-8 flex flex-col border border-gray-200 bg-white shadow-lg rounded-lg w-[1400px]  md:mx-auto">
        <section className="border-b p-5 ">
          <div className="h-10 bg-gray-200 rounded mb-2"></div>
          <div className="w-24 h-6 bg-gray-200 rounded"></div>
        </section>
        <section className="md:flex flex-col md:flex-row">
          <section className="md:w-3/6 xl:w-4/6">
            <article className="relative md:flex">
              <div className="h-64 bg-gray-200 rounded md:h-[500px] p-4"></div>
            </article>
            <article className="mt-4 md:mt-8 p-4 h-52 overflow-y-scroll">
              <div className="h-12 bg-gray-200 rounded"></div>
            </article>
          </section>
          <section className="flex flex-col md:w-3/6 xl:w-2/6 p-1 mt-8 md:mt-0 md:p-5">
            <article className="flex flex-col justify-center gap-3 h-28 p-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </article>
            <article className="rounded-lg border-t">
              <div className="h-64 bg-gray-200 rounded"></div>
            </article>
            <article className="p-5 border-t mt-10 md:mt-0">
              <div className="flex gap-2">
                <div className="h-10 w-10 bg-gray-200 rounded-full shadow"></div>
                <div className="flex flex-col justify-center">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="gap-2 flex flex-col text-center text-white mt-5">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="flex gap-3 justify-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </article>
          </section>
        </section>
      </main>
      <article className="p-5 flex gap-3 sticky bottom-0 border border-gray-200 bg-white shadow-lg">
        <div className="h-12 bg-gray-200 rounded mx-auto w-[1400px]"></div>
      </article>
    </div>
  );
};

export default EventPageSkeleton;
