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



export default function Home() {
  return (
  <>
  <section>
    <main>
      <h1>Desserts</h1>
      <div>
        <Dish dishes={Baklava} />
        <Dish dishes={Brownie} />
        <Dish dishes={Cake} />
        <Dish dishes={Creme} />
        <Dish dishes={Macaron} />
        <Dish dishes={Meringue} />
        <Dish dishes={Panna} />
        <Dish dishes={Tiramisu} />
        <Dish dishes={Waffle} />
      </div>
    </main>
    <menu>

    </menu>
  </section>
  </>
  );
}
