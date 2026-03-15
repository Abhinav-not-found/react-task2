import clsx from "clsx"

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={clsx(
        className,
        "bg-neutral-950 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-neutral-200 shadow-md hover:shadow-md active:scale-95 select-none",
      )}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
