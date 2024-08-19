const Premium = () => {
  return(
    <>
      <section className="premium bg-orange px-5 py-48 flex flex-col gap-48 h-625 md:w-356 md:rounded-[16px] md:p-48 md:ml-[304px] md:mt-[-714px] md:z-40 md:absolute xlg:w-512 xl:h-[632px] xlg:mt-[-711px] xlg:ml-[704px] xl:p-56">
        <div className="premiun-description flex flex-col gap-40">
          <div className="premium-description-title flex flex-col gap-24">
            <h2 className="text-40 leading-110 font-bold text-slate">
              Premium EQ
            </h2>
            <p className="text-slate text-18 xlg:text-20">
              Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take 
              your listening experience to a whole new level and access all our incredible features!
            </p>
          </div>
          <p className="flex gap-16 text-slate">
            <span className="text-64 leading-110 font-bold">
              $4
            </span>
            <span className="flex items-center text-20 leading-150">
              / month
            </span>
              
          </p>
        </div>

        <div className="container-buttoms flex flex-col gap-16">
        <a className="icon-apple text-white fill-current flex gap-8 justify-center items-center w-full h-64 bg-slate rounded-[12px]" tabIndex={0}>
        <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.683 4.681c1.359 0 2.798.745 3.821 2.029-3.356 1.851-2.812 6.674.58 7.965-.467 1.04-.69 1.504-1.292 2.425-.839 1.285-2.02 2.886-3.486 2.897-1.302.014-1.637-.852-3.403-.842-1.766.009-2.134.857-3.437.845C4 19.987 2.88 18.542 2.042 17.257-.302 13.667-.549 9.45.897 7.207c1.029-1.592 2.651-2.523 4.175-2.523 1.551 0 2.527.856 3.812.856 1.247 0 2.005-.859 3.8-.859ZM12.291 0c.178 1.215-.315 2.405-.968 3.246-.697.904-1.901 1.603-3.066 1.566-.213-1.163.332-2.36.995-3.167C9.978.756 11.224.074 12.291 0Z" fill="currentColor"/>
        </svg>
        <span className="text-18 font-bold leading-18 group-hover:text-slate">iOS Download</span>
        </a>

        <a className="icon-android text-slate fill-current flex gap-8 justify-center items-center w-full h-64 bg-white rounded-[12px]" tabIndex={0}>
          <img className="w-[16.7px] h-[20px]" src="./assets/icon-android.svg" alt="icon-apple" loading="lazy" decoding="async"/>
          <span className="text-18 font-bold leading-180">Android Download</span>
        </a>
        </div>
       
      </section>
    </>
  )
}

export default Premium