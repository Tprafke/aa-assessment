export default function DropdownListItem({ identity }) {
  const { name, role } = identity;
  return (
    <button className='ml-2 mr-1 mt-1 mb-1 pr-3 pl-3 pt-1 pb-1 w-11/12 rounded hover:bg-gray active:bg-gray focus:outline-none focus:ring focus:ring-gray'>
      <span className='flex justify-left'>{name}</span>
      <span className='flex justify-left text-sm text-gray2 italic'>
        {role}
      </span>
    </button>
  );
}
