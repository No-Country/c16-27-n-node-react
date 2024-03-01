'use client';
import { useSession } from 'next-auth/react';
import PresencialForm from '@/app/components/PresencialForm';
import FormSkeleton from '../ui/FormSkeleton';

const page = () => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <FormSkeleton color="bg-dodgerBlue" />;
  }

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>;
  }

  return (
    <main className="h-[100%] p-5 md:p-0">
      <div className="md:p-0 md:mt-8 border-slate-200 bg-white shadow-lg rounded-lg max-w-[1100px] border mx-auto flex flex-col justify-between">
        <section className=" rounded-t-lg bg-dodgerBlue text-center text-white text-4xl p-3 h-[91px] flex items-center">
          <h1 className=" w-full">Evento Presencial</h1>
        </section>
        <PresencialForm />
      </div>
    </main>
  );
};

export default page;
