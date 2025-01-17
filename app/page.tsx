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
import Button from "@/component/Button";
import Descriptions from "@/component/Descriptions";
import Counter from "@/component/Counter";



export default function Home() {
  return (
  <>
  <section className="bg-rose-100 w-[80%] flex justify-center m-[100px_auto] rounded-[5px] shadow-[1px_10px_10px_#000] p-10">
    <main className="w-[80%] m-[20px]" >
      <h1 className="font-bold text-[20px]">Desserts</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="w-[100%] h-[150px]">
          <Dish dishes={Waffle} alt="waffle" />
          <Counter NummberItem={1} />
          <Button />
          <div>
          <Descriptions foodName="Waffle" Descrip="Waffle with Berries" Price={6.50} />
          </div>
        </div>
        <div>
          <Dish dishes={Creme} alt="creme" />
          <Counter NummberItem={1} />
          <Button />
          <div>
            <Descriptions foodName="Creme Brule" Descrip="Vanilla Bean Creme Brule" Price={7.00} />
           </div>
        </div>
        <div>
          <Dish dishes={Macaron} alt="macaron" />
          <Counter NummberItem={1} />
          <Button />
          <div>
            <Descriptions foodName="Macaron" Descrip="Macaron Mix of Five" Price={8.00} />
           </div>
        </div>
        <div>
          <Dish dishes={Tiramisu} alt="tiramisu" />
          <Counter NummberItem={1} />
          <Button />
          <div>
            <Descriptions foodName="Tiramisu" Descrip="Classic Tiramisu" Price={5.50} />
           </div>
        </div>
        <div>
          <Dish dishes={Baklava} alt="baklava" />
          <Counter NummberItem={1} />
          <Button />
          <div>
            <Descriptions foodName="Baklava" Descrip="Pistachio Baklava" Price={4.00} />
           </div>
        </div>
        <div>
          <Dish dishes={Meringue} alt="meringue" />
          <Counter NummberItem={1} />
          <Button />
          <div>
            <Descriptions foodName="Pie" Descrip="Lemon Meringue Pie" Price={5.00} />
           </div>
        </div>
        <div>
          <Dish dishes={Cake} alt="cake" />
          <Counter NummberItem={1} />
          <Button />
          <div>
            <Descriptions foodName="Cake" Descrip="Red Velvet Cake" Price={4.50} />
           </div>
        </div>
        <div>
          <Dish dishes={Brownie} alt="brownie" />
          <Counter NummberItem={1} />
          <Button />
          <div>
            <Descriptions foodName="Brownie" Descrip="Salted Caramel Brownie" Price={5.50} />
           </div>
        </div>
        <div>
          <Dish dishes={Panna} alt="panna" />
          <Counter NummberItem={1} />
          <Button />
          <Descriptions foodName="Panna Cotta" Descrip="Vanilla Panna Cotta" Price={6.50} />
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
        <Image className="rounded-[50%] p-[1px] border-[1px] border-[#c9aea6]  cursor-pointer mt-5" src={Cancel} alt="remove" />
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
      <div className="bg-rose-100 p-[10px] text-center rounded-[10px] text-[14px] "><p className="flex flex-wrap"><Image src={Carbon} alt="carbon-neutral" />This is a <span className="font-semibold">carbon-neutral</span> delivery</p></div>
      <button className="bg-custom-red text-white w-[100%] rounded-[50px] p-4 mt-5 active:bg-red-900">Confirm Order</button>
    </menu>
  </section>
  </>
  );
}
