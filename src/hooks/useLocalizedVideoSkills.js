import { useTranslation } from "react-i18next";
import { videoSkills } from "../constants/design.js";

const useLocalizedVideoSkills = () => {
  const { t } = useTranslation();

  return videoSkills.map((skill) => ({
    ...skill,
    title: t("videoSkillsData." + skill.id + ".title"),
    description: t("videoSkillsData." + skill.id + ".description"),
  }));
};

export default useLocalizedVideoSkills;
