"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { sendMail } from "./actions";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex justify-center">
      <form
        // onSubmit={handleSubmit}
        action="https://usebasin.com/f/abf26cac09e9"
        method="POST"
        className="w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 ">Kontakt Formular</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name <span className="text-red-500 inline">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Dein Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-500 inline">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Deine Email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Nachricht <span className="text-red-500 inline">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            placeholder="Deine Nachricht an uns"
            required
          ></textarea>
        </div>

        <div className="inline-flex flex-column items-start  jusitfy-start">
          <input type="checkbox" required className="mr-1" />
          <p>
            Hiermit erkläre ich mich einverstanden, dass meine Daten zur
            bearbeitung Ihrer Anfrage verwendet werden dürfen.{" "}
            <span className="text-red-500 inline">*</span>
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
        >
          Send
        </button>
      </form>
    </div>
  );
}
