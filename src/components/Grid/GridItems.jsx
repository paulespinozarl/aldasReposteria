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
    <div className="flex mt-5 flex-col w-52 h-auto lg:w-60  justify-center items-center bg-gray-200 rounded-md">
        <div>
            <img className="w-40 h-52 lg:w-56 lg:h-72 rounded-md mt-2" src={ image } alt="image" />
        </div>
        <div className="m-2 mb-0">
            { title }
        </div>
        <div className="text-sm m-2">
            { description }
        </div>
        <button
        className="px-4 py-2 my-4 bg-pink-50 border border-pink-300 text-pink-300 rounded-md"
        onClick={handleOpenModal}
      >
        Video
      </button>
      <YoutubeModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  )
}
