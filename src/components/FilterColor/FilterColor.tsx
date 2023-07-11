interface FilterColorProps {
  item: { id: number; color: string }
  selectColor: number
  handle: (id: number) => void
}

const FilterColor: React.FC<FilterColorProps> = ({
  item,
  selectColor,
  handle,
}) => {
  return (
    <button
      onClick={() => handle(item.id)}
      className={`w-6 h-6 relative ${item.color} rounded-full`}
    >
      {selectColor === item.id && (
        <div className="absolute p-2 border-gray-400 border bg-neutral-50 top-[50%] rounded-full left-[50%] translate-x-[-50%] translate-y-[-50%]  ">
          <div className={`w-7 h-7 rounded-full ${item.color}`}></div>
        </div>
      )}
    </button>
  )
}

export default FilterColor
