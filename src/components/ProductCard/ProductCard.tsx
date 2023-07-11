import { Product } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { API_URL } from '@/constants/api'

interface ProductCard {
  product: Product
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const [loadingImage, setLoadingImage] = useState(true)
  return (
    <section className={`bg-white flex flex-col gap-4 pb-4 pt-4`}>
      <div className="aspect-[2/1] bg-white relative">
        <Image
          src={`${API_URL}${product?.images[0]?.path}`}
          alt="divan"
          layout="fill"
          className={`aspect-[2/1] object-contain duration-700 hover:scale-110 rounded-md transition-transform ease-in-out" ${
            loadingImage && 'animate-pulse bg-neutral-200'
          }`}
          onLoadingComplete={() => setLoadingImage(false)}
        />
        <div className="absolute text-gray-600  font-semibold top-[75%] left-[75%] cursor-pointer">
          <AiOutlineHeart size={40} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className=" text-gray-600 font-semibold">{product?.name}</p>
        <div className="flex items-center gap-4">
          <p className=" text-gray-600 font-semibold">
            {product?.price.toLocaleString('ru-RU')} ₽
          </p>
          <p className="text-gray-600 opacity-50 font-semibold text-sm line-through">
            34 900 ₽
          </p>
        </div>
        <div className="text-left">
          <Link href={`/product/${product?.id}`}>
            <button className="cursor-pointer inline-flex font-semibold  text-gray-600 px-3 py-1 border hover:bg-black hover:text-white border-gray-600 ">
              Посмотреть
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductCard
