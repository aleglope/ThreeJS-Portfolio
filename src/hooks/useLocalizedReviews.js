import { useTranslation } from "react-i18next";
import { clientReviews } from "../constants/index.js";

const useLocalizedReviews = () => {
  const { t } = useTranslation();

  return clientReviews.map((item) => ({
    ...item,
    position: t("reviewsData." + item.id + ".position"),
    review: t("reviewsData." + item.id + ".review"),
  }));
};

export default useLocalizedReviews;
