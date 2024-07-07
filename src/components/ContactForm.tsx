import React from "react";
import Button from "./Button";

const ContactForm = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col mb-6">
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Kooper"
          className="bg-gray-100 px-7 py-6 rounded focus:outline-primary"
        />
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="your@mail.com"
          className="bg-gray-100 px-7 py-6 rounded focus:outline-primary"
        />
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="phone" className="font-medium">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          placeholder="0000 564 2014"
          className="bg-gray-100 px-7 py-6 rounded focus:outline-primary"
        />
      </div>
      <div className="flex flex-col mb-8">
        <label htmlFor="message" className="font-medium">
          Message
        </label>
        <textarea
          name=""
          id="message"
          className="bg-gray-100 px-7 py-6 rounded resize-none focus:outline-primary"
          placeholder="Please enter your message"
          rows={5}
        ></textarea>
      </div>

      <Button
        type="submit"
        variant="solid"
        className="!bg-primary-500 text-white px-8 py-4 hover:!bg-blue transition-colors duration-300 hover:text-primary-200 w-full lg:w-fit"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
