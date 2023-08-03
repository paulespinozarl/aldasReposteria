import { useState } from "react";
import { YoutubeModal } from "./YoutubeModal"


export const GridItems = ({image, title, description}) => {

  const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
    };


  return (
    <div className="flex mt-5 flex-col w-40 h-auto lg:w-60  justify-center items-center bg-gray-200 rounded-md">
        <div onClick={handleOpenModal} >
            <img className="w-36 md:w-40 h-auto lg:w-56 rounded-md mt-2" src={ image } alt="image" />
        </div>
        <div className="m-2 mb-0">
            { title }
        </div>
        <div className="text-sm m-2">
            { description }
        </div>
      <YoutubeModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  )
}
