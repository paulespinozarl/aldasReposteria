import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export const Contacto = () => {
  return (
    <div className="bg-gray-100 py-8 h-118 lg:h-130 flex items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Contáctanos</h2>
        <p className="text-gray-600 mb-8">¡Estamos aquí para ayudarte! No dudes en contactarnos si tienes alguna pregunta o solicitud.</p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center">
            <FiPhone className="text-pink-400 text-2xl mr-2" />
            <span className="text-gray-800">+56 9 6293 6002</span>
          </div>
          <a href="https://wa.me/+56962936002" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <AiOutlineWhatsApp className="text-pink-400 text-2xl mr-2"/>
            <span>Escríbenos!</span>
          </a>
          <div className="flex items-center">
            <FiMail className="text-pink-400 text-2xl mr-2" />
            <a href="mailto:info@pasteleria.com" className="text-gray-800 hover:underline">info@aldasreposteria.com</a>
          </div>
          <div className="flex items-center">
            <FiMapPin className="text-pink-400 text-2xl mr-2" />
            <address className="text-gray-800">
              Chile,<br />
              Talca, CP 3460000
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

