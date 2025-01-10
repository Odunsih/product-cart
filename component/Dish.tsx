import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface DishProps {
    dishes: StaticImageData
}
const Dish = (props: DishProps) => {
  return (
    <div>
      <Image className='rounded-[10px] w-[100%] h-[150px]' src={props.dishes} alt="" />
      <button className='bg-white text-red-700'>Add to cart</button>
    </div>
  )
}

export default Dish
