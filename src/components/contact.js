
import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage(""); // Clear previous messages
    setErrorMessage("");

    axios
      .post("http://localhost:8081/users", values)
      .then((res) => {
        setSuccessMessage("Message sent successfully!");
        setValues({ name: "", email: "", phone: "", message: "" }); // Clear form
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Failed to send message. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}

      <input
        className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
        type="text"
        name="name"
        placeholder="Name*"
        required
        value={values.name}
        onChange={handleChange}
      />
      <input
        className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
        type="email"
        name="email"
        placeholder="Email*"
        required
        value={values.email}
        onChange={handleChange}
      />
      <input
        className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
        type="tel"
        name="phone"
        placeholder="Phone*"
        required
        value={values.phone}
        onChange={handleChange}
      />
      <textarea
        className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-600"
        name="message"
        placeholder="Message*"
        value={values.message}
        onChange={handleChange}
      />
      <div className="flex gap-x-2">
        <button
          type="submit"
          className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
        >
          Send Message
        </button>
        <button
          type="button"
          className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition"
        >
          Call
        </button>
      </div>
    </form>
  );
}

export default Contact;
