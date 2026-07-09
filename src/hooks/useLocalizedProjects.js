import { useTranslation } from "react-i18next";
import { myProjects } from "../constants/index.js";

const useLocalizedProjects = () => {
  const { t } = useTranslation();

  return myProjects.map((project) => ({
    ...project,
    title: t("projectsData." + project.slug + ".title"),
    desc: t("projectsData." + project.slug + ".desc"),
    subdesc: t("projectsData." + project.slug + ".subdesc"),
  }));
};

export default useLocalizedProjects;
