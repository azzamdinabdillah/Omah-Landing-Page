import './App.css'
import Navbar from './components/Navbar';
import BlogSection from './page/BlogSection';
import EmailSection from './page/EmailSection';
import HeaderSection from './page/HeaderSection';
import HouseListSection from './page/HouseListSection';
import Testimonial from './page/Testimonial';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init({
      offset: (window.innerWidth <= 768) ? 200 : (window.innerWidth >= 768 && window.innerWidth <= 1024) ? 400 : (window.innerWidth >= 1024) ? 540 : 200,
      // duration: 300,
      // easing: 'ease-in-sine',
    })
  }, []);

  // console.log(window.innerHeight)
  return (
    <div className="App bg-[#FCFCFC] pb-20">
      <Navbar/>
      <HeaderSection/>
      <HouseListSection/> 
      <Testimonial/>
      <BlogSection/>
      <EmailSection/>

      <section className='px-5 mt-10 md:mt-20 md:px-16 lg:px-32'>
        <div className='md:flex justify-between items-center'>
          <div className='text-text-primary-color'>
            <h1>Omah Design bg @dzakimuzh</h1>
            <h1 className='mt-2'>Omah Code bg Azam Din Abdillah</h1>
          </div>
          <div className='flex items-center gap-5 mt-7 md:mt-0'>
            <img src="./image/ig.png" alt="" className='' />
            <img src="./image/fb.png" alt="" className='' />
            <img src="./image/twitter.png" alt="" className='' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
