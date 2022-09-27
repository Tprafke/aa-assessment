export default function Search({ handleChange, searchTerm, formLabel }) {
  return (
    <form className='pl-4 pr-4 mt-2 mr-3 ml-3'>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray2'
      >
        {formLabel}
      </label>
      <div className='relative'>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          <svg
            className='fill-gray'
            width='20'
            height='20'
            viewBox='0 0 26 26'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.762 2.844a7.394 7.394 0 11-4.295 13.412l-5.73 5.73a1.219 1.219 0 01-1.813-1.624l.09-.099 5.73-5.73a7.394 7.394 0 016.019-11.689zm0 2.437a4.956 4.956 0 100 9.913 4.956 4.956 0 000-9.913z'
              fillRule='nonzero'
            />
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          onChange={handleChange}
          value={searchTerm}
          className='block p-1 pl-8 w-full text-sm text-gray bg-white rounded border border-gray focus:border-gray2 dark:border-gray dark:text-gray2 dark:focus:ring-gray2'
        />
      </div>
    </form>
  );
}
