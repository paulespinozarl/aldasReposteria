import { torta_12, torta_14, torta_2 } from "../../public"

export const Tips = () => {
  return (
    <>
      <div className='m-5 lg:m-20'>
          <div className="max-w-6xl mx-auto flex flex-wrap mt-8 mb-8 md:p-3 lg:p-0 relative">
            <div className="absolute top-0 mt-5 lg:top-5 md:left-5 left-0 lg:left-5 h-32 ">
              <h1 className='text-3xl sm:text-6xl md:text-7xl  font-bold dark:text-slate-500/30 text-slate-700/20'>¡Te ayudo a mejorar!</h1>
            </div>
            <div className=" mt-5 p-5 lg:border-l-4 border-pink-300 relative md:pl-9 pl-0 lg:mt-14">
              <h1 className="mt-8 text-2xl md:text-5xl font-bold text-gray-500 ">Tips de Repostería</h1>
            </div>
          </div>            
      </div>
      <div className="m-5 lg:m-20">
        <div className="flex bg-gray-200 rounded-md p-2 flex-col-2 justify-around shadow-md">
          <div className="flex flex-col justify-center">
            <span className="text-lg lg:text-xl">Agregar titulo</span>
            <span className="text-xs lg:text-sm">Agregar descripcion</span>
          </div>
          <div>
            <img className="h-32 lg:h-72 rounded-md" src={ torta_2 } alt=" postre" />
          </div>
        </div>
        <div className="flex bg-gray-200 rounded-md p-2 flex-col-2 justify-around shadow-md mt-5">
          <div className="flex flex-col justify-center">
            <span className="text-lg lg:text-xl">Agregar titulo</span>
            <span className="text-xs lg:text-sm">Agregar descripcion</span>
          </div>
          <div>
            <img className="h-32 lg:h-72 rounded-md" src={ torta_12 } alt=" postre" />
          </div>
        </div>
        <div className="flex bg-gray-200 rounded-md p-2 flex-col-2 justify-around shadow-md mt-5">
          <div className="flex flex-col justify-center">
            <span className="text-lg lg:text-xl">Agregar titulo</span>
            <span className="text-xs lg:text-sm">Agregar descripcion</span>
          </div>
          <div>
            <img className="h-32 lg:h-72 rounded-md" src={ torta_14 } alt=" postre" />
          </div>
        </div>
      </div>
    </>
  )
}
