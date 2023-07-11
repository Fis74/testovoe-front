import Container from '@/components/Container'

const LoadingProduct = () => {
  return (
    <Container>
      <div
        className={`flex h-80 min-w-full flex-col gap-4 pb-4 pt-4 animate-pulse bg-neutral-200`}
      ></div>
    </Container>
  )
}

export default LoadingProduct
