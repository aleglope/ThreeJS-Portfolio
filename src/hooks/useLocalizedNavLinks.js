import { useTranslation } from "react-i18next";
import { navLinks } from "../constants/index.js";

const useLocalizedNavLinks = () => {
  const { t } = useTranslation();

  return navLinks.map((item) => ({
    ...item,
    name: t("navData." + item.id + ".name"),
  }));
};

export default useLocalizedNavLinks;
