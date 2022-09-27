import { Transition } from "@headlessui/react";

export default function DropdownBtn({ isShowing, setIsShowing, currentUser }) {
  return (
    <button
      onClick={() => setIsShowing((isShowing) => !isShowing)}
      className='px-2 py-1 flex items-center text-sm font-medium rounded hover:bg-gray active:bg-gray focus:outline-none focus:ring focus:ring-gray'
      type='button'
    >
      <div className='inline-flex overflow-hidden relative justify-center items-center mr-2 w-10 h-10 rounded-full bg-pink'>
        <span className='font-medium text-white'>
          {currentUser.name.match(/\b(\w)/g).join("")}
        </span>
      </div>
      <div>
        <span className='flex justify-left'>{currentUser.name}</span>
        <span className='flex justify-left text-xs text-gray2'>
          {currentUser.dropdownRole}
        </span>
      </div>
      <Transition
        show={!isShowing}
        enter='transform transition duration-[400ms]'
        enterFrom='rotate-180'
      >
        <svg
          className='ml-5 w-4 h-4 mx-1.5'
          viewBox='0 0 14 14'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10.891 4.68L7 8.473 3.109 4.68a1 1 0 00-1.397 0l-.007.007a.962.962 0 000 1.377L7 11.235l5.295-5.17a.962.962 0 000-1.377l-.007-.007a1 1 0 00-1.397 0z' />
        </svg>
      </Transition>
      <Transition
        show={isShowing}
        enter='transform transition duration-[400ms]'
        enterFrom='-rotate-180'
      >
        <svg
          className='ml-5 w-4 h-4 mx-1.5 rotate-180'
          viewBox='0 0 14 14'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10.891 4.68L7 8.473 3.109 4.68a1 1 0 00-1.397 0l-.007.007a.962.962 0 000 1.377L7 11.235l5.295-5.17a.962.962 0 000-1.377l-.007-.007a1 1 0 00-1.397 0z' />
        </svg>
      </Transition>
    </button>
  );
}
