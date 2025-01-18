'use client';
import Image from 'next/image';
import Cart from '../public/assets/images/icon-add-to-cart.svg';

interface ButtonProps {
  onAddToCart: () => void;
}

const Button = ({ onAddToCart }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onAddToCart}
        className="addToCart
          font-bold 
          bg-rose-50 
          p-[8px_20px] 
          text-[14px] 
          m-[0_15px] 
          w-[80%] 
          rounded-[50px] 
          relative 
          bottom-6 
          flex 
          items-center 
          justify-center 
          gap-2
        "
      >
        <Image src={Cart} alt="cart" />
        Add to Cart
      </button>
    </div>
  );
};

export default Button;
