"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Locale = "en" | "pt-BR";

type Messages = Record<string, string>;

type Dictionaries = Record<Locale, Messages>;

const dictionaries: Dictionaries = {
  "en": {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_intro: "Hi, I'm Kleiton Macedo",
    hero_subtitle:
      "Full-Stack Developer passionate about creating unique digital experiences. Turning ideas into code with creativity and precision.",
    hero_view_projects: "View Projects",
    hero_contact_me: "Contact Me",

    about_title: "About Me",
    about_hello: "Hi, I'm Kleiton!",
    about_p1:
      "I'm a full-stack developer passionate about creating digital experiences that combine functionality with elegant design. I love turning complex problems into simple, innovative solutions.",
    about_p2:
      "When I'm not coding, I enjoy exploring new technologies, contributing to open source projects, and always seeking new challenges that allow me to grow as a developer.",
    about_stats_projects: "Projects Completed",
    about_stats_years: "Years of Experience",
    about_stats_clients: "Happy Clients",
    about_stats_techs: "Technologies",

    skills_title: "Skills & Technologies",
    skills_desc:
      "I work with cutting-edge technologies to build scalable and performant applications",

    projects_title: "My Projects",
    projects_desc:
      "Here are some of my recent projects that showcase my skills and passion for development",
    projects_view_more: "View More",

    contact_title: "Let's Work Together",
    contact_desc:
      "Have a project in mind? I'd love to hear more about it. Let's discuss how we can bring your ideas to life.",
    contact_form_name: "Your Name",
    contact_form_email: "Your Email",
    contact_form_message: "Your Message",
    contact_sending: "Sending...",
    contact_send_message: "Send Message",
    contact_me: "Contact Me",
    contact_follow_me: "Follow Me",

    footer_quick_links: "Quick Links",
    footer_contacts: "Contacts",
    footer_rights: "All rights reserved.",
  },
  "pt-BR": {
    nav_home: "Início",
    nav_about: "Sobre",
    nav_skills: "Habilidades",
    nav_projects: "Projetos",
    nav_contact: "Contato",

    hero_intro: "Olá, eu sou o Kleiton Macedo",
    hero_subtitle:
      "Desenvolvedor Full-Stack apaixonado por criar experiências digitais únicas. Transformando ideias em código com criatividade e precisão.",
    hero_view_projects: "Ver Projetos",
    hero_contact_me: "Fale Comigo",

    about_title: "Sobre Mim",
    about_hello: "Olá, eu sou o Kleiton!",
    about_p1:
      "Sou um desenvolvedor full-stack apaixonado por criar experiências digitais que unem funcionalidade e design elegante. Adoro transformar problemas complexos em soluções simples e inovadoras.",
    about_p2:
      "Quando não estou programando, gosto de explorar novas tecnologias, contribuir com projetos open source e buscar desafios que me façam evoluir como desenvolvedor.",
    about_stats_projects: "Projetos Concluídos",
    about_stats_years: "Anos de Experiência",
    about_stats_clients: "Clientes Satisfeitos",
    about_stats_techs: "Tecnologias",

    skills_title: "Habilidades & Tecnologias",
    skills_desc:
      "Trabalho com tecnologias de ponta para construir aplicações escaláveis e performáticas",

    projects_title: "Meus Projetos",
    projects_desc:
      "Aqui estão alguns dos meus projetos recentes que demonstram minhas habilidades e paixão por desenvolvimento",
    projects_view_more: "Ver Mais",

    contact_title: "Vamos Trabalhar Juntos",
    contact_desc:
      "Tem um projeto em mente? Vou adorar saber mais. Vamos conversar sobre como podemos dar vida às suas ideias.",
    contact_form_name: "Seu Nome",
    contact_form_email: "Seu Email",
    contact_form_message: "Sua Mensagem",
    contact_sending: "Enviando...",
    contact_send_message: "Enviar Mensagem",
    contact_me: "Entre em Contato",
    contact_follow_me: "Siga-me",

    footer_quick_links: "Links Rápidos",
    footer_contacts: "Contatos",
    footer_rights: "Todos os direitos reservados.",
  },
};

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof typeof dictionaries["en"]) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    return (saved as Locale) || "en";
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const translate = useCallback(
    (key: keyof typeof dictionaries["en"]) => {
      const dict = dictionaries[locale];
      return dict[key] ?? String(key);
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t: translate }),
    [locale, translate]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}


