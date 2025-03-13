import React, { useState, useEffect } from "react";
import { housesData } from "../data";
import { useParams, Link } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id));

  const [currentImage, setCurrentImage] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "Hello, I am interested in this property.",
  });

  useEffect(() => {
    if (house) {
      setCurrentImage(house.imageLg || house.imageGallery?.[0] || "");
    }
  }, [house]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".phone-box") && !event.target.closest(".call-button")) {
        setShowPhoneNumber(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (!house) {
    return <h2 className="text-center text-2xl font-semibold">Property Not Found</h2>;
  }

  const handleImageClick = () => {
    if (!house.imageGallery || house.imageGallery.length === 0) return;
    const nextIndex = (imageIndex + 1) % house.imageGallery.length;
    setCurrentImage(house.imageGallery[nextIndex]);
    setImageIndex(nextIndex);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMail = () => {
    const subject = encodeURIComponent(`Inquiry about ${house.name}`);
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in the property located at ${house.address}.\n\n` +
      `Here are my details:\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}\n\nThank you.`
    );
  
    window.location.href = `mailto:afifimohammad207@gmail.com?subject=${subject}&body=${body}`;
  };
  

  

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">{house.type}</div>
            <div className="bg-violet-500 text-white px-3 rounded-full">{house.country}</div>
            <div className="bg-gray-500 text-white px-3 rounded-full">{house.sale}</div>
          </div>
          <div className="text-3xl font-semibold text-violet-600">${house.price}</div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img
                src={currentImage}
                alt={house.name}
                className="rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition"
                onClick={handleImageClick}
              />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms} Beds</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms} Baths</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house.surface} sqft</div>
              </div>
            </div>

            <p className="text-gray-700">{house.description}</p>
          </div>

          {/* Right Side - Contact Agent */}
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 shadow-lg">
            {house.agent && (
              <div className="flex items-center gap-x-4 mb-8">
                <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                  <img src={house.agent.image} alt={house.agent.name} className="rounded-full" />
                </div>
                <div>
                  <div className="font-bold text-lg">{house.agent.name}</div>
                  <Link to={`/agents/${house.agent.id}`} className="text-violet-700 text-sm hover:underline">
                    View Listings
                  </Link>
                </div>
              </div>
            )}

            {/* Contact Form */}
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                name="name"
                placeholder="Full Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="tel"
                name="phone"
                placeholder="Phone number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-600"
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
              />

              {/* Buttons */}
              <div className="flex gap-x-2 relative">
                <button type="button" className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition" onClick={sendMail}>
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
