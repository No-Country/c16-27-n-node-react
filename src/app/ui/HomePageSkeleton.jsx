const HomePageSkeleton = () => {
  return (
    <main className="animate-pulse flex-col items-center justify-center">
      <section className="bg-gray-800 flex flex-col items-center justify-center h-96 mb-10">
        <div className="h-16 mb-5 mt-16 md:mt-5 w-3/4 bg-gray-400"></div>
        <div className="h-56 flex items-center justify-center m-3 lg:max-w-xl">
          <div className="h-16 w-3/4 bg-gray-400"></div>
        </div>
      </section>
      <div className="w-full flex  justify-center">
        <div className="h-10 bg-gray-400 w-96 "></div>
      </div>
      <section className="h-24 md:h-full flex flex-col items-center justify-center md:m-5">
        <section className="">
          <section className="md:max-w-[1300px]  flex flex-wrap justify-center gap-8 mt-8">
            <div className="animate-pulse max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow">
              <div className="h-72 w-96 bg-gray-400 rounded-t-lg"></div>
              <div className="p-3 h-36">
                <div className="mb-2 h-6 bg-gray-500"></div>
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 mr-2 bg-gray-400 rounded-full"></div>
                  <div className="h-4 bg-gray-500 rounded w-1/3"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 bg-gray-400 rounded-full"></div>
                  <div className="h-4 bg-gray-500 rounded w-1/3"></div>
                </div>
              </div>
            </div>
            <div className="animate-pulse max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow">
              <div className="h-72 w-96 bg-gray-400 rounded-t-lg"></div>
              <div className="p-3 h-36">
                <div className="mb-2 h-6 bg-gray-500"></div>
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 mr-2 bg-gray-400 rounded-full"></div>
                  <div className="h-4 bg-gray-500 rounded w-1/3"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 bg-gray-400 rounded-full"></div>
                  <div className="h-4 bg-gray-500 rounded w-1/3"></div>
                </div>
              </div>
            </div>
            <div className="animate-pulse max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow">
              <div className="h-72 w-96 bg-gray-400 rounded-t-lg"></div>
              <div className="p-3 h-36">
                <div className="mb-2 h-6 bg-gray-500"></div>
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 mr-2 bg-gray-400 rounded-full"></div>
                  <div className="h-4 bg-gray-500 rounded w-1/3"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 bg-gray-400 rounded-full"></div>
                  <div className="h-4 bg-gray-500 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default HomePageSkeleton;
