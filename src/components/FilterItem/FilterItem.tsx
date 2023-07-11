import { twMerge } from 'tailwind-merge'

interface FilterItemProps {
  name: string
  selectFilter: string
  handle: (name: string) => void
}

const FilterItem: React.FC<FilterItemProps> = ({
  name,
  handle,
  selectFilter,
}) => {
  return (
    <button
      onClick={() => handle(name)}
      className={twMerge(
        `
        font-semibold px-4 text-gray-600 py-0.5 border hover:bg-black hover:text-white border-gray-600
        `,
        name === selectFilter && 'bg-black text-white'
      )}
    >
      {name}
    </button>
  )
}

export default FilterItem
