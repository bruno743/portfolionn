import React from "react";
import config from "../../pages/index.json";
import Image from "next/image";
//import MyModal from "../myModal";

const About = () => {
  const about = config.about;
  //const [modalOpen, setModalOpen] = React.useState(false);

  /*const handleClick = () => {
    console.log('clicou');
    setModalOpen(!modalOpen);
  };*/
  return (
    <div id="About" className="px-8 md:px-32 pb-32 content-center bg-sky-600">
      <h1 className="pt-12 uppercase font-bold text-center text-white text-bold text-4xl">{about.name}</h1>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center">
        <div className="w-1/2 flex justify-center content-center">
          <Image 
            src={about.image} 
            alt="about" 
            className="shadow-lg rounded" 
            width={300} 
            height={300}
            />
        </div>
        <div className="pt-8 md:py-0 md:w-1/2 text-white md:ml-4 text-center md:text-left">
          <div className="about__primary">
            <span>{about.primary}</span>
          </div>
          <div className="mt-6">
            <span>{about.secondary}</span>
          </div>
          {/*<div className="mt-6 mx-auto md:mx-0 border-2 border-white py-1 px-2 w-36 text-center font-bold">
            <span className="about__resume cursor-pointer text-white text-l">Currículo</span>
            <button
              onClick={handleClick}
              className="cursor-pointer text-white text-l">
                  Currículo
            </button>
            <MyModal visible={modalOpen} />
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default About;