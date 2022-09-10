import { useEffect, useState, useRef } from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Form has been submitted!");
          setSubmitted(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong!");
          setLoading(false);
        }
      );
  };

  return (
    <div className="p-5 pb-8">
      <h2 className=" my-5 text-3xl lg:text-4xl font-semibold text-[#364f6b]">
        Connect with us
      </h2>

      <div className="flex gap-16">
        <div className="text-white flex-[3] bg-[#364f6b] rounded-xl p-5">
          <h2 className="text-lg mb-2">Tell us about your project</h2>
          <p className="text-xs text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            reprehenderit minima
          </p>
          {!submitted ? (
            <form className="my-5 text-white" ref={form} onSubmit={sendEmail}>
              <label className="block mb-5 ">
                <span className="text-xs">Your Name</span>
                <input
                  className="bg-[#333333] shadow border-none py-2 px-3 rounded form-input mt-1 block w-full ring-purple-500 "
                  type="text"
                  id="from_name"
                  name="from_name"
                  placeholder="name"
                  required
                />
              </label>
              <div className="flex flex-col md:flex-row md:gap-5">
                <label className="block mb-5 flex-1">
                  <span className="text-xs">Your Email</span>
                  <input
                    className="bg-[#333333] shadow border-none py-2 px-3 rounded form-input mt-1 block w-full ring-purple-500 "
                    type="email"
                    id="email_id"
                    name="email_id"
                    placeholder="email"
                    required
                  />
                </label>
                <label className="block mb-5 flex-1">
                  <span className="text-xs">Your Phone Number</span>
                  <input
                    className="bg-[#333333] shadow border-none py-2 px-3 rounded form-input mt-1 block w-full ring-purple-500 "
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="phone number"
                    required
                  />
                </label>
              </div>
              <label className="block mb-5 ">
                <span className="text-xs">Your Message</span>
                <textarea
                  className="bg-[#333333] shadow border-none rounded py-2 px-3 form-textarea mt-1 block w-full ring-purple-500 "
                  placeholder="Write your message here..."
                  rows={6}
                  id="message"
                  name="message"
                  required
                ></textarea>
              </label>

              <button
                disabled={loading}
                className="disabled:cursor-not-allowed block mx-auto mt-17 py-1.5 px-10 md:px-12 lg:px-14 rounded-3xl bg-[#43dde6] hover:bg-[#22b4bc] hover:border-purple-600 text-black my-5 cursor-pointer font-semibold active:bg-purple-300 "
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="mt-10 mb-5 text-sm md:text-lg md:mt-16">
              Thank you for filling, you will be contacted soon!
            </div>
          )}
        </div>

        <div className="hidden md:flex flex-[2]">
          <div className="flex flex-col justify-start gap-4 flex-[4]">
            <div>
              <h4 className="mb-2 text-xl">Address</h4>
              <p className="text-gray-700 text-xs">
                0199 Taylor Park, <br /> North Dakota, <br /> USA
              </p>
            </div>
            <hr className="mt-5 w-full border-2 bg-black max-w-md" />
            <div>
              <h4 className="mb-2 text-xl">Call us on</h4>
              <p className="text-gray-700 text-xs">
                + 123456789 <br /> info@gmail.com
              </p>
            </div>
            <hr className="mt-5 w-full border-2 bg-black max-w-md" />
            <div>
              <h4 className="mb-2 text-xl">Social Media</h4>
              <div className="flex gap-2">
                <AiFillInstagram
                  size={45}
                  color="gray"
                  className="hover:bg-[#43dde6] rounded-full p-1 cursor-pointer"
                />
                <AiFillTwitterCircle
                  size={45}
                  color="gray"
                  className="hover:bg-[#43dde6] rounded-full p-1 cursor-pointer"
                />
                <AiFillFacebook
                  size={45}
                  color="gray"
                  className="hover:bg-[#43dde6] rounded-full p-1 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
