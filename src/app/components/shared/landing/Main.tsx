import React from 'react'
import { CardFeature } from './CardFeature'

interface Feature {
  title: string
  stringColor: string
  subtitle: string
  theme: string
  features: {
    title: string
    subtitle: string
    icon: JSX.Element
  }[]
}

export const Features = ({
  title = 'Como lo ',
  theme = 'primary',
  stringColor = 'creamos',
  subtitle,
  features
}: Feature) => {
  return (
    <section
      id='howItWorks'
      className='container mx-auto text-center py-24 sm:py-32'
    >
      <h2 className='text-3xl md:text-4xl font-bold '>
        {title}
        <span
          className={`bg-gradient-to-b from-[${theme}]/60 to-[${theme}]
 text-${theme}
 bg-clip-text`}
        >
          {stringColor}
        </span>
      </h2>
      <p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'>
        {subtitle}
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {features?.map((feature, index) => (
          <CardFeature key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}
