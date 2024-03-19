'use client'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { Button } from '@nextui-org/react'
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = handleSubmit(async data => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: '/dashboard'
    })
    if (res!.error) {
      alert(res!.error)
      return null
    }
  })

  return (
    <div className='my-10'>
      <h2 className='text-3xl text-center'>Iniciar Sesion ADMIN</h2>
      <img className=' mx-auto w-[200px]' src='/logo.png' alt='logo png' />
      <form className='max-w-sm mx-auto' onSubmit={onSubmit}>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            tu email
          </label>
          <input
            type='email'
            {...register('email', {
              required: true
            })}
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='email@sky.com'
            required
          />
          {errors.email && (
            <span className='text-[var(--redDanger)] font-bold'>
              email invalido
            </span>
          )}
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Contraseña
          </label>
          <input
            {...register('password', {
              required: true
            })}
            type='password'
            id='password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required
          />
          {errors.password && (
            <span className='text-[var(--redDanger)] font-bold'>
              tu contrasenia debe tener almenos 5 caracteres
            </span>
          )}
        </div>

        <Button
          className='w-full'
          color='success'
          onClick={onSubmit}
          endContent={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-login-2'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2' />
              <path d='M3 12h13l-3 -3' />
              <path d='M13 15l3 -3' />
            </svg>
          }
        >
          Entrar como admin
        </Button>
      </form>
    </div>
  )
}

export default Login
