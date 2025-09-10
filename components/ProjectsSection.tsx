"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./i18n/LanguageContext";

export function ProjectsSection() {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      title: "Prime Barbershop",
      description: t("project_prime_barbershop_desc"),
      technologies: ["TypeScript", "React", "MongoDB", "API", "Styled-Components"],
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80",
      link: "https://barbeariaprimeshop.vercel.app/",
      github: "https://github.com/kleitonmac",
    },
    {
      id: 2,
      title: "Grão & Aroma Cafeteria",
      description: t("project_grao_aroma_desc"),
      technologies: ["HTML", "CSS", "Javascript", "Styled-Components"],
      image:
        "https://amaisd.com.br/wp-content/uploads/2023/10/cafeteriadecor.jpg",
      link: "https://cafeteriagraoearoma.vercel.app/",
      github: "https://github.com/kleitonmac",
    },
    {
      id: 3,
      title: "Alana boutique",
      description: t("project_alana_boutique_desc"),
      technologies: ["Prisma", "Node", "CSS", "Jsx", "React", "Styled-Components"],
      image:
        "https://raw.githubusercontent.com/kleitonmac/boutique/refs/heads/main/public/resume.png",
      link: "https://boutiquelb.vercel.app/",
      github: "https://github.com/kleitonmac",
    },
    {
      id: 4,
      title: "Loja Nike",
      description: t("project_nike_store_desc"),
      technologies: ["Javascript", "CSS", "Styled-Components"],
      image:
        "https://raw.githubusercontent.com/kleitonmac/nike/refs/heads/main/assets/print-projeto.png",
      link: "https://nike-delta-sooty.vercel.app/",
      github: "https://github.com/kleitonmac/nike",
    },
    {
      id: 5,
      title: "Inventory Management System",
      description: t("project_inventory_system_desc"),
      technologies: ["Python", "Django", "Styled-Components"],
      image:
        "https://raw.githubusercontent.com/kleitonmac/sge/refs/heads/main/img/image.png",
      link: "https://github.com/kleitonmac/sge",
      github: "https://github.com/kleitonmac/sge",
    },
    {
      id: 6,
      title: "Consórcio Dev",
      description: t("project_consorcio_dev_desc"),
      technologies: ["Python", "Django", "Styled-Components"],
      image:
        "https://raw.githubusercontent.com/kleitonmac/carros/refs/heads/main/img/menu.png",
      link: "https://github.com/kleitonmac/carros",
      github: "https://github.com/kleitonmac/carros",
    },
    {
      id: 7,
      title: "Parking Management System",
      description: t("project_parking_system_desc"),
      technologies: ["Django", "API", "AI", "Postman"],
      image:
        "https://raw.githubusercontent.com/kleitonmac/estacionamento/refs/heads/main/img/backend-img.png",
      link: "https://github.com/kleitonmac/estacionamento",
      github: "https://github.com/kleitonmac/estacionamento",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">{t("projects_title")}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("projects_desc")}</p>
        </motion.div>

        {/* Project grid */}
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 },
                }}
                className="relative bg-card border border-border rounded-xl overflow-hidden transform-gpu transition-all duration-300 group-hover:shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className=" p-6 flex flex-col flex-grow mx-auto">
                  <h3 className="text-xl font-semibold mb-2 text-center px-4">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botão Ver Projeto centralizado */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="mx-auto inline-block px-6 py-2 border border-primary text-primary rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-center"
                  >
                    {t("projects_view_more")}
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}