import CustomGlobe from "../components/Globe.jsx";

const About = () => {
    return (
        <section className="c-space my-20">
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
                                backend development, with a focus on animated 3D websites.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Segundo elemento del grid */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid1.png"
                            alt="grid-2"
                            className="w-full sm:w-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Full Stack Developer</p>
                            <p className="grid-subtext">
                                I specialize in JavaScript/Typescript with a focus on React and
                                Next.js ecosystems.
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;