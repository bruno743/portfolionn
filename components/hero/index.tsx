import React from "react";
import config from "../../pages/index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="h-screen bg-white overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-between">
        <h1 className="text-6xl mt-64 font-bold tracking-wide">
          Olá, meu nome é  
          <span className="ml-3 whitespace-nowrap bg-sky-600 bg-clip-text text-transparent">
            {hero.name}
          </span>
          .
        </h1>
        <h1 className="text-6xl font-bold tracking-wide mt-4">{hero.subtitle}</h1>
        <a href="#About" className="text-2xl font-bold p-0.5 mt-6 w-44 bg-sky-600">
          <div className="bg-white">
            <span className="block text-left py-0.5 px-2 font-semibold font-bold bg-sky-600 bg-clip-text text-transparent">
              Mais sobre mim
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
