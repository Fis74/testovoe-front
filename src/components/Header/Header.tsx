import Container from '@/components/Container'
import Logo from '@/components/NavBar/Logo'
import Search from '@/components/NavBar/Search'
import UserMenu from '@/components/NavBar/UserMenu'
import MainMenu from '@/components/NavBar/MainMenu'
const Header = () => {
  return (
    <header className="w-full bg-white">
      <Container>
        <div
          className="
            flex 
            items-center 
            justify-between
            max-h-28
            gap-1
          "
        >
          <div className="flex items-center justify-between gap-1 lg:gap-6 xl:gap-10">
            <Logo />
            <Search />
          </div>
          <UserMenu />
        </div>
        <MainMenu />
      </Container>
    </header>
  )
}

export default Header
