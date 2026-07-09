import { useTranslation } from "react-i18next";
import { designNavLinks } from "../constants/design.js";

const useLocalizedDesignNav = () => {
  const { t } = useTranslation();

  return designNavLinks.map((item) => ({
    ...item,
    name: t("designNavData." + item.id + ".name"),
  }));
};

export default useLocalizedDesignNav;
