import { useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";
import { servicesUrl } from "../constants/services.js";
import { professionalArchive, professionalCases, recentWork } from "../constants/recentWork.js";

const velvetWebsites = [
  { id: "velvet", title: "Velvet Tattoo Studio", href: "https://velvetatto.com/es" },
  { id: "elcamino", title: "El Camino Tattoo", href: "https://elcaminotattoo.es/" },
  { id: "academy", title: "Velvet Tattoo Academy", href: "https://velvettattooacademy.es/" },
];

const RecentWork = () => {
  const { t, i18n } = useTranslation();
  const localeSuffix = i18n.resolvedLanguage === "es" ? ".es.md" : ".md";

  return (
    <section id="recent-work" tabIndex={-1} aria-labelledby="recent-work-heading" className="portfolio-anchor c-space my-20">
      <header className="mb-8 max-w-2xl">
        <h2 id="recent-work-heading" className="head-text mb-3">{t("recentWork.heading")}</h2>
        <p className="text-lg text-neutral-300">{t("recentWork.intro")}</p>
      </header>

      <ul className="grid gap-3 md:grid-cols-2">
        {recentWork.map(({ id, status, caseUrl, href }) => {
          const entry = `recentWork.projects.${id}`;
          const title = t(`${entry}.title`);
          return (
            <li key={id} className={id === "velvet" ? "min-w-0 md:col-span-2" : "min-w-0"}>
              <article className="h-full rounded-xl border border-white/10 bg-black-200 p-4 sm:p-5">
                <p className="mb-2 text-sm font-semibold text-blue-300">{t(`recentWork.status.${status}`)}</p>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 max-w-prose leading-relaxed text-neutral-300">{t(`${entry}.description`)}</p>
                {id === "velvet" && (
                  <ul className="mt-2 flex flex-wrap gap-x-4">
                    <li><a href={servicesUrl("/casos/velvet")} className="portfolio-link text-blue-300 hover:text-blue-200">{t("recentWork.velvetCase")}</a></li>
                    {velvetWebsites.map((website) => (
                      <li key={website.id}>
                        <a href={website.href} className="portfolio-link text-blue-300 hover:text-blue-200">
                          {website.title} <MdArrowOutward aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {(caseUrl || href) && (
                  <a
                    href={caseUrl ? `${caseUrl}${localeSuffix}` : href}
                    aria-label={t(caseUrl ? "recentWork.readNamed" : "recentWork.repositoryNamed", { title })}
                    className="portfolio-link mt-2 text-blue-300 hover:text-blue-200"
                  >
                    {t(caseUrl ? "recentWork.read" : "recentWork.repository")} <MdArrowOutward aria-hidden="true" />
                  </a>
                )}
              </article>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 border-t border-white/10 pt-7">
        <h3 className="text-2xl font-semibold text-white">{t("recentWork.archiveTitle")}</h3>
        <p className="mt-2 max-w-prose leading-relaxed text-neutral-300">{t("recentWork.archiveIntro")}</p>
        <ul className="mt-5 grid gap-3 md:grid-cols-3">
          {professionalCases.map(({ id, href }) => {
            const entry = `recentWork.professional.${id}`;
            const title = t(`${entry}.title`);
            return (
              <li key={id} className="min-w-0 rounded-xl border border-white/10 bg-black-200 p-4">
                <h4 className="text-lg font-semibold text-white">{title}</h4>
                <p className="mt-2 leading-relaxed text-neutral-300">{t(`${entry}.description`)}</p>
                <a href={href} aria-label={t("recentWork.readNamed", { title })} className="portfolio-link mt-2 text-blue-300 hover:text-blue-200">
                  {t("recentWork.read")} <MdArrowOutward aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
        <a href={professionalArchive} className="portfolio-link mt-4 text-blue-300 hover:text-blue-200">
          {t("recentWork.archiveLink")} <MdArrowOutward aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default RecentWork;
