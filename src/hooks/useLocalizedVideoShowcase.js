import { useTranslation } from "react-i18next";
import { videoShowcase } from "../constants/design.js";

const useLocalizedVideoShowcase = () => {
  const { t } = useTranslation();

  return videoShowcase.map((video) => ({
    ...video,
    title: t("videoShowcaseData." + video.id + ".title"),
    description: t("videoShowcaseData." + video.id + ".description"),
  }));
};

export default useLocalizedVideoShowcase;
