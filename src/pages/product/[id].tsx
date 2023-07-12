import { getData, getDataById, useGetDataByIdQuery } from '@/services/Service'
import { initStore } from '@/store/store'
import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'
import { useState } from 'react'
import Container from '@/components/Container'
import { useMemo } from 'react'
import FilterColor from '@/components/FilterColor/FilterColor'
import { API_URL } from '@/constants/api'

const ProductPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter()
  const colorData = useMemo(
    () => [
      {
        id: 1,
        color: 'bg-gray-600',
      },
      {
        id: 2,
        color: 'bg-gray-900',
      },
      {
        id: 3,
        color: 'bg-stone-700',
      },
      {
        id: 4,
        color: 'bg-yellow-700',
      },
      {
        id: 5,
        color: 'bg-yellow-950',
      },
      {
        id: 6,
        color: 'bg-cyan-900',
      },
      {
        id: 7,
        color: 'bg-red-900',
      },
    ],
    []
  )
  const { isLoading, isFetching, data, error } = useGetDataByIdQuery(Number(id))
  const [loadingImage, setLoadingImage] = useState(true)
  const [selectColor, setSelectColor] = useState(colorData[0].id)
  const handle = (id: number) => {
    setSelectColor(id)
  }
  return (
    <section>
      <Container>
        <div className=" 2md:grid-cols-[65%_32%] grid gap-y-6 2md:gap-y-4 2md:my-6 my-4  w-full 2lg:grid-cols-[55%_8%_28%] justify-between 2lg:gap-y-10 2lg:my-16">
          <div className="2lg:aspect-[2/1.5] 2md:aspect-[2/1.2] aspect-[2/1.5] relative w-full sm:rounded-lg overflow-hidden">
            <Image
              src={`${API_URL}${data?.images[0]?.path}`}
              alt="divan"
              layout="fill"
              className={`object-contain 2lg:aspect-[2/1.5] 2md:aspect-[2/1.2] object-center duration-700 hover:scale-110 rounded-md transition-transform ease-in-out" ${
                loadingImage && 'animate-pulse bg-neutral-200'
              }`}
              onLoadingComplete={() => setLoadingImage(false)}
            />
          </div>
          <div className="flex 2lg:flex-col items-center 2lg:order-none justify-evenly 2md:order-3 ">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="aspect-square relative  w-[20%] h-[80%] 2lg:h-[20%] 2lg:w-full sm:rounded-lg overflow-hidden"
                >
                  <Image
                    src="/"
                    alt=""
                    layout="fill"
                    className={`bg-neutral-200 aspect-square relative h-full w-full object-contain duration-700 hover:scale-110 rounded-md transition-transform ease-in-out`}
                  />
                </div>
              ))}
          </div>
          <div className="grid grid-cols-1 low:grid-cols-2 gap-4 items-center 2md:items-baseline 2md:gap-0 2md:flex 2md:flex-col justify-between mt-2 2lg:row-span-1 2md:row-span-2">
            <div className="flex flex-col gap-2">
              <p className="text-[34px] text-black ">{data?.name}</p>
              <p className=" text-gray-600 font-semibold">Диван {data?.name}</p>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <AiFillStar size={14} />
                  <AiFillStar size={14} />
                  <AiFillStar size={14} />
                  <AiFillStar size={14} />
                  <AiFillStar size={14} />
                </div>
                <p className="text-sm underline text-gray-600 font-semibold">
                  5 отзывов
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center 2md:order-none order-5">
              <p className="2md:text-2xl text-5xl text-blue-400 ">
                {data?.price.toLocaleString('ru-RU')} ₽
              </p>
              <p className="line-through 2md:text-base text-2xl text-gray-600 font-medium  opacity-50">
                34 900 ₽
              </p>
            </div>
            <div className="flex flex-col  gap-5">
              <div className=" text-gray-600 font-semibold">
                Велюр Нелла 089
              </div>
              <div className="flex items-center relative gap-3">
                {colorData.map((item, index) => (
                  <FilterColor
                    key={item.id}
                    item={item}
                    selectColor={selectColor}
                    handle={handle}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col  gap-2">
              <div className=" text-gray-600 font-semibold">
                Выбрать наполнение:
              </div>
              <div className="grid grid-cols-2 gap-2 2md:flex  2md:items-center  2md:justify-between  2md:w-11/12 ">
                <button className="text-center font-medium px-4 py-0.5 text-gray-600  border hover:bg-black hover:text-white border-black ">
                  НП5
                </button>
                <button className="text-center font-medium px-4 py-0.5 text-gray-600  border hover:bg-black hover:text-white border-black ">
                  ППУ
                </button>
                <button className="text-center font-medium px-4 py-0.5  text-gray-600   border hover:bg-black hover:text-white border-black ">
                  ЗМЕЙКА
                </button>
                <button className="text-center font-medium px-4 py-0.5 text-gray-600   border hover:bg-black hover:text-white border-black ">
                  ПБ
                </button>
              </div>
            </div>
            <div className="flex flex-col  2md:w-7/12  gap-2">
              <div className="text-gray-600 font-semibold">Доставка</div>
              <div className="flex justify-between">
                <div className=" text-gray-600 text-sm">по Челябинску</div>
                <div className="text-gray-600 text-sm font-semibold">700 ₽</div>
              </div>
              <div className="flex justify-between">
                <div className=" text-gray-600 text-sm">по России</div>
                <div className="text-gray-600 text-sm font-semibold">
                  от 1000 ₽
                </div>
              </div>
              <div className="flex justify-between">
                <div className=" text-gray-600 text-sm">Самовывоз</div>
                <div className="text-gray-600 text-sm font-semibold">
                  Бесплатно
                </div>
              </div>
            </div>
            <button className="h-full 2md:h-auto cursor-pointer order-last 2md:w-[70%] font-semibold  text-white  low:p-1  py-3  bg-black ">
              В корзину
            </button>
          </div>
          <div className="2lg:col-span-2 text-base text-gray-600 2md:order-4">
            Диван Финка невероятно мягкий и комфортабельный с простым
            механизмом. Его приятные округлые формы, благодаря фактура обивки и
            лаконичный дизайн. Латы из наатурлааьного дерева создают
            ортопедический эффект, поддерживая правильную осанку. Три режима
            фиксации спинки. Задняя стенка дивана выполенена из ткани основы.
            Вместительный бельевой ящик.
          </div>
        </div>
      </Container>
    </section>
  )
}

export const getStaticPaths = async () => {
  const store = initStore()
  const result = await store.dispatch(getData.initiate())
  const paths = result.data?.map((product) => ({
    params: { id: product.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const store = initStore()
  await store.dispatch(getDataById.initiate(Number(params?.id)))

  return { props: { initialReduxState: store.getState() } }
}

export default ProductPage
