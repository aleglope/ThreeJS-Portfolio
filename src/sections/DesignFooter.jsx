import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="design-footer c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex flex-wrap gap-x-2 gap-y-1">
        <p>{t("footer.terms")}</p>
        <p aria-hidden="true">|</p>
        <p>{t("footer.privacy")}</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/aleglope"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub: aleglope"
          title="GitHub: aleglope"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.tiktok.com/@alewencesai"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="TikTok: @alewencesai"
          title="TikTok: @alewencesai"
        >
          <img src="/assets/tiktok.svg" alt="tiktok" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.instagram.com/alewences.artia/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Instagram: @alewences.artia"
          title="Instagram: @alewences.artia"
        >
          <img src="/assets/instagram.svg" alt="" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">{t("footer.copyright")}</p>
    </footer>
  );
};

export default Footer;
