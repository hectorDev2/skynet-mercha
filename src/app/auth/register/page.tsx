'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const router = useRouter()

  const onSubmit = handleSubmit(async data => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (res.ok) {
      router.push('/auth/login')
    } else {
      console.log('enviado...')
      router.push('/')
    }
  })
  return (
    <div className='my-10 '>
      <h2 className='text-3xl text-center'>Registrate ADMIN</h2>
      <img className=' mx-auto w-[200px]' src='/logo.png' alt='logo png' />
      <form className='max-w-sm mx-auto' onSubmit={onSubmit}>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            tu usuario
          </label>
          <input
            type='text'
            {...register('username', {
              required: true
            })}
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='usuario'
          />
          {errors.username && (
            <span className='text-[var(--redDanger)] font-bold'>
              usuario invalido
            </span>
          )}
        </div>
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
            placeholder='correo@sky.com'
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
          color='success'
          className='w-full'
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
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-lock-access'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M4 8v-2a2 2 0 0 1 2 -2h2' />
              <path d='M4 16v2a2 2 0 0 0 2 2h2' />
              <path d='M16 4h2a2 2 0 0 1 2 2v2' />
              <path d='M16 20h2a2 2 0 0 0 2 -2v-2' />
              <path d='M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z' />
              <path d='M10 11v-2a2 2 0 1 1 4 0v2' />
            </svg>
          }
        >
          Registrar
        </Button>
      </form>
    </div>
  )
}

export default Register
