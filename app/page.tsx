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
import Image from "next/image";



export default function Home() {
  return (
  <>
  <section className="bg-primary w-[80%] flex justify-center m-[100px_auto] rounded-[5px] shadow-[1px_10px_10px_#000]">
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
    <menu className="w-[20%]">
      <h1>Your Cart (7)</h1>
      <div className="flex flex-row               justify-between">
        <div>
        <h2>Classic Tiramisu</h2>
        <p><span>1x</span> @ $5.50 $5.50</p>
        </div>
        <div >
        <Image className="rounded-[50%] border-gray-900 border-[1px] cursor-pointer" src={Cancel} alt="unk" />
        </div>
      </div>
    </menu>
  </section>
  </>
  );
}
