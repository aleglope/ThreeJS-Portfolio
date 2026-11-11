import { useTranslation } from "react-i18next";
import { projectDetails } from "../constants/design.js";

const useLocalizedProjectDetails = (slug) => {
  const { t } = useTranslation();

  const project = projectDetails[slug];
  if (!project) return null;

  const base = "projectDetailsData." + slug;

  const localized = {
    ...project,
    title: t(base + ".title"),
    category: t(base + ".category"),
    fullDescription: t(base + ".fullDescription"),
    client: t(base + ".client"),
    duration: t(base + ".duration"),
  };

  if (project.videos) {
    localized.videos = project.videos.map((video) => ({
      ...video,
      title: t(base + ".videos." + video.id + ".title"),
      description: t(base + ".videos." + video.id + ".description"),
    }));
  }

  if (project.imageGallery) {
    const localizedGallery = {};
    for (const group of Object.keys(project.imageGallery)) {
      localizedGallery[group] = project.imageGallery[group].map((item) => ({
        ...item,
        title: t(base + ".gallery." + group + "." + item.id + ".title"),
        description: t(
          base + ".gallery." + group + "." + item.id + ".description"
        ),
      }));
    }
    localized.imageGallery = localizedGallery;
  }

  return localized;
};

export default useLocalizedProjectDetails;
