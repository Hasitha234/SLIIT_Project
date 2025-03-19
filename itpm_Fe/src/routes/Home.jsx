import React, { useEffect } from 'react';
import '../Pages/Home/Home.css';
import { BsArrowDownLeftCircle, BsX } from "react-icons/bs";
import Robot from '../../src/assets/Images/Home/Group 276.png'
const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      
      const Num = scrollTop / 500;
      const Num2 = scrollTop * 0.0004; 
      const Num2mod = Num2 + 1;
      const Num3 = scrollTop * 0.2; 
      const Num3mod = Num3 + 1;

      // Apply styles to the elements
      const shade = document.querySelector('.shade');
      const bg = document.querySelector('.bg');
      const text = document.querySelector('.text');

      if (shade && bg && text) {
        shade.style.opacity = Num;
        bg.style.transform = `scale(${Num2mod})`;
        text.style.marginTop = `-${Num3mod}px`;
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='heroEffects'>
        
        <div className="bg">
            
          <div className="arrow bouncy">
            <svg height="25" width="50">
              <polygon points="0,0 25,10 50,0 25,25" fill="rgba(255,255,255,.5)" stroke-width="0" stroke="rgba(255,255,255,.3)" />
            </svg>
          </div>
          <div className="title centerV">
            <div>
              <div className="text">
              <img 
  className="absolute mt-[-60px] top-1/2 left-1/2 transform -translate-x-1/2  h-[350px] w-auto animate-wave" 
  src={Robot} 
  alt="Description of image" 
/>

                <h1 className='text-white text-[70px] font-bold'>Find Your Perfect PC in Seconds</h1>
                <p className='text-[17px]'>Chat with our AI assistant to discover the best computer options for your needs, <br></br>or explore our wide range of PCs to make your purchase today.</p>
                
                {/* <button
    className="bg-white mt-[30px] text-black min-w-[100px] sm:min-w-[350px] md:min-w-[420px]
               lg:min-w-[170px] xl:min-w-[150px] 2xl:min-w-[220px] font-bold pr-[2px] sm:pr-[4px] md:pr-[7px] xl:pr-[7px] rounded-full
               pl-[20px] sm:pl-[10px] lg:pl-[15px] xl:pl-[30px] pt-[3px] pb-[3px] sm:pt-[4px] sm:pb-[4px] xl:pt-[7px] xl:pb-[7px]
               hover:bg-black hover:text-white transition-all duration-300 ease-in-out overflow-hidden"
>
    <div className="flex gap-2 sm:gap-2 xl:gap-5 items-center text-[16px] sm:text-[30px] md:text-[35px] lg:text-[17px] xl:text-[17px] 2xl:text-[25px] justify-end">
        Chat with Robot
        <div className="flex items-center justify-center  
            rounded-full bg-black text-white shadow-lg 
            transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            <BsArrowDownLeftCircle className="text-3xl sm:text-7xl md:text-7xl lg:text-2xl xl:text-2xl 2xl:text-4xl m-[4px] md:m-[7px] xl:m-[7px]" />
        </div>
    </div>
</button> */}



              </div>
              
            </div>
            
          </div>
        </div>
        <div className="shade"></div>
      </div>

      <div className='content'>
      <button
            className="bg-black   text-white min-w-[100px] sm:min-w-[350px] md:min-w-[420px]
                         lg:min-w-[170px] xl:min-w-[150px] 2xl:min-w-[220px] font-bold pr-[2px] sm:pr-[4px] md:pr-[7px] xl:pr-[7px] rounded-full
                          pl-[20px] sm:pl-[10px] lg:pl-[15px] xl:pl-[30px] pt-[3px] pb-[3px] sm:pt-[4px] sm:pb-[4px] xl:pt-[7px] xl:pb-[7px]
                        hover:bg-white hover:text-black transition-all duration-300 ease-in-out overflow-hidden"
            >
            <div className="flex gap-2 sm:gap-2 xl:gap-5 items-center text-[16px] sm:text-[30px] md:text-[35px] lg:text-[17px] xl:text-[17px] 2xl:text-[25px] justify-end">
              Plan Your Trip
              <div className="flex items-center justify-center  
                rounded-full bg-white text-black shadow-lg 
                transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                <BsArrowDownLeftCircle className="text-3xl sm:text-7xl md:text-7xl lg:text-2xl xl:text-2xl 2xl:text-4xl m-[4px] md:m-[7px] xl:m-[7px]" />
              </div>
            </div>
          </button>
        <p>Bataille's analysis of predialectic objectivism holds that culture is used in the service of archaic, sexist perceptions of art. A number of constructions concerning capitalist objectivism may be found. However, the primary theme of von Ludwig's model of pretextual capitalist theory is the bridge between society and class. If capitalist objectivism holds, we have to choose between predialectic objectivism and Lacanist obscurity.</p>

        <p>Bataille's analysis of predialectic objectivism holds that culture is used in the service of archaic, sexist perceptions of art. A number of constructions concerning capitalist objectivism may be found. However, the primary theme of von Ludwig's model of pretextual capitalist theory is the bridge between society and class. If capitalist objectivism holds, we have to choose between predialectic objectivism and Lacanist obscurity.</p>

        <p>Bataille's analysis of predialectic objectivism holds that culture is used in the service of archaic, sexist perceptions of art. A number of constructions concerning capitalist objectivism may be found. However, the primary theme of von Ludwig's model of pretextual capitalist theory is the bridge between society and class. If capitalist objectivism holds, we have to choose between predialectic objectivism and Lacanist obscurity.</p>

        <p>Bataille's analysis of predialectic objectivism holds that culture is used in the service of archaic, sexist perceptions of art. A number of constructions concerning capitalist objectivism may be found. However, the primary theme of von Ludwig's model of pretextual capitalist theory is the bridge between society and class. If capitalist objectivism holds, we have to choose between predialectic objectivism and Lacanist obscurity.</p>
      </div>
      <div className='bg-amber-400 h-[100vh]'></div>
    </div>
  );
};

export default Home;
