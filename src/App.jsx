import './App.css'
import BlogSection from './page/BlogSection';
import HeaderSection from './page/HeaderSection';
import HouseListSection from './page/HouseListSection';
import Testimonial from './page/Testimonial';

function App() {

  return (
    <div className="App bg-[#FCFCFC] pb-40">
      <HeaderSection/>
      <HouseListSection/> 
      <Testimonial/>
      <BlogSection/>
    </div>
  )
}

export default App
