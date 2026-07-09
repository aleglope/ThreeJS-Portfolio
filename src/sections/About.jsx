import CustomGlobe from "../components/Globe.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
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
              <p className="grid-headtext">{t("about.card1Title")}</p>
              <p className="grid-subtext">{t("about.card1Text")}</p>
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
              <p className="grid-headtext">{t("about.card2Title")}</p>
              <p className="grid-subtext">{t("about.card2Text")}</p>
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
              <p className="grid-headtext">{t("about.card3Title")}</p>
              <p className="grid-subtext">
                {t("about.card3LocationPrefix")}{" "}
                <span className="text-green-500">{t("about.card3Place")}</span>
              </p>
              <p className="grid-subtext mb-10">
                {t("about.card3Availability")}
              </p>
              <Button
                name={t("about.card3Cta")}
                isBeam
                cotainerClass="!w-full mt-10"
              />
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
              <p className="grid-headtext">{t("about.card4Title")}</p>
              <p className="grid-subtext">{t("about.card4Text")}</p>
              <a
                href="https://github.com/aleglope/congress-tech-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-subtext underline inline-block hover:text-white transition-colors"
              >
                {t("about.card4Link")}
              </a>
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
              <p className="grid-subtext text-center">
                {t("about.copyLabel")}
              </p>
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
