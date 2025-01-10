import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface DishProps {
    dishes: StaticImageData
}
const Dish = (props: DishProps) => {
  return (
    <div>
      <Image src={props.dishes} alt="" />
    </div>
  )
}

export default Dish
