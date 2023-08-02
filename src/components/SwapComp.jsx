
export const SwapComp = ( props ) => {

    const { image, texto } = props;

  return (
    <div className="swiper-slide rounded-lg p-5 flex justify-around">
        <div className="image1 equis flex justify-center items-center">
          <p className="text-white opacity-100">Hola</p>
        </div>
        <div className='image2 equis flex justify-center items-center'> 
        <p className="text-white opacity-100">Adios</p>
        </div>
    </div>
  )
}
