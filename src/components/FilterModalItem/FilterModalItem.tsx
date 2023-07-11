import { IoIosArrowDown } from 'react-icons/io'

interface FilterItemModalProps {
  name: string
}

const FilterModalItem: React.FC<FilterItemModalProps> = ({ name }) => {
  return (
    <div className="flex gap-1 items-center">
      <div className="font-semibold text-gray-600">{name}</div>
      <div className="text-gray-600 mt-1 cursor-pointer">
        <IoIosArrowDown size={12} />
      </div>
    </div>
  )
}

export default FilterModalItem
