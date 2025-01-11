import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface DishProps {
    dishes: StaticImageData
}
const Dish = (props: DishProps) => {
  return (
    <div>
      <Image className='rounded-[10px] w-[100%] h-[150px]' src={props.dishes} alt="" />
    </div>
  )
}

export default Dish
