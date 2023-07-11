import type { GetStaticProps, NextPage } from 'next'
import { getData } from '@/services/Service'
import { initStore } from '@/store/store'
import Product from '@/components/Product/Product'

const Index: NextPage = () => {
  return <Product />
}

export const getStaticProps: GetStaticProps = async () => {
  const store = initStore()

  await store.dispatch(getData.initiate())

  return { props: { initialReduxState: store.getState() } }
}

export default Index
