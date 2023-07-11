import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { RoutesEnum } from '@/constants/routes'
import MenuItem from '@/components/NavBar/MenuItem'
const MainMenu = () => {
  const router = useRouter()
  const { asPath } = useRouter()
  const routes = useMemo(
    () => [
      {
        label: 'Новинки',
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.New,
      },
      {
        label: 'Акции',
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.Sale,
      },
      {
        label: 'Диваны',
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.Divany,
      },
      {
        label: 'Кресла',
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.Kresla,
      },
      {
        label: 'Кровати',
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.Krovaty,
      },
      {
        label: 'Стулья',
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.Stylia,
      },
      {
        label: 'Столы',
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.Stoly,
      },
      {
        label: 'Матрасы',
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.Matrasy,
      },
      {
        label: 'Пуфы',
        href: RoutesEnum.Home,
        active: asPath === RoutesEnum.Pufs,
      },
    ],
    [asPath]
  )
  return (
    <div className="lg:block hidden">
      <ul className="flex items-center">
        {routes.map((item) => (
          <li className="mr-6 xl:mr-12 last:mr-0 py-4" key={item.label}>
            <MenuItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainMenu
