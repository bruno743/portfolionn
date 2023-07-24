import React from "react";
import config from "../../pages/index.json";
import Image from "next/image";


const CopyBoard = () => {
  const contact = config.contact;
  const email = "brunofelipe743@gmail.com";
  const telefone = "(99) 988253421";

  return (
    <div className="pt-24 justify-center grid grid-rows-2 font-semibold text-lg text-end bg-white bg-clip-text text-transparent">
      <div className="w-[325px] flex flex-col space-y-6">
        <div className="flex flex-row justify-between">
          <Image className="" src="./images/telegram.svg" width={32} height={32} alt="telegram" />
          <span className="text-end" >{telefone}</span>
        </div>
        <div className="flex flex-row  justify-between">
          <Image className="" src="./images/mail.svg" width={32} height={32} alt="mail" />
          <span className="text-end">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default CopyBoard;
