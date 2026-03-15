import Button from "../ui/button"

const RegisterForm = () => {
  return (
    <form className='w-80 space-y-6'>
      <Field>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          className='border border-neutral-400 rounded-md px-2 py-1 placeholder:text-sm'
          placeholder='John Doe'
        />
      </Field>
      <Field>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          className='border border-neutral-400 rounded-md px-2 py-1 placeholder:text-sm'
          placeholder='johnDoe@gmail.com'
        />
      </Field>
      <Field>
        <label htmlFor='password'>Password</label>
        <input
          type='text'
          className='border border-neutral-400 rounded-md px-2 py-1 placeholder:text-sm'
          placeholder=''
        />
      </Field>
      <Field>
        <Button>Register</Button>
      </Field>
    </form>
  )
}

export default RegisterForm

const Field = ({ children }) => {
  return <div className='flex flex-col'>{children}</div>
}
