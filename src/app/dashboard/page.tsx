'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import Heading from '../components/shared/Heading'
import ImageUpload from '../components/shared/ImageUpload'
import { categories } from '@/db/dataNew'

export const Dashboard = () => {
  const { register, setValue, handleSubmit, watch } = useForm()
  const images = watch('images')
  const categorySelect = watch('category')

  const onSubmit = handleSubmit(data => {
    console.log('submit', data)
  })

  const setImagesValue = (value: any) => {
    setValue('images', value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const subcategory = categories.find(
    (category: any) => category.id == categorySelect
  )?.subcategories

  console.log(subcategory)

  return (
    <div>
      <nav>
        <nav className='bg-white border-gray-200 dark:bg-gray-900'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <a
              href='https://flowbite.com/'
              className='flex items-center space-x-3 rtl:space-x-reverse'
            >
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='h-8'
                alt='Flowbite Logo'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Flowbite
              </span>
            </a>
            <div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
              <button
                type='button'
                className='flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                id='user-menu-button'
                aria-expanded='false'
                data-dropdown-toggle='user-dropdown'
                data-dropdown-placement='bottom'
              >
                <span className='sr-only'>Open user menu</span>
                <img
                  className='w-8 h-8 rounded-full'
                  src='/docs/images/people/profile-picture-3.jpg'
                  alt='user photo'
                />
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
                id='user-dropdown'
              >
                <div className='px-4 py-3'>
                  <span className='block text-sm text-gray-900 dark:text-white'>
                    Bonnie Green
                  </span>
                  <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                    name@flowbite.com
                  </span>
                </div>
                <ul className='py-2' aria-labelledby='user-menu-button'>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle='navbar-user'
                type='button'
                className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                aria-controls='navbar-user'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 17 14'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M1 1h15M1 7h15M1 13h15'
                  />
                </svg>
              </button>
            </div>
            <div
              className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
              id='navbar-user'
            >
              <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                    aria-current='page'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>

      <h2 className='text-5xl text-center mt-[100px]'>
        agregar camiseta o polo
      </h2>
      <form onSubmit={onSubmit} className='max-w-sm mx-auto mt-[50px]'>
        <div className='mb-5'>
          <label
            htmlFor='titulo'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            titulo
          </label>
          <input
            type='text'
            id='titulo'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='titulo'
            {...register('title', {
              required: true
            })}
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='description'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            descripcion
          </label>
          <input
            type='description
'
            id='description'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            required
            {...register('description', {
              required: true
            })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='price'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            precio
          </label>
          <div className='flex'>
            <input
              type='number'
              id='price'
              className='shadow-sm mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              required
              {...register('price', {
                required: true
              })}
            />
          </div>
        </div>
        <div className='mb-5'>
          <label
            htmlFor='category'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            categoria
          </label>
          <select
            id='category'
            {...register('category', {
              required: true
            })}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option selected>Selecciona una categoria</option>
            {categories.map(({ id, category }) => (
              <option key={id} value={id}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-5'>
          <label
            htmlFor='subcategory'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            subcategoria
          </label>
          <select
            id='subcategory'
            {...register('subcategory', {
              required: true
            })}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option selected>Selecciona una categoria</option>
            {subcategory?.map(({ id, subcategory }) => (
              <option key={id} value={id}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-8'>
          <Heading
            title='Agregar fotos'
            subtitle='Muestra a tus clientes fotos de la foto'
          />
          <ImageUpload
            onChange={value => setImagesValue(value)}
            value={images}
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Register new account
        </button>
      </form>
    </div>
  )
}

export default Dashboard