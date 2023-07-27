import { useState } from "react";
import { YoutubeModal } from "./YoutubeModal"
import { GridItems } from "./GridItems";
import { bb_1, bb_2, bb_3, cup_1, cup_2, cup_3, cup_4, cup_5 } from '../../../public'


export const GridModal = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
            <GridItems image={ bb_1 } title="Cupcakes" description="Bulda e ricos"/>
            <GridItems image={ bb_2 } title="Bebé" description="Bulda e ricos"/>
            <GridItems image={ bb_3 } title="Tortas" description="Bulda e ricos"/>
            <GridItems image={ cup_5 } title="Cinnamon Rolls" description="Bulda e ricos"/>
            <GridItems image={ cup_2 } title="Suspiros" description="Bulda e ricos"/>
            <GridItems image={ cup_1 } title="Suspiros" description="Bulda e ricos"/>
            <GridItems image={ cup_3 } title="Suspiros" description="Bulda e ricos"/>
            <GridItems image={ cup_4 } title="Suspiros" description="Bulda e ricos"/>
            
        </div>
      <button
        className="px-4 py-2 my-4 bg-pink-50 border border-pink-300 text-pink-300 rounded-md"
        onClick={handleOpenModal}
      >
        YouTube
      </button>
      <YoutubeModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  )
}
