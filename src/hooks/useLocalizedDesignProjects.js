import { useTranslation } from "react-i18next";
import { designProjects } from "../constants/design.js";

const useLocalizedDesignProjects = () => {
  const { t } = useTranslation();

  return designProjects.map((project) => ({
    ...project,
    title: t("designProjectsData." + project.slug + ".title"),
    description: t("designProjectsData." + project.slug + ".description"),
  }));
};

export default useLocalizedDesignProjects;
