const FormSkeleton = ({ color }) => {
  return (
    <main className="h-[100%]">
      <div className="mt-8 border-slate-200 bg-white shadow-lg rounded-lg max-w-[1100px] border mx-auto flex flex-col justify-between">
        <section
          className={`${color}  rounded-t-lg text-center text-white text-4xl p-3 h-24 flex items-center`}
        >
          <div className="w-full h-8 bg-gray-200 rounded"></div>
        </section>
        <div className="flex flex-col justify-between animate-pulse">
          <div>
            <section className="flex w-full p-3 h-[60rem]">
              <div className="flex flex-col w-1/2 p-4 border-r">
                <div className="h-1/2 flex flex-col gap-2">
                  <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
                <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                <div className="h-1/2 bg-gray-200 p-5"></div>
              </div>
              <div className="flex w-1/2 p-4 justify-between">
                <div className="h-1/2 flex flex-col gap-2">
                  <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                  <div className="h-full bg-gray-200"></div>
                </div>
                <div className="border h-2/5 bg-gray-200 rounded-lg"></div>
              </div>
            </section>
            <section className="flex h-[91px]">
              <div className="bg-gray-200 rounded-3xl w-40 m-5 h-10"></div>
              <div className="bg-gray-200 rounded-3xl w-40 m-5 h-10"></div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormSkeleton;
