import { Transition } from "@headlessui/react";

import Search from "../util/Search";
import DropdownList from "./DropdownList";

export default function DropdownMenu({
  currentUser,
  isShowing,
  filteredIdentities,
  handleChange,
  searchTerm,
}) {
  return (
    <Transition
      show={isShowing}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      <div className='absolute right-0 z-10 mt-8 w-64 origin-top-right rounded-lg bg-white shadow-lg dark:bg-gray-700 dark:divide-gray-600'>
        <section className='bg-light-pink h-100 rounded-t pt-5'>
          <span className='flex justify-center items-center'>
            {currentUser.IdentityName}
          </span>
          <img
            className='w-14 h-14 rounded-full relative'
            style={{ transform: "translate(175%, 50%)" }}
            src={currentUser.photoURL}
            alt=''
          />
        </section>

        <div className='divide-y divide-gray'>
          <section className='py-3 px-4 mt-7'>
            <div>
              <span className='flex justify-center items-center text-base'>
                {currentUser.name}
              </span>
              <span className='flex justify-center items-center italic text-gray2 text-xs'>
                {currentUser.role}
              </span>
              <span className='flex justify-center items-center text-gray2 text-sm'>
                {currentUser.email}
              </span>
              <div className='mt-3 flex justify-center items-center'>
                <button className='hover:bg-gray active:bg-gray border border-gray inline-flex overflow-hidden relative justify-center items-center mr-2 w-7 h-7 rounded-full'>
                  <svg
                    className='fill-gray2'
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.963 8.903l-.693 1.671a.445.445 0 01-.582.243l-.79-.326c-.36-.149-.88-.044-1.154.23-.3.301-.402.817-.254 1.179l.327.787a.442.442 0 01-.241.583l-1.671.694a.445.445 0 01-.582-.241l-.327-.79c-.15-.36-.595-.654-.98-.654-.425 0-.863.293-1.015.655l-.326.79a.442.442 0 01-.583.242l-1.67-.691a.447.447 0 01-.243-.583l.326-.787c.15-.361.044-.882-.23-1.155-.3-.3-.817-.404-1.178-.254l-.79.327a.441.441 0 01-.581-.243L.035 8.906a.447.447 0 01.241-.584l.79-.327c.36-.15.654-.592.654-.977 0-.424-.292-.86-.655-1.011l-.789-.328a.442.442 0 01-.241-.583l.694-1.671a.447.447 0 01.581-.245l.788.326c.361.149.882.044 1.155-.23.3-.3.404-.817.253-1.178l-.325-.788a.442.442 0 01.241-.582L5.093.037a.445.445 0 01.582.241l.327.79c.15.36.595.654.98.654.425 0 .864-.293 1.015-.655l.326-.79a.442.442 0 01.583-.242l1.67.691a.447.447 0 01.243.583l-.324.783c-.15.364-.045.887.228 1.16.3.3.815.405 1.184.252l.784-.324a.44.44 0 01.581.241l.691 1.675a.447.447 0 01-.241.583l-.79.328c-.36.15-.654.592-.654.977 0 .424.293.86.655 1.011l.79.326c.228.094.338.35.242.583h-.002zM7 3.5A3.498 3.498 0 003.5 7 3.499 3.499 0 007 10.499 3.498 3.498 0 107 3.5zm0 5.25a1.75 1.75 0 11-.001-3.5 1.75 1.75 0 010 3.5z'
                      fillRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='hover:bg-gray active:bg-gray border border-gray inline-flex overflow-hidden relative justify-center items-center mr-2 w-7 h-7 rounded-full'>
                  <svg
                    className='fill-gray2'
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7 14A7 7 0 117 0a7 7 0 010 14zM7 1.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm3.5 6.125H7a.874.874 0 01-.875-.866V3.49c0-.481.392-.875.875-.875s.875.394.875.875v2.634H10.5a.875.875 0 010 1.75z'
                      fillRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='hover:bg-gray active:bg-gray border border-gray inline-flex overflow-hidden relative justify-center items-center mr-2 w-7 h-7 rounded-full'>
                  <svg
                    className='fill-gray2'
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.958 5.405l-1.418 7.04a1.958 1.958 0 01-1.872 1.553H3.331a1.957 1.957 0 01-1.874-1.553L.041 5.404a1.555 1.555 0 01.303-1.33c.3-.372.756-.586 1.234-.575h1.93c0-1.934 1.567-3.5 3.496-3.5a3.497 3.497 0 013.495 3.5h1.922a1.55 1.55 0 011.538 1.905h-.001zM3.14 12.093a.245.245 0 00.193.155h7.333a.244.244 0 00.19-.155l.325-1.594h-8.36l.32 1.594zM7.003 1.75c-.966 0-1.748.783-1.748 1.75h3.494c0-.967-.782-1.75-1.747-1.75h.001zm-5.237 3.5l.704 3.499h9.066l.709-3.505H1.758l.009.005h-.002z'
                      fillRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
          <section>
            <Search
              searchTerm={searchTerm}
              formLabel={"Switch Identities"}
              handleChange={handleChange}
            />

            <DropdownList filteredIdentities={filteredIdentities} />

            <button className='ml-4 text-pink border-b border-pink'>
              See more identities
              <svg
                className='w-3 h-3 mx-1.5 fill-pink -rotate-90 inline'
                viewBox='0 0 14 14'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.891 4.68L7 8.473 3.109 4.68a1 1 0 00-1.397 0l-.007.007a.962.962 0 000 1.377L7 11.235l5.295-5.17a.962.962 0 000-1.377l-.007-.007a1 1 0 00-1.397 0z' />
              </svg>
            </button>
          </section>
          <section className='p-3 mt-3 flex justify-center items-center'>
            <button className='hover:bg-gray active:bg-gray pt-1 pb-1 pr-5 pl-5 border border-gray flex justify-center items-center rounded'>
              Sign out
            </button>
          </section>
          <section className='p-3 flex justify-center items-center'>
            <button className='text-xs text-gray2'>Privacy Policy</button>
            <span className='text-xs ml-1 mr-1 text-gray2'>&#9679;</span>
            <button className='text-xs text-gray2'>Terms of Service</button>
          </section>
        </div>
      </div>
    </Transition>
  );
}
