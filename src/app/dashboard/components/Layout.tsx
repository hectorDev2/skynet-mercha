import React, { ReactNode } from 'react'
import Sidebar from './Sidebar'
export const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div className='p-4 sm:ml-64'>
        <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
          {children}
        </div>
      </div>
    </div>
  )
}
