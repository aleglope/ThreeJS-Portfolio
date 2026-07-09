import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const Contact = ({
  title,
  description,
  showProjectType = false,
  projectTypes = [],
  buttonClassName = "field-btn",
}) => {
  const { t } = useTranslation();
  const formRef = useRef();

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
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          setLoading(false);
          showAlert({
            show: true,
            text: t("contact.alerts.success"),
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
              ...(showProjectType && {
                projectType: projectTypes[0]?.value || "design",
              }),
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: t("contact.alerts.error"),
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">{heading}</h3>
          <p className="text-lg text-white-600 mt-3">{subheading}</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">{t("contact.form.name")}</span>
              <input
                type="text"
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
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={t("contact.form.emailPlaceholder")}
              />
            </label>

            {showProjectType && (
              <label className="space-y-3">
                <span className="field-label">{t("contact.form.projectType")}</span>
                <select
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

            <label className="space-y-3">
              <span className="field-label">{t("contact.form.message")}</span>
              <textarea
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
              className={buttonClassName}
              type="submit"
              disabled={loading}
            >
              {loading ? t("contact.form.sending") : t("contact.form.send")}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
