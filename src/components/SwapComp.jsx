
export const SwapComp = ( props ) => {

    const { image, texto } = props;

  return (
    <div className="swiper-slide rounded-lg p-5 m-2 flex justify-around">
        <div>
            <img className="w-40 h-52 lg:w-56 lg:h-72 rounded-lg shadow-sm shadow-gray-700" src={ image } alt="Slide 1" />
        </div>
        <div className='m-8 flex justify-center items-center'> 
             <p className='text-lg lg:text-3xl'>{ texto }</p>
        </div>
    </div>
  )
}
