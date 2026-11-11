import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
import { servicesUrl } from "../constants/services.js";

const Contact = ({
  title,
  description,
  showProjectType = false,
  projectTypes = [],
  buttonClassName = "field-btn",
  variant = "terminal",
}) => {
  const { t, i18n } = useTranslation();
  const formRef = useRef();
  const sendingRef = useRef(false);
  const mountedRef = useRef(true);
  const configured = Boolean(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID && import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID && import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  const english = i18n.resolvedLanguage === "en";
  const isPanel = variant === "panel";

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  const heading = title ?? t("contact.title");
  const subheading = description ?? t("contact.description");

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    ...(showProjectType && { projectType: projectTypes[0]?.value || "design" }),
  });

  const handleChange = ({ target: { name, value } }) => {
    hideAlert();
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sendingRef.current || !configured) return;
    sendingRef.current = true;
    hideAlert();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Alejandro G.L.",
          from_email: form.email,
          to_email: "agonzlopez.11@gmail.com",
          message:
            showProjectType && form.projectType
              ? `[${form.projectType.toUpperCase()}] ${form.message}`
              : form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          sendingRef.current = false;
          if (!mountedRef.current) return;
          setLoading(false);
          showAlert({
            show: true,
            text: t("contact.alerts.success"),
            type: "success",
          });

          setForm({
              name: "",
              email: "",
              message: "",
              ...(showProjectType && {
                projectType: projectTypes[0]?.value || "design",
              }),
          });
        },
        () => {
          sendingRef.current = false;
          if (!mountedRef.current) return;
          setLoading(false);

          showAlert({
            show: true,
            text: t("contact.alerts.error"),
            type: "danger",
          });
        }
      );
  };

  const introduction = (
    <>
      <h2 className="head-text" id="contact-heading">{heading}</h2>
      <p className="text-lg text-white-600 mt-3">{subheading}</p>
      <a
        href={servicesUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300 transition-colors"
      >
        {t("contact.servicesCta")}
      </a>
    </>
  );

  return (
    <section className={`c-space my-20 ${isPanel ? "design-contact" : ""}`} id="contact" aria-labelledby="contact-heading">
      <div className={isPanel ? "design-contact__panel" : "relative min-h-screen flex items-center justify-center flex-col"}>
        {!isPanel && <img
          src="/assets/terminal.png"
          alt=""
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />}

        <div className={isPanel ? "design-contact__layout" : "contact-container"}>
          {isPanel ? <div className="design-contact__intro">{introduction}</div> : introduction}

          {!configured ? (
            <p className={`${isPanel ? "design-contact__email" : "mt-8"} leading-relaxed text-white-600`}>
              {english ? "Tell me about your project by email." : "Cuéntame tu proyecto por correo."}{" "}
              <a className="portfolio-link break-all" href="mailto:agonzlopez.11@gmail.com">agonzlopez.11@gmail.com</a>
            </p>
          ) : <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={isPanel ? "design-contact__form" : "mt-12 flex flex-col space-y-7"}
            aria-busy={loading}
          >
            <label className="space-y-3">
              <span className="field-label">{t("contact.form.name")}</span>
              <input
                type="text"
                disabled={loading}
                autoComplete="name"
                maxLength={120}
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={t("contact.form.namePlaceholder")}
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">{t("contact.form.email")}</span>
              <input
                type="email"
                disabled={loading}
                autoComplete="email"
                maxLength={254}
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={t("contact.form.emailPlaceholder")}
              />
            </label>

            {showProjectType && (
              <label className={`space-y-3 ${isPanel ? "design-contact__wide" : ""}`}>
                <span className="field-label">{t("contact.form.projectType")}</span>
                <select
                  disabled={loading}
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="field-input"
                >
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label className={`space-y-3 ${isPanel ? "design-contact__wide" : ""}`}>
              <span className="field-label">{t("contact.form.message")}</span>
              <textarea
                disabled={loading}
                maxLength={5000}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder={t("contact.form.messagePlaceholder")}
              />
            </label>

            <button
              className={`${buttonClassName} ${isPanel ? "design-contact__wide" : ""}`}
              type="submit"
              disabled={loading}
            >
              {loading ? t("contact.form.sending") : t("contact.form.send")}

              <img
                src="/assets/arrow-up.png"
                alt=""
                className="field-btn_arrow"
              />
            </button>
            <p className={`text-sm text-white-600 ${isPanel ? "design-contact__wide" : ""}`}>
              <a href={servicesUrl('/privacidad')} className="portfolio-link">{t('footer.privacy')}</a>
            </p>
            {alert.show && <Alert {...alert} />}
          </form>}
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  showProjectType: PropTypes.bool,
  projectTypes: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string.isRequired })),
  buttonClassName: PropTypes.string,
  variant: PropTypes.oneOf(["terminal", "panel"]),
};
export default Contact;
