const AuthLayout = ({ title, children, question, actionText, onAction }) => {
  return (
    <>
      <h1 className='text-2xl uppercase mb-4 font-medium'>{title}</h1>

      {children}

      <div className='mt-4'>
        <p>
          {question}{" "}
          <button
            type='button'
            onClick={onAction}
            className='underline underline-offset-2 cursor-pointer'
          >
            {actionText}
          </button>
        </p>
      </div>
    </>
  )
}

export default AuthLayout
