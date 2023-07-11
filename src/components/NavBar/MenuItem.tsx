import Link from 'next/link'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface UserMenuItemProps {
  icon?: IconType
  label?: string
  active?: boolean
  href: string
}

const MenuItem: React.FC<UserMenuItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link href={href}>
      <a
        className={twMerge(
          `
        flex 
        list-none
        h-auto 
        items-center 
        w-full 
        cursor-pointer
        hover:text-gray-400 
        transition
        text-gray-600
        font-thin text-xl
        `,
          active && 'text-gray-500'
        )}
      >
        {Icon ? <Icon size={30} /> : label}
      </a>
    </Link>
  )
}

export default MenuItem
