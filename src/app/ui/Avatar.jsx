'use client';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { signIn, useSession, signOut } from 'next-auth/react';
export default function Avatar() {
  const { data: session } = useSession();

  return (
    <div>
      <Menu as="div">
        <div>
          <Menu.Button className="flex text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            {session?.user ? (
              <Image src={session.user?.image} alt="" width={40} height={60} />
            ) : (
              <Image src="login-icon.svg" alt="" width={40} height={60} />
            )}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            {session?.user ? (
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? '' : ''}
                      Perfil
                    </button>
                  )}
                </Menu.Item>
              </div>
            ) : (
              <></>
            )}
            <div className="px-1 py-1 ">
              {session?.user ? (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={async () => {
                        await signOut({
                          callbackUrl: '/',
                        });
                      }}
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? '' : ''}
                      Salir
                    </button>
                  )}
                </Menu.Item>
              ) : (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => signIn()}
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? '' : ''}
                      Iniciar Sesión
                    </button>
                  )}
                </Menu.Item>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
