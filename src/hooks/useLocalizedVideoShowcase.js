import { useTranslation } from "react-i18next";
import { mediaLocale, portfolioVideos, videoDuration } from "../constants/portfolioMedia.js";

const useLocalizedVideoShowcase = () => {
  const { i18n } = useTranslation();
  const locale = mediaLocale(i18n.resolvedLanguage);

  return portfolioVideos.map((video) => ({
    ...video,
    title: video.title[locale],
    description: video.description[locale],
    status: video.status[locale],
    duration: videoDuration(video.seconds),
  }));
};

export default useLocalizedVideoShowcase;
