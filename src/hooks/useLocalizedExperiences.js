import { useTranslation } from "react-i18next";
import { workExperiences } from "../constants/index.js";

const useLocalizedExperiences = () => {
  const { t } = useTranslation();

  return workExperiences.map((item) => ({
    ...item,
    pos: t("experienceData." + item.id + ".pos"),
    title: t("experienceData." + item.id + ".title"),
    duration: t("experienceData." + item.id + ".duration"),
  }));
};

export default useLocalizedExperiences;
