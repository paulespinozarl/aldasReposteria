
export const SwapComp = ( props ) => {

    const { image, texto } = props;

  return (
    <div className="swiper-slide p-5 flex justify-around">
        <div className="bg-pruebaBg equis flex justify-center items-center rounded-tl-xl rounded-bl-xl">
          <p className="text-white opacity-100">Hola</p>
        </div>
        <div className='image2 equis flex justify-center items-center rounded-tr-xl rounded-br-xl'> 
        <p className="text-white opacity-100">Adios</p>
        </div>
    </div>
  )
}
