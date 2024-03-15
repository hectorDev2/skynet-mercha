'use client'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
export const Register = () => {
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
      router.push('/')
    }
  })
  return (
    <div className='my-10'>
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
            placeholder='name@flowbite.com'
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
            Contrasenia
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

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Registar
        </button>
      </form>
    </div>
  )
}

export default Register
