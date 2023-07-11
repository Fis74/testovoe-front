import { useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Input from '@/components/Input'
const Search = () => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const ClickSearch = () => {
    inputRef.current?.focus()
  }
  return (
    <div
      className="
        justify-between items-center low:flex 
        border
        h-fit
        hidden
        cursor-pointer
      "
    >
      <div
        className="
          flex  
          items-center 
          justify-between
        "
      >
        <div
          className="
            text-sm 
            text-gray-600 
            flex 
            items-center 
          "
        >
          <div
            onClick={ClickSearch}
            className="
              px-3  
              py-2
              rounded-full 
              text-gray-600 
            "
          >
            <BiSearch size={18} />
          </div>

          <Input
            ref={inputRef}
            placeholder="Найти мебель"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Search
