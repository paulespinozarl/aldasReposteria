
export const SwapComp = ( props ) => {

    const { image, texto } = props;

  return (
    <div className="swiper-slide flex justify-around">
        {/* <div className="bg-pruebaBg equis flex justify-center items-center rounded-tl-xl rounded-bl-xl">
          <p className="text-black text-3xl opacity-100">Texto</p>
        </div> */}
        <div className='equis flex justify-center items-center'> 
        <p className="text-black opacity-100">Texto</p>
        </div>
    </div>
  )
}
