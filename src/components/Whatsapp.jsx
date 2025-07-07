import { RiWhatsappLine } from "@remixicon/react";

const Whatsapp = () => {
  return (
    <a
      className="fixed bottom-0 left-0 flex items-center gap-2 pl-5 pb-5 z-50"
    >
      <div className="h-[45px] w-[45px] rounded-full bg-green-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer">
        <RiWhatsappLine className="text-white text-xl" />
      </div>
      <h6 className="text-sm font-medium text-gray-800">Chat with Us</h6>
    </a>
  );
};

export default Whatsapp;
