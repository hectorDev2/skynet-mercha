export const ButtonBuy = () => {
  return (
    <button className='flex gap-3 cursor-pointer items-center text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-md border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='icon icon-tabler icon-tabler-shopping-cart'
        width='44'
        height='44'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='#ffffff'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17h-11v-14h-2' />
        <path d='M6 5l14 1l-1 7h-13' />
      </svg>
      Comprar
    </button>
  )
}
