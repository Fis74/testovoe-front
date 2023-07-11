import Image from 'next/image'
import { useRouter } from 'next/router'
const Logo = () => {
  const router = useRouter()
  return (
    <div className="relative w-44 h-24 ">
      <div className="absolute top-0 left-[-4px] w-full h-full">
        <Image
          onClick={() => router.push('/')}
          className="cursor-pointer object-cover"
          src="/images/logo.png"
          layout="fill"
          alt="Logo"
          priority
        />
      </div>
    </div>
  )
}

export default Logo
