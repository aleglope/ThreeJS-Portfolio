import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import { designCategories } from "../../constants/design.js";
import { clientProjects } from "../../constants/clientProjects.js";
import useLocalizedDesignProjects from "../../hooks/useLocalizedDesignProjects.js";

const DesignProjects = () => {
  const { t } = useTranslation();
  const projects = useLocalizedDesignProjects();
  const [filter, setFilter] = useState("All");
  const displayClients = ["All", "Client Work"].includes(filter);
  const displayedProjects = filter === "All"
    ? projects
    : projects.filter(({ category }) => category === filter);

  return (
    <section className="portfolio-anchor c-space my-20" id="design-projects" tabIndex={-1} aria-labelledby="design-projects-title">
      <header className="mb-8 max-w-2xl">
        <h2 id="design-projects-title" className="head-text mb-3">{t("designProjectsUI.heading")}</h2>
        <p className="text-lg text-neutral-300">{t("designProjectsUI.subheading")}</p>
      </header>

      <div role="group" aria-label={t("clientWork.filters")} className="mb-8 flex flex-wrap gap-2">
        {designCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            aria-controls="design-project-grid"
            className="min-h-11 rounded-full border border-white/10 bg-black-200 px-4 py-2 text-sm font-semibold text-neutral-300 hover:border-pink-300 aria-pressed:border-pink-300 aria-pressed:bg-pink-300/10 aria-pressed:text-pink-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-300"
          >
            {t(`designCategoriesData.${category}`)}
          </button>
        ))}
      </div>

      <div id="design-project-grid" className="space-y-10">
        {displayClients && (
          <ul className="grid gap-4 md:grid-cols-2">
            {clientProjects.map((project) => {
              const key = `clientWork.cases.${project.id}`;
              return (
                <li key={project.id} className={project.to ? "min-w-0" : "min-w-0 md:col-span-2"}>
                  <article className={`h-full overflow-hidden rounded-2xl border border-white/10 bg-black-200 ${project.to ? "" : "sm:grid sm:grid-cols-[minmax(0,1fr)_2fr]"}`}>
                    <img
                      src={project.cover.src}
                      width={project.cover.width}
                      height={project.cover.height}
                      alt={t(`${key}.coverAlt`)}
                      loading="lazy"
                      decoding="async"
                      className="aspect-video h-full max-h-80 w-full bg-black object-cover object-top"
                    />
                    <div className="p-4 sm:p-5">
                      <p className="mb-2 text-sm font-semibold text-pink-300">{t("clientWork.real")}</p>
                      <h3 className="text-2xl font-semibold text-white">{t(`${key}.title`)}</h3>
                      <p className="mt-2 leading-relaxed text-neutral-300">{t(`${key}.summary`)}</p>
                      {project.to ? (
                        <Link to={project.to} className="portfolio-link mt-2" aria-label={t("clientWork.readNamed", { title: t(`${key}.title`) })}>
                          {t("clientWork.read")} <MdArrowForward aria-hidden="true" />
                        </Link>
                      ) : (
                        <a href={project.href} className="portfolio-link mt-2">
                          {t(`${key}.visit`)} <MdArrowOutward aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        )}

        {displayedProjects.length > 0 && (
          <div>
            {displayClients && <h3 className="mb-4 text-xl font-semibold text-white">{t("clientWork.previous")}</h3>}
            <ul className="grid gap-4 md:grid-cols-2">
              {displayedProjects.map((project) => (
                <li key={project.id} className="min-w-0">
                  <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-black-200">
                    <img
                      src={project.image || project.videoUrl}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="aspect-video w-full object-cover"
                    />
                    <div className="p-4 sm:p-5">
                      <p className="mb-2 text-sm font-semibold text-pink-300">{t(`designCategoriesData.${project.category}`)}</p>
                      {displayClients ? (
                        <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                      ) : (
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      )}
                      <p className="mt-2 leading-relaxed text-neutral-300">{project.description}</p>
                      <Link to={`/design/project/${project.slug}`} className="portfolio-link mt-2" aria-label={t("clientWork.readNamed", { title: project.title })}>
                        {t("designProjectsUI.viewProject")} <MdArrowForward aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-9">
        <Link to="/design#contact" className="portfolio-link">{t("designProjectsUI.getInTouch")}</Link>
      </div>
    </section>
  );
};

export default DesignProjects;
