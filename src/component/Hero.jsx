const Hero = () => {
  return (
    <>
      <div className="hero py-64 px-5 custom-bg-size md:px-10 md:py-64 xlg:px-80">
        <div className="hero-container flex flex-col gap-64 md:gap-128">

          <div className="hero-container-logo w-full xl:w-1120 xlg:mx-auto">
            <img className="w-[144px] h-[32px]" src="./assets/logo.svg" alt="equalizer" loading="lazy" decoding="async"/>
          </div>
          

          <div className="container-description ">
            
            <div className="container-description-content flex flex-col gap-40 w-full xl:w-1120 xl:mx-auto">
              <h1 className="text-40 font-bold leading-100 -tracking-1 text-slate md:text-64 md:w-416 xlg:text-88 xlg:w-928">
                We make your music sound extraordinary.
              </h1>

              <p className="text-slate md:text-18 md:w-504 xlg:w-736 xlg:text-20">
                A system audio equalizer specifically designed for Android and iOS. Freely tune the 
                way your music sounds with a professional grade parametric EQ & volume mixer. Control 
                bass, mids, treble, gain control, reverb, and more!
              </p>
            </div>
            
          
          </div>
          
        </div>

      </div>

      <div className="mobile-illustration flex justify-center overflow-hidden h-[490px] md:h-[1000px] md:justify-start md:relative md:z-30">

        <img  className="w-[208.97px] h-[430px] z-20 absolute  md:w-[270.21px] md:h-[556px] md:mt-86 md:ml-[86.9px] xlg:w-[310px] xlg:h-[642px] xlg:mt-[79px] xlg:ml-[260px]" src="./assets/illustration-app.png" alt="smartphone" loading="lazy" decoding="async"/>

        <div className="mobile-container-illustration w-full h-[380] flex justify-center mt-[110px] md:mt-0 md:py-200 md:px-40 md:h-full xl:px-0 xlg:w-1120 xlg:mx-auto">
          
          <div className="mobile-container-background bg-slate w-full md:w-full md:h-[600px] md:rounded-[12px]">
            <img className="z-10 relative w-[312px] h-[468px] mx-auto md:mx-0 xlg:ml-[368px]" src="./assets/bg-pattern-2.svg"/>
          </div>
         
        </div>  
        
      </div>
    </>
  )
}

export default Hero