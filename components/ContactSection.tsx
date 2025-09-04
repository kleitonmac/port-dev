"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "./i18n/LanguageContext";
import emailjs from "@emailjs/browser";
import "../styles/contact-form.css";

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_f7vdpwj",   // ✅ seu Service ID
        "template_kleiton", // ✅ seu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "z7Kgjh2E-NpAciieW" // ✅ sua Public API Key
      )
      .then(() => {
        alert("✅ Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("❌ Erro ao enviar mensagem. Tente novamente.");
      })
      .finally(() => setIsSubmitting(false));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">{t("contact_title")}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact_desc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="contact-form space-y-6 bg-card border border-border rounded-xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <motion.input
                  type="text"
                  name="name"
                  placeholder={t("contact_form_name")}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-black"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <motion.input
                  type="email"
                  name="email"
                  placeholder={t("contact_form_email")}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-black"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <motion.textarea
                  name="message"
                  placeholder={t("contact_form_message")}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none placeholder:text-black"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>{t("contact_sending")}</span>
                  </>
                ) : (
                  <span>{t("contact_send_message")}</span>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
