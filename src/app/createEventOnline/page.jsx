'use client';
import { useSession } from 'next-auth/react';
import OnlineForm from '@/app/components/OnlineForm';
import FormSkeleton from '../ui/FormSkeleton';

const page = () => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <FormSkeleton color="bg-Shamrock" />;
  }

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>;
  }

  return (
    <main className="h-[100%]">
      <div className="mt-8 border-slate-200 bg-white shadow-lg rounded-lg max-w-[1100px] border mx-auto flex flex-col justify-between">
        <section className=" rounded-t-lg bg-Shamrock text-center text-white text-4xl p-3 h-[91px] flex items-center">
          <h1 className=" w-full">Evento En Línea</h1>
        </section>
        <OnlineForm />
      </div>
    </main>
  );
};

export default page;
