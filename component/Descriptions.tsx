import React from 'react'

interface FoodDescription {
    foodName: string
    Descrip: string
    Price: number
}

const Descriptions = (props: FoodDescription) => {
  return (
    <div className=''>
        <p className='rose-300 font-bold'>{props.foodName}</p>
        <h3 className='font-bold'>{props.Descrip}</h3>
        <h3 className="custom-red font-bold">${props.Price}</h3>
    </div>
  )
}

export default Descriptions
