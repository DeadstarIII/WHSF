import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../app/globals.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

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
      }, 3000);

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
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <section className="text-gray-700 bg-white body-font relative flex-grow">
          <div className="container px-6 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
                Reach out to the official authorities for inquiries or feedback.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto bg-gray-100 p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -m-2">
                  {/* Name Input */}
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-800 py-2 px-3 transition duration-200"
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

                  {/* Email Input */}
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-800 py-2 px-3 transition duration-200"
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

                  {/* Subject Input */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="subject"
                        className="leading-7 text-sm text-gray-600">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-800 py-2 px-3 transition duration-200"
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

                  {/* Message Input */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-800 py-2 px-3 resize-none h-32 transition duration-200"
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

                  {/* Submit Button */}
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex mx-auto text-white border-0 py-3 px-8 focus:outline-none bg-blue-600 hover:bg-blue-500 rounded-full text-xl transition-all"
                     disabled={state.submitting}>
                      Send
                    </button>
                  </div>
                </div>
              </form>
              {showSuccess && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
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
