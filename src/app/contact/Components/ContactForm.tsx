import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form
        target="_blank"
        action="https://formspree.io/f/mvolylne"
        method="POST"
      >
        <div className="flex flex-col m-auto px-5 sm:w-4/5">
          <div className="">
            <input
              type="text"
              name="Name"
              className="mb-3 w-full p-2 border rounded-sm my-1 border-black bg-main"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="">
            <input
              type="number"
              name="Phone"
              className="mb-3 w-full p-2 border rounded-sm my-1 border-black bg-main"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="">
            <input
              type="email"
              name="Email"
              className="mb-3 w-full p-2 border rounded-sm my-1 border-black bg-main"
              placeholder="Email Address"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="mb-3 h-[150px] p-2 border rounded-sm my-1
                                  border-black bg-main resize-none"
            name="Message"
            rows={10}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-link px-6 py-3 w-[200px] rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
