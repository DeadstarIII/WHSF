"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../app/globals.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [contentHeight, setContentHeight] = useState(0);
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  useEffect(() => {
    const handleResize = () => {
      const headerHeight = document.querySelector("header").offsetHeight;
      const footerHeight = document.querySelector("footer").offsetHeight;
      setContentHeight(`calc(100vh - ${headerHeight}px - ${footerHeight}px)`);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [state, handleSubmit] = useForm(formId);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Hide the message after 3 seconds

      // Clear form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  return (
    <>
      <title>WHSF - Contact Us</title>
      <div className="flex flex-col min-h-screen">
        <Header />
        <section
          className="text-gray-400 bg-gray-900 body-font relative flex-grow"
          style={{ minHeight: contentHeight }}>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Contact the official authorities.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-400">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-400">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="subject"
                        className="leading-7 text-sm text-gray-400">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-400">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        value={formData.message}
                        onChange={handleChange}
                        required></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                      disabled={state.submitting}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              {showSuccess && (
                <div className="fixed bottom-4 right-4 bg-purple-600 text-white py-2 px-4 rounded shadow-lg">
                  Your message has been delivered successfully!
                </div>
              )}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
