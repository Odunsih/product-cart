'use client';
import React from 'react';
import Increment from '../public/assets/images/icon-increment-quantity.svg';
import Decrement from '../public/assets/images/icon-decrement-quantity.svg';
import Image from 'next/image';

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = ({ count, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div
      className="counter
          font-bold 
          bg-custom-red 
          p-[8px_20px] 
          text-[14px] 
          m-[0_15px] 
          w-[80%] 
          rounded-[50px] 
          relative 
          bottom-6 
          flex 
          items-center 
          justify-between 
          gap-2
        "
    >
      <div
        onClick={onDecrement}
        className="decre cursor-pointer rounded-[50%] p-[1px] border-[1px]"
      >
        <Image className="m-1 w-[8px] h-[8px]" src={Decrement} alt="decrease" />
      </div>
      <p className="text-white">{count}</p>
      <div
        onClick={onIncrement}
        className="incre cursor-pointer rounded-[50%] p-[1px] border-[1px] active:bg-rose-50"
      >
        <Image src={Increment} alt="increase" />
      </div>
    </div>
  );
};

export default Counter;
