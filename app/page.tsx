import Image from "next/image";
import { redirect } from "next/navigation";
import ImgHero from '../assets/images/pexels-pixabay-221027.jpg'
import MainHeader from "./(web)/partials/header";
import WebFooter from "./(web)/partials/footer";

export default function Home() {
  // redirect('/post')
  return (
    <div className='bg-slate-900 text-slate-200 tracking-wide'>
      <div className='grid grid-cols-1 justify-items-center'>
        <MainHeader />
      </div>
      <div className='grid grid-cols-1 justify-items-center bg-slate-950 py-5 mt-16'>
        <main className='w-10/12 max-w-4xl'>
          <Image
            src={ImgHero}
            alt="Picture of the author"
          />
          <h1 className="text-4xl mt-5 mb-1">Welcome</h1>
          <div className="text-sm text-slate-500 mb-3">Written by : Admin</div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt necessitatibus itaque alias amet ipsa molestias inventore, quisquam dolor deleniti nobis temporibus nemo corrupti placeat vel facere consequuntur dolores possimus repellendus natus. Vel eum error illo. Laudantium non necessitatibus doloribus incidunt libero nulla, culpa totam, minima tenetur fugit eveniet, delectus voluptas?</p>
        </main>
      </div>
      <div className='grid grid-cols-1 justify-items-center'>
        <WebFooter />
      </div>

    </div>
  );
}
