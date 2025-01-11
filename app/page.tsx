import Dish from "@/component/Dish";
import Baklava from '../public/assets/images/image-baklava-thumbnail.jpg'
import Brownie from '../public/assets/images/image-brownie-thumbnail.jpg'
import Cake from '../public/assets/images/image-cake-thumbnail.jpg'
import Creme from '../public/assets/images/image-creme-brulee-thumbnail.jpg'
import Macaron from '../public/assets/images/image-macaron-thumbnail.jpg'
import Meringue from '../public/assets/images/image-meringue-thumbnail.jpg'
import Panna from '../public/assets/images/image-panna-cotta-thumbnail.jpg'
import Tiramisu from '../public/assets/images/image-tiramisu-thumbnail.jpg'
import Waffle from '../public/assets/images/image-waffle-thumbnail.jpg'
import Cancel from '../public/assets/images/icon-remove-item.svg'
import Carbon from '../public/assets/images/icon-carbon-neutral.svg'
import Image from "next/image";



export default function Home() {
  return (
  <>
  <section className="bg-rose-100 w-[80%] flex justify-center m-[100px_auto] rounded-[5px] shadow-[1px_10px_10px_#000]">
    <main className="w-[80%] m-[20px]" >
      <h1>Desserts</h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="w-[100%] h-[150px]">
        <Dish dishes={Waffle} />
        </div>
        <div>
        <Dish dishes={Creme} />
        </div>
        <div>
        <Dish dishes={Macaron} />
        </div>
        <div>
        <Dish dishes={Tiramisu} />
        </div>
        <div>
          <Dish dishes={Baklava} />
        </div>
        <div>
        <Dish dishes={Meringue} />
        </div>
        <div>
        <Dish dishes={Cake} />
        </div>
        <div>
        <Dish dishes={Brownie} />
        </div>
        <div>
        <Dish dishes={Panna} />
        </div>
      </div>
    </main>
    <menu className="w-[20%] bg-rose-50 p-[10px] m-[10px] rounded-[10px]">
      <h1 className="custom-red font-bold text-[20px] ">Your Cart (7)</h1>
      <div className="flex flex-row               justify-between m-1 mb-3 mt-2">
        <div>
        <h2 className="font-semibold text-[14px]">Classic Tiramisu</h2>
        <p className="font-semibold rose-300"><span className="custom-red font-semibold">1x</span> <span className="font-normal">@ $5.50</span> $5.50</p>
        </div>
        <div >
        <Image className="rounded-[50%] p-[1px] border-[1px] border-[#c9aea6]  cursor-pointer mt-5" src={Cancel} alt="unk" />
        </div>
      </div>
      <hr />
      <div className="flex flex-row               justify-between m-1 mb-3 mt-2">
        <div>
        <h2 className="font-semibold text-[14px]">Classic Tiramisu</h2>
        <p className="font-semibold rose-300"><span className="custom-red font-semibold">1x</span> <span className="font-normal">@ $5.50</span> $5.50</p>
        </div>
        <div >
        <Image className="rounded-[50%] p-[1px] border-[1px] border-[#c9aea6]  cursor-pointer mt-5" src={Cancel} alt="unk" />
        </div>
      </div>
      <hr />
      <div className="flex flex-row               justify-between m-1 mb-3 mt-2">
        <div>
        <h2 className="font-semibold text-[14px]">Classic Tiramisu</h2>
        <p className="font-semibold rose-300"><span className="custom-red font-semibold">1x</span> <span className="font-normal">@ $5.50</span> $5.50</p>
        </div>
        <div >
        <Image className="rounded-[50%] p-[1px] border-[1px] border-[#c9aea6]  cursor-pointer mt-5" src={Cancel} alt="unk" />
        </div>
      </div>
      <hr />
      <div className="flex flex-row               justify-between m-1 mb-3 mt-2">
        <div>
        <h2 className="font-semibold text-[14px]">Classic Tiramisu</h2>
        <p className="font-semibold rose-300"><span className="custom-red font-semibold">1x</span> <span className="font-normal">@ $5.50</span> $5.50</p>
        </div>
        <div >
        <Image className="rounded-[50%] p-[1px] border-[1px] border-[#c9aea6]  cursor-pointer mt-5" src={Cancel} alt="unk" />
        </div>
      </div>
      <hr />
      <div className="flex flex-row               justify-between m-1 mb-3 mt-2">
        <div>
        <h2 className="font-semibold text-[14px]">Classic Tiramisu</h2>
        <p className="font-semibold rose-300"><span className="custom-red font-semibold">1x</span> <span className="font-normal">@ $5.50</span> $5.50</p>
        </div>
        <div >
        <Image className="rounded-[50%] p-[1px] border-[1px] border-[#c9aea6]  cursor-pointer mt-5" src={Cancel} alt="unk" />
        </div>
      </div>
      <hr />
      <div className="flex flex-row               justify-between m-1 mb-3 mt-2">
        <div>
        <h2 className="font-semibold text-[14px]">Classic Tiramisu</h2>
        <p className="font-semibold rose-300"><span className="custom-red font-semibold">1x</span> <span className="font-normal">@ $5.50</span> $5.50</p>
        </div>
        <div >
        <Image className="rounded-[50%] p-[1px] border-[1px] border-[#c9aea6]  cursor-pointer mt-5" src={Cancel} alt="unk" />
        </div>
      </div>
      <hr />
      <div className="flex flex-row               justify-between m-1 mb-3 mt-2">
        <div>
        <h2 className="font-semibold text-[14px]">Classic Tiramisu</h2>
        <p className="font-semibold rose-300"><span className="custom-red font-semibold">1x</span> <span className="font-normal">@ $5.50</span> $5.50</p>
        </div>
        <div >
        <Image className="rounded-[50%] p-[1px] border-[1px] border-[#c9aea6]  cursor-pointer mt-5" src={Cancel} alt="unk" />
        </div>
      </div>
      <hr />
      <div className="flex flex-row               justify-between m-1 mb-3 mt-2">
        <div>
        <h2 className="font-semibold text-[14px]">Classic Tiramisu</h2>
        <p className="font-semibold rose-300"><span className="custom-red font-semibold">1x</span> <span className="font-normal">@ $5.50</span> $5.50</p>
        </div>
        <div >
        <Image className="rounded-[50%] p-[1px] border-[1px] border-[#c9aea6]  cursor-pointer mt-5" src={Cancel} alt="unk" />
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between mt-5 mb-5">
        <p className="rose-400 font-semibold">Order Total</p>
        <h1 className="font-bold text-[20px]">$46.50</h1>
      </div>
      <div className="bg-rose-100 p-[10px] text-center rounded-[10px] text-[14px] "><p><Image src={Carbon} alt="carbon-neutral" />This is a <span className="font-semibold">carbon-neutral</span> delivery</p></div>
      <button className="bg-custom-red text-white w-[100%] rounded-[50px] p-4 mt-5 active:bg-red-900">Confirm Order</button>
    </menu>
  </section>
  </>
  );
}
