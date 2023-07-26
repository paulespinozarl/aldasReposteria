

export const GridItems = ({image, title, description}) => {

  return (
    <div className="flex mt-5 flex-col w-52 h-72 lg:w-60 lg:h-96 justify-center items-center bg-gray-200 rounded-md">
        <div>
            <img className="w-40 h-52 lg:w-56 lg:h-72 rounded-md" src={ image } alt="image" />
        </div>
        <div >
            { title }
        </div>
        <div className="text-sm">
            { description }
        </div>
    </div>
  )
}
