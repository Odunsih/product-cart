// 'use client'
// import Image from 'next/image'
// import Cart from '../public/assets/images/icon-add-to-cart.svg'
// import { useState } from 'react'

// interface ButtonProps {
//   onClick?: () => void;
// }

// const Button = ({ onClick }: ButtonProps) => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClick = () => {
//     setIsVisible(false);
//     onClick?.();
//   };

//   if (!isVisible) return null;

//   return (
//     <div>
//       <button
//         onClick={handleClick}
//         className="
//           font-bold 
//           bg-rose-50 
//           p-[8px_20px] 
//           text-[14px] 
//           m-[0_15px] 
//           w-[80%] 
//           rounded-[50px] 
//           relative 
//           bottom-6 
//           flex 
//           items-center 
//           justify-center 
//           gap-2
//         "
//       >
//         <Image src={Cart} alt="cart" width={20} height={20} />
//         Add to Cart
//       </button>
//     </div>
//   )
// }

// export default Button
