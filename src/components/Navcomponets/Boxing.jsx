import React from "react";
import { Phone,Mail,MapPin } from "lucide-react";
const Boxing = () => {
  return (
    <div className="bg-white h-screen w-[400px] px-3 text-small">
      <div>
        <img
          src="https://www.mediatechtemple.com/wp-content/uploads/2023/09/mtt-5-1.png"
          alt=""
        />
        <p>
          MediaTechTemple, technology driving company which focusing on
          traditional as well as Innovation solutions
        </p>
        <p>
          We are providing integrated solutions as most beneficial for our
          client. We are focusing on IT Solutions, Marketing Solutions, Tele
          Solutions and Advertisement. We provide customized products and
          solutions to meet your goals.
        </p>
      </div>
      <div>
        <h3 className="mt-5 mb-4 font-bold">Contact Us</h3>
          <div className="flex items-start gap-2 text-sm mb-2 font-semibold">
            <Phone className="text-purple-600 w-4 h-4 mt-1" />
            <p>+91-7220867768</p>
          </div>
          <div className="flex items-start gap-2 text-sm mb-2 font-semibold">
            <Mail className="text-purple-600 w-4 h-4 mt-1" />
            <p>info@mediatechtemple.com</p>
          </div>
          <div className="flex items-start gap-2 text-sm font-semibold">
            <MapPin className="text-purple-600 w-4 h-4 mt-1" />
            <p>
              57, SWRAN JAYANTI NAGAR, BHARATPUR, Bharatpur,
              <br />
              Rajasthan 321001
            </p>
          </div>
      </div>
    </div>
  );
};

export default Boxing;
