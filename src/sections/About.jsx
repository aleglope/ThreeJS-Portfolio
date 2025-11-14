import CustomGlobe from "../components/Globe.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("agonzlopez.11@gmail.com");
      setHasCopied(true);
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error al copiar al portapapeles:", error);
    }
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Primer elemento del grid */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'am Alejandro</p>
              <p className="grid-subtext">
                With 1 year of experience, I have my skills in front-end and
                backend development, with a focus on animated 3D websites and
                cloud services.
              </p>
            </div>
          </div>
        </div>
        {/* Segundo elemento del grid */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Full Stack Developer</p>
              <p className="grid-subtext">
                I specialize in JavaScript/Typescript with a focus on React and
                Next.js ecosystems and AI services.
              </p>
            </div>
          </div>
        </div>
        {/* Globo 3D */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326] h-fit flex justify-center items-center">
              <CustomGlobe />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I'm based in <span className="text-green-500">Spain.</span>
              </p>
              <p className="grid-subtext mb-10">With remote work available.</p>
              <Button name="Contact me" isBeam cotainerClass="!w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div className="space-y-2">
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. My
                passion extends beyond just coding - I'm an avid gamer who sees
                the parallels between gaming strategies and coding solutions. I
                embrace AI tools for continuous learning and to enhance my
                productivity, making me a more efficient developer. Coding isn't
                just my profession - it's where my passion for technology,
                gaming, and innovation converges.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  agonzlopez.11@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
