const Logo = ({ setAuth }) => {
  return (
    <button
      onClick={() => setAuth(false)}
      type='button'
      className='text-xl select-none cursor-pointer'
    >
      Logo
    </button>
  )
}

export default Logo
