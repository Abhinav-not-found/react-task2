import { useState } from "react"
import LoginForm from "../components/forms/login-form"
import RegisterForm from "../components/forms/register-form"
import AuthLayout from "../components/layout/auth-layout"

const Auth = () => {
  const [form, setForm] = useState("register")
  return (
    <main className='h-[80vh] flex flex-col justify-center items-center'>
      {form === "register" ? (
        <AuthLayout
          title='Register'
          question='Already have an account?'
          actionText='Login'
          onAction={() => setForm("login")}
        >
          <RegisterForm />
        </AuthLayout>
      ) : (
        <AuthLayout
          title='Login'
          question="Don't have an account?"
          actionText='Register'
          onAction={() => setForm("register")}
        >
          <LoginForm />
        </AuthLayout>
      )}
    </main>
  )
}

export default Auth
