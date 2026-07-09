import { useTranslation } from "react-i18next";
import { projectTypes } from "../constants/design.js";

const useLocalizedProjectTypes = () => {
  const { t } = useTranslation();

  return projectTypes.map((type) => ({
    ...type,
    label: t("projectTypesData." + type.value),
  }));
};

export default useLocalizedProjectTypes;
