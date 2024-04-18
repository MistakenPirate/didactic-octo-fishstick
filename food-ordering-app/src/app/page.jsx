import HomeMenu from '@/components/layout/HomeMenu';
import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import SectionHeaders from '@/components/layout/SectionHeaders'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeaders subHeader={'Our Story'} mainHeader={'About us'} />

        <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium quaerat quia quam eos minus optio eligendi sed aspernatur! Ut nostrum ex quidem laborum omnis consectetur inventore qui quasi cupiditate.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eos cum dignissimos minus, hic ab vitae est illum nostrum? Perspiciatis illo fuga pariatur accusantium dolores beatae debitis voluptate nemo molestias?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ullam delectus numquam ipsa reprehenderit, deleniti quasi itaque quisquam, id distinctio possimus.
          </p>
        </div>
      </section>
      <section className='text-center my-8'>
        <SectionHeaders subHeader={'Don\'t hesitate'} mainHeader={'Contact Us'}/>
        <div className='mt-8'>

        <a className='text-4xl underline text-gray-500' href="tel:+111111111111">+11 111 111 111</a>
        </div>
      </section>
      <footer className='border-t p-8 text-center text-gray-500'>
        &copy; 2023 All rights reserved

      </footer>
    </>
  );
}
