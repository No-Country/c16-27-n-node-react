import React from 'react';
import PresencialForm from '@/app/components/PresencialForm';

const page = () => {
  return (
    <main className="h-[100%]">
      <div className="mt-8 border-slate-200 bg-white shadow-lg rounded-lg max-w-[1100px] border mx-auto flex flex-col justify-between">
        <section className=" rounded-t-lg bg-[#23B0FF] text-center text-white text-4xl p-3 h-[91px] flex items-center">
          <h1 className=" w-full">Evento Presencial</h1>
        </section>
        <PresencialForm />
      </div>
    </main>
  );
};

export default page;





