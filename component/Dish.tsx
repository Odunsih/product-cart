import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface DishProps {
    dishes: StaticImageData
    alt: string
}
const Dish = (props: DishProps) => {
  return (
    <div>
      <Image className='rounded-[10px] w-[100%] h-[150px]' src={props.dishes} alt={props.alt} />
    </div>
  )
}

export default Dish
