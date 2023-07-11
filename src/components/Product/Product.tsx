import { useGetDataQuery } from '@/services/Service'
import ProductFilter from '@/components/ProductFilter/ProductFilter'
import Container from '@/components/Container'
import ProductCard from '@/components/ProductCard/ProductCard'
import LoadingProduct from '@/components//LoadingProduct/LoadingProduct'

const Product = () => {
  const { isLoading, isFetching, data, error } = useGetDataQuery()

  return (
    <main className="min-h-screen my-6 lg:my-16 w-full">
      <Container>
        <main className="flex flex-col">
          <h1 className="lg:text-5xl text-3xl  text-center text-gray-600 mb-4 lg:mb-10">
            Диваны
          </h1>
          <div className="border-b-2 lg:my-8 my-4">
            <ProductFilter />
          </div>
          <div className="grid grid-cols-1 low:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 gap-y-10 mt-10">
            {(isLoading || isFetching) &&
              Array(10)
                .fill(0)
                .map((_, index) => <LoadingProduct key={index} />)}
            {data?.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </main>
      </Container>
    </main>
  )
}

export default Product
