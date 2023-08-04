import { useEffect } from "react";

export const YoutubeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Agregar/eliminar clase al body cuando el modal se abre/se cierra
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  return (
    <div
      onClick={onClose}
      className={`${
        isOpen ? 'fixed' : 'hidden'
      } top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50`}
    >
      <div className="bg-white rounded-lg shadow-lg">
        <iframe 
          src="https://www.youtube.com/embed/W5eA6p94KGw" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          className="rounded-md w-80 h-64 md:w-132 md:h-128"
        />
      </div>
    </div>
  );
};
