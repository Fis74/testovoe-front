import MenuItem from '@/components/NavBar/MenuItem'
import { useMemo } from 'react'
import { RoutesEnum } from '@/constants/routes'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useRouter } from 'next/router'
const UserMenu = () => {
  const { asPath } = useRouter()
  const routes = useMemo(
    () => [
      {
        id: 1,
        icon: AiOutlineUser,
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.Account,
      },
      {
        id: 2,
        icon: AiOutlineHeart,
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.Favorites,
      },
      {
        id: 3,
        icon: HiOutlineShoppingBag,
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.Cart,
      },
    ],
    [asPath]
  )
  return (
    <div className="flex">
      <ul className="flex items-center justify-between ">
        {routes.map((item) => (
          <li className="mr-2 last:mr-0" key={item.id}>
            <MenuItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserMenu
