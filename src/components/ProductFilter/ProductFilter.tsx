import { useState } from 'react'
import FilterItem from '../FilterItem/FilterItem'
import FilterModalItem from '../FilterModalItem/FilterModalItem'

const ProductFilter = () => {
  const [selectFilter, setSelectFilter] = useState<string>('Все фильтры')
  const handle = (filter: string) => {
    setSelectFilter(filter)
  }
  const filter = [
    {
      name: 'Все фильтры',
    },
    {
      name: 'Цена',
    },
    {
      name: 'Размер',
    },
    {
      name: 'Тип ткани',
    },
    {
      name: 'Наполнение',
    },
  ]
  const filterDop = [
    {
      name: 'Механизм',
    },
    {
      name: 'Самые популярные',
    },
  ]
  return (
    <div className=" justify-between items-center lg:flex hidden">
      <div className="flex xl:gap-8 gap-6  xl:my-8 my-4">
        {filter.map((item) => (
          <FilterItem
            key={item.name}
            name={item.name}
            selectFilter={selectFilter}
            handle={handle}
          />
        ))}
      </div>
      <div className="flex xl:gap-8 gap-2  xl:my-8 my-4">
        {filterDop.map((item) => (
          <FilterModalItem key={item.name} name={item.name} />
        ))}
      </div>
    </div>
  )
}

export default ProductFilter
