import React from "react";
import { FaTimes } from "react-icons/fa";

const TherapistModal = ({ therapist, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className="modal-overlay">
        <dialog open className="modal">
          <div className="modal-box">
            {/* <button onClick={onClose} className="close-button">
              X
            </button> */}
            <button
              onClick={onClose}
              className="font-bold absolute top-4 right-1 text-red-500 hover:text-gray-700 "
            >
              <FaTimes />
            </button>

            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{therapist.name}</h3>
            <p className="mb-2">
              <strong>Location:</strong> {therapist.location}
            </p>
            <p className="mb-2">
              <strong>Service Type:</strong> {therapist.serviceType}
            </p>
            <p className="mb-2">
              <strong>Description:</strong> {therapist.description}
            </p>
            <p className="mb-2">
              <strong>Ratings:</strong> {therapist.ratings} ({therapist.reviews}{" "}
              reviews)
            </p>
            <p className="mb-2">
              <strong>Services Offered:</strong>
            </p>
            <ul className="list-disc list-inside mb-2">
              {therapist.servicesOffered.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
            <p className="mb-2">
              <strong>Availability:</strong> {therapist.availability}
            </p>
            <p className="mb-2">
              <strong>Contact:</strong> {therapist.contact}
            </p>
            <p className="mb-4">
              <strong>Email:</strong> {therapist.email}
            </p>
            <div className="modal-action">
              <button
                onClick={onClose}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default TherapistModal;
