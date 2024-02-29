import React from 'react';
import OnlineForm from '@/app/components/OnlineForm';

const page = () => {
  return (
    <main className="h-[100%]">
      <div className="mt-8 border-slate-200 bg-white shadow-lg rounded-lg max-w-[1100px] border mx-auto flex flex-col justify-between">
        <section className=" rounded-t-lg bg-[#25CC68] text-center text-white text-4xl p-3 h-[91px] flex items-center">
          <h1 className=" w-full">Evento En Línea</h1>
        </section>
        <OnlineForm />
      </div>
    </main>
  );
};

export default page;
