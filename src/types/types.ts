export type Product = {
  id: number
  name: string
  code: null
  price: 3000
  old_price: null
  purchase_price: null
  wholesale_price: null
  quantity: null
  weight: null
  size: null
  product_id: number
  created_at: string
  updated_at: string
  images: Images[]
}

export type Images = {
  id: number
  path: string
  product_id: number
  variant_id: number
  created_at: string
  updated_at: string
}
