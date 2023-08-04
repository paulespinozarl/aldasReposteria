
export const SwapComp = ( props ) => {

    const { image, texto } = props;

  return (
    <div className="swiper-slide flex justify-around bg-image-container" 
    style={{
      backgroundImage: `linear-gradient(rgb(222, 228, 243, 0.5), rgba(222, 228, 243, 0.5)), url(${image})`
    }}>
        <div className='flex justify-center items-center'> 
          <p className="text-black opacity-100">{ texto }</p>
        </div>
    </div>
  )
}
