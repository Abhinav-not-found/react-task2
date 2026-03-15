import Button from "../ui/button"
import Logo from "./logo"

const Navbar = ({ setAuth }) => {
  return (
    <header className='flex items-center justify-between h-16 px-10 border-b border-neutral-200 shadow-xs'>
      <Logo setAuth={setAuth} />
      <Button
        onClick={() => {
          setAuth(true)
        }}
      >
        Login
      </Button>
    </header>
  )
}

export default Navbar
