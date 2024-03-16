'use client'
import React, { useState } from 'react'

export const ProductGallery = ({ images = [] }: { images: string[] }) => {
  console.log(images)

  const [imagePrincipal, setImagePrincipal] = useState<any>(images[0] || '')
  const indexOf = images.indexOf(imagePrincipal)
  console.log(indexOf)
  const nextImage = () => {
    if (indexOf == images.length - 1) setImagePrincipal(images[0])

    setImagePrincipal(images[indexOf + 1])
  }
  const beforeImage = () => {
    if (indexOf == 0) {
      setImagePrincipal(images[images.length - 1])
    }
    setImagePrincipal(images[indexOf - 1])
  }

  return (
    <div className='images-gallery'>
      {/* <!-- main image --> */}
      <figcaption
        className='main-image image-flash
'
      >
        {/* <!--prev button --> */}
        <button onClick={beforeImage} className='prev-btn'>
          <img src='/images/icon-previous.svg' alt='previous icon' />
        </button>
        <img
          src={imagePrincipal.url}
          alt='image product 1'
          className='mx-auto magnifiedImg main Image w-[362px] h-[362px] '
        />
        {/* <!--next button --> */}
        <button className='next-btn' onClick={nextImage}>
          <img src='/images/icon-next.svg' alt='next icon' />
        </button>
      </figcaption>
      {/* <!-- gallery thumbnails for desktop --> */}
      <div className='images-thumbnails'>
        {images.map((image: any) => {
          return (
            <figcaption
              key={image.id}
              className={`thumbnails-image ${
                image == imagePrincipal.url &&
                'border-4  border-[var(--primary)]'
              }`}
              onClick={() => setImagePrincipal(image)}
            >
              <img
                className=' Image w-[100px] h-[100px]'
                src={image.url}
                alt='image thumbnails 4'
              />
            </figcaption>
          )
        })}
      </div>
    </div>
  )
}
