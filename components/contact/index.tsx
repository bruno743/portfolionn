import React from "react";
import config from "../../pages/index.json";
import Clipboard from "../clipboard";

const Contact = () => {
  const contact = config.contact;
  return (
    <div id={contact.title} className="px-8 sm:px-12 md:px-32 pb-32 flex items-center flex-col bg-sky-600">
      <h2 className="mt-12 uppercase font-bold text-center text-white text-bold text-4xl">{contact.title}</h2>
      <Clipboard />
    </div>
  );
};

export default Contact;