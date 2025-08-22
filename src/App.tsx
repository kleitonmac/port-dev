import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Linkedin, Instagram, Github, Download, MessageCircle, Code, Rocket, Star, ExternalLink, Calendar, Users } from 'lucide-react';

// Tipos para os projetos
interface ProjectDetails {
  date: string;
  duration: string;
  team: string;
  features: string[];
  challenges: string;
  solutions: string;
}

interface Project {
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  image: string;
  link: string;
  tags: string[];
  extra: { pt: string; en: string };
  details: { pt: ProjectDetails; en: ProjectDetails };
}

type Language = 'pt' | 'en';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [language, setLanguage] = useState<Language>("pt");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Persistir tema no localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        setOpenProject(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevenir scroll quando modal está aberto
  useEffect(() => {
    if (openProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openProject]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const projetos: Project[] = [
    {
      title: { pt: "Consórcio Dev", en: "Dev Consortium" },
      description: { pt: "Site criado para vendas de carros", en: "Website created for car sales" },
      image: "https://raw.githubusercontent.com/kleitonmac/carros/refs/heads/main/img/menu.png",
      link: "https://github.com/kleitonmac/carros",
      tags: ["Python", "Django", "Styled-Components"],
      extra: {
        pt: "Esse projeto simula um sistema de consórcio com foco em performance no backend Django.",
        en: "This project simulates a consortium system focusing on Django backend performance."
      },
      details: {
        pt: {
          date: "2024",
          duration: "3 meses",
          team: "Individual",
          features: ["Sistema de consórcio", "Backend robusto", "Interface responsiva", "Relatórios em tempo real"],
          challenges: "Implementação de sistema de pagamentos e controle de parcelas",
          solutions: "Utilização de Django REST Framework e PostgreSQL para performance"
        },
        en: {
          date: "2024",
          duration: "3 months",
          team: "Individual",
          features: ["Consortium system", "Robust backend", "Responsive interface", "Real-time reports"],
          challenges: "Payment system implementation and installment control",
          solutions: "Using Django REST Framework and PostgreSQL for performance"
        }
      }
    },
    {
      title: { pt: "Grão & Aroma Cafeteria", en: "Grão & Aroma Coffee Shop" },
      description: { pt: "Site elegante para cafeteria com cardápio digital", en: "Elegant coffee shop site with digital menu" },
      image: "https://amaisd.com.br/wp-content/uploads/2023/10/cafeteriadecor.jpg",
      link: "https://cafeteriagraoearoma.vercel.app/",
      tags: ["HTML", "CSS", "Javascript", "Styled-Components"],
      extra: {
        pt: "Design responsivo e experiência de usuário voltada para negócios locais.",
        en: "Responsive design and user experience focused on local businesses."
      },
      details: {
        pt: {
          date: "2023",
          duration: "2 meses",
          team: "Individual",
          features: ["Cardápio digital", "Design responsivo", "Animações suaves", "SEO otimizado"],
          challenges: "Criar uma experiência visual atrativa para clientes locais",
          solutions: "Design moderno com foco em usabilidade e performance"
        },
        en: {
          date: "2023",
          duration: "2 months",
          team: "Individual",
          features: ["Digital menu", "Responsive design", "Smooth animations", "SEO optimized"],
          challenges: "Creating an attractive visual experience for local customers",
          solutions: "Modern design focused on usability and performance"
        }
      }
    },
    {
      title: { pt: "Sistema de Gerenciamento de Estoque", en: "Stock Management System" },
      description: {
        pt: "Sistema de gestão de estoque para controlar entradas, saídas e níveis de produtos em tempo real.",
        en: "Stock management system to control entries, exits, and product levels in real-time."
      },
      image: "https://raw.githubusercontent.com/kleitonmac/sge/refs/heads/main/img/image.png",
      link: "https://github.com/kleitonmac/sge",
      tags: ["Python", "Django", "Styled-Components"],
      extra: {
        pt: "Implementado com relatórios em tempo real e controle de acesso por usuário.",
        en: "Implemented with real-time reports and user access control."
      },
      details: {
        pt: {
          date: "2024",
          duration: "4 meses",
          team: "Individual",
          features: ["Controle de estoque", "Relatórios em tempo real", "Sistema de usuários", "Dashboard interativo"],
          challenges: "Gerenciar grandes volumes de dados e múltiplos usuários",
          solutions: "Arquitetura escalável com cache e otimizações de banco de dados"
        },
        en: {
          date: "2024",
          duration: "4 months",
          team: "Individual",
          features: ["Stock control", "Real-time reports", "User system", "Interactive dashboard"],
          challenges: "Managing large data volumes and multiple users",
          solutions: "Scalable architecture with cache and database optimizations"
        }
      }
    },
    {
      title: { pt: "Loja Nike", en: "Nike Store" },
      description: { pt: "Projeto Criado baseado na loja Nike", en: "Project created based on Nike store" },
      image: "https://raw.githubusercontent.com/kleitonmac/nike/refs/heads/main/assets/print-projeto.png",
      link: "https://github.com/kleitonmac/nike",
      tags: ["Javascript", "CSS", "Styled-Components"],
      extra: {
        pt: "Layout inspirado na Nike Store com foco em UI moderna.",
        en: "Layout inspired by Nike Store with focus on modern UI."
      },
      details: {
        pt: {
          date: "2023",
          duration: "1 mês",
          team: "Individual",
          features: ["Design inspirado na Nike", "Animações CSS", "Layout responsivo", "Carrinho de compras"],
          challenges: "Recriar a experiência visual da Nike Store",
          solutions: "CSS avançado com Grid e Flexbox para layout preciso"
        },
        en: {
          date: "2023",
          duration: "1 month",
          team: "Individual",
          features: ["Nike-inspired design", "CSS animations", "Responsive layout", "Shopping cart"],
          challenges: "Recreating the Nike Store visual experience",
          solutions: "Advanced CSS with Grid and Flexbox for precise layout"
        }
      }
    },
    {
      title: { pt: "Gerenciador de Estacionamento", en: "Parking Management" },
      description: { pt: "Sistema de Gerenciamento de Estacionamento", en: "Parking management system" },
      image: "https://raw.githubusercontent.com/kleitonmac/estacionamento/refs/heads/main/img/backend-img.png",
      link: "https://github.com/kleitonmac/estacionamento",
      tags: ["Django", "API", "IA", "Postman"],
      extra: {
        pt: "Controle de vagas, relatórios e integração com API de IA.",
        en: "Control of parking spots, reports, and integration with AI API."
      },
      details: {
        pt: {
          date: "2024",
          duration: "3 meses",
          team: "Individual",
          features: ["Controle de vagas", "Integração com IA", "API REST", "Relatórios automáticos"],
          challenges: "Integração com APIs externas de IA para reconhecimento de placas",
          solutions: "Arquitetura modular com tratamento de erros robusto"
        },
        en: {
          date: "2024",
          duration: "3 months",
          team: "Individual",
          features: ["Parking spot control", "AI integration", "REST API", "Automatic reports"],
          challenges: "Integration with external AI APIs for license plate recognition",
          solutions: "Modular architecture with robust error handling"
        }
      }
    },
    // ... outros projetos
  ];

  // Definir classes dinâmicas para tema
  const sectionClass = theme === "dark"
    ? "bg-black text-white transition-colors duration-300"
    : "bg-white text-gray-900 transition-colors duration-300";

  const cardClass = theme === "dark"
    ? "bg-black border-gray-500 shadow-lg rounded-xl overflow-hidden transition-colors duration-300"
    : "bg-white border-gray-300 shadow-md rounded-xl overflow-hidden transition-colors duration-300";

  // Componente Modal
  const ProjectModal = ({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) => {
    if (!isOpen || !project) return null;

    const details = project.details[language as keyof typeof project.details];

    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
    onClick={onClose}
      >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300" />

        {/* Modal Content */}
        <div
    className={`
    relative w-full max-w-4xl max-h-[90vh] 
    overflow-y-auto rounded-2xl shadow-2xl 
    animate-in zoom-in-95 duration-300 modal-scrollbar 
    transition-colors duration-300
    ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
  `}
  onClick={(e) => e.stopPropagation()}
>

  {/* Header */}
  <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 bg-inherit backdrop-blur-sm">

    {/* Header */}
    <h2 className="text-2xl font-bold gradient-text">{project.title[language as keyof typeof project.title]}</h2>
      <button
        onClick={onClose}
        className={`p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
      >
        <X size={24} />
      </button>
    </div>

{/* Content */}
<div className="p-6">
  {/* Image and Basic Info */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    <div className="space-y-4">
      <img 
        src={project.image}
        alt={project.title[language as keyof typeof project.title]}
        className="w-full h-64 object-cover rounded-lg shadow-lg"
      />
  <div className="flex flex-wrap gap-2">
  {
    project.tags.map((tag: string, index: number) => (
      <span key={index} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
      {tag}
      </span>
    ))
  }
    </div>
    </div>

        <div className="space-y-6">
        <div>
        <h3 className="text-lg font-semibold mb-2 transition-colors duration-300">{language === "pt" ? "Descrição" : "Description"}</h3>
        <p className="transition-colors duration-300">{project.description[language as keyof typeof project.description]}</p>
          </div>

          <div>
          <h3 className="text-lg font-semibold mb-2 transition-colors duration-300">{language === "pt" ? "Informações Adicionais" : "Additional Information"}</h3>
            <p className="transition-colors duration-300">{project.extra[language as keyof typeof project.extra]}</p>
              </div>

{/* Project Details */}
<div className="grid grid-cols-2 gap-4">
  <div className="flex items-center gap-2">
    <Calendar size={16} className="text-blue-500" />
      <span className="text-sm">{details.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} className="text-blue-500" />
            <span className="text-sm">{details.team}</span>
              </div>
              </div>
              </div>
              </div>

{/* Features */}
<div className="mb-8">
  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
    <Star size={20} className="text-blue-500" />
      {language === "pt" ? "Funcionalidades" : "Features"}
</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
  {
    details.features.map((feature: string, index: number) => (
      <div key={index} className="flex items-center gap-2">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
    <span className="text-sm">{feature}</span>
    </div>
    ))
  }
    </div>
    </div>

{/* Challenges and Solutions */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  <div>
  <h3 className="text-lg font-semibold mb-3 text-orange-500">
    {language === "pt" ? "Desafios" : "Challenges"}
</h3>
  <p className="transition-colors duration-300">{details.challenges}</p>
    </div>
    <div>
    <h3 className="text-lg font-semibold mb-3 text-green-500">
      {language === "pt" ? "Soluções" : "Solutions"}
</h3>
  <p className="transition-colors duration-300">{details.solutions}</p>
    </div>
    </div>

{/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-end">
  <button
                onClick={onClose}
className={`px-6 py-3 rounded-lg border-2 transition-colors ${theme === "dark"
  ? "border-gray-600 text-gray-300 hover:border-gray-500"
  : "border-gray-300 text-gray-700 hover:border-gray-400"
  }`}
              >
  {language === "pt" ? "Fechar" : "Close"}
</button>
  <a
href={project.link}
target="_blank"
rel="noopener noreferrer"
className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${theme === "dark"
  ? "bg-blue-600 text-white hover:bg-blue-700"
  : "bg-blue-600 text-white hover:bg-blue-700"
  }`}
              >
  <ExternalLink size={16} />
{language === "pt" ? "Ver Projeto" : "View Project"}
</a>
  </div>
  </div>
  </div>
  </div>
    );
  };

return (
  <div className={`min-h-screen theme-transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"}`}>

    {/* Header */}
    <header className={`fixed w-full backdrop-blur-md shadow-lg border-b ${theme === "dark" ? "border-gray-400" : "border-gray-200"} z-50`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Nome à esquerda */}
        <div className="flex-shrink-0">
          <a href="#inicio" className="text-2xl font-bold gradient-text">Kleiton</a>
            </div>

{/* Desktop nav */}
<ul className="hidden md:flex items-center space-x-8">
  <li><a href="#inicio" className="hover:text-blue-400 transition-colors">{language === "pt" ? "Início" : "Home"}</a></li>
    <li><a href="#projetos" className="hover:text-blue-400 transition-colors">{language === "pt" ? "Projetos" : "Projects"}</a></li>
      <li><a href="https://github.com/kleitonmac" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Github</a></li>
        <li><a href="https://wa.me/5527981911375" target="_blank" rel="noopener noreferrer" className={`gradient-border px-4 py-2 ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-400"}`}>{language === "pt" ? "Contatos" : "Contact"}</a></li>
          <li className="flex items-center gap-4">
            <button
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
className="p-2 rounded-lg shadow-md hover:scale-105 transition"
  >
  {language === "pt" ? (
    <span className="fi fi-us"></span>
                ) : (
  <span className="fi fi-br"></span>
                )}
</button>
  <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? "☀️" : "🌙"}</button>
    </li>
    </ul>

{/* Mobile menu button */}
<button className="md:hidden" onClick={toggleMenu}>{isMenuOpen?<X /> : <Menu />}</button>
  </nav>

{/* Mobile menu */}
{
  isMenuOpen && (
    <div className={`md:hidden ${theme === "dark" ? "bg-black/80" : "bg-white/80"} backdrop-blur-md`}>
      <ul className="px-4 py-2 flex flex-col gap-2">
        <li><a href="#inicio">{language === "pt" ? "Início" : "Home"
}</a></li>
  <li><a href="#projetos">{language === "pt" ? "Projetos" : "Projects"}</a></li>
    <li><a href="#sobre">{language === "pt" ? "Sobre" : "About"}</a></li>
      <li><a href="https://github.com/kleitonmac" target="_blank">Github</a></li>
        <li><a href="https://wa.me/5527981911375" target="_blank">{language === "pt" ? "Contatos" : "Contact"}</a></li>
          <li className="flex items-center gap-4 mt-2">
            <button onClick={() => setLanguage(language === "pt" ? "en" : "pt")}>{language === "pt" ? "🇺🇸" : "🇧🇷"}</button>
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? "☀️" : "🌙"}</button>
                </li>
                </ul>
                </div>
        )}
</header>

{/* Início */}
<section id="inicio" className={`pt-32 pb-20 transition-colors duration-300 ${sectionClass}`}>
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
    <div className="flex-1 text-center md:text-left">
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme === "dark" ? "bg-blue-500/100 text-gray-100" : "bg-black text-gray-100"} mb-6`}>
        <Code size={20} />
          <span className="font-medium">{language === "pt" ? "Desenvolvedor de Software" : "Software Developer"}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Kleiton Macedo</h1>
              <p className="text-lg mb-8 leading-relaxed">
                {language === "pt"
                ? "Desenvolvedor Full-Stack apaixonado por criar experiências digitais únicas. Transformando ideias em código com criatividade e precisão."
                : "Full-Stack Developer passionate about creating unique digital experiences. Turning ideas into code with creativity and precision."}
</p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
    <a href="https://docs.google.com/document/d/1XOtmN-q1BlsY_-zYy8QdW4I0sF_XXJNq/edit" target="_blank" rel="noopener noreferrer"
className={`inline-block border-2 px-4 py-2 rounded font-bold transition ${theme === "dark" ? "border-blue-400 text-white hover:text-blue-400" : "border-blue-600 text-gray-900 hover:text-blue-600"}`}>
  <Download size={20} /> {language === "pt" ? "Download CV" : "Download Resume"}
    </a>
    <a href="https://wa.me/5527981911375" target="_blank" rel="noopener noreferrer"
className={`flex items-center justify-center gap-2 px-8 py-3 border-2 rounded-lg transition ${theme === "dark" ? "border-blue-400 text-white hover:bg-blue-800" : "border-blue-600 text-gray-900 hover:bg-blue-600"}`}>
  <MessageCircle size={20} /> {language === "pt" ? "Contrate-me" : "Hire Me"}
    </a>
    </div>
    </div>
    <div className="flex-1">
      <img src="/kleiton.jpg" alt="perfil" className="relative rounded-2xl shadow-xl w-50 max-w-sm mx-auto md:max-w-50" />
        </div>
        </div>
        </section>

{/* Projetos */}
<section 
  id="projetos"
className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 transition-colors duration-300 ${sectionClass}`}
>

  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 animate-fade-in-up ${theme === "dark" ? "bg-blue-600 text-white" : "bg-black text-gray-100"}`} style={{ animationDelay: '0.1s' }}>
        <Rocket size={20} />
          <span className="font-medium">{language === "pt" ? "Projetos em Destaque" : "Featured Projects"}</span>
            </div>
            <h2 className="text-4xl font-bold animate-fade-in-up-gradient" style={{ animationDelay: '0.3s' }}>{language === "pt" ? "Meus Projetos" : "My Projects"}</h2>
              </div>
              <div
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 project-section-animate"
style={{ animationDelay: '0.6s' }}
>


{
  projetos.map((project, index) => (
    <div 
                key={index} 
                className={`${cardClass} group cursor-pointer project-card-hover project-card-animate`}
onClick={() => setOpenProject(index)}
style={{ animationDelay: `${0.7 + index * 0.15}s` }}
              >
  <div className="relative overflow-hidden">
    <img src={project.image} alt={project.title[language as keyof typeof project.title]} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}>
        <div className="p-4 w-full">
          <p className="text-white text-sm line-clamp-2">{project.extra[language as keyof typeof project.extra]}</p>
            </div>
            </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 gradient-text">{project.title[language as keyof typeof project.title]}</h3>
                <p className={`${theme === "dark" ? "text-white" : "text-gray-800"} mb-4 line-clamp-2`}>{project.description[language as keyof typeof project.description]}</p>
                  <div className="flex flex-wrap gap-6 mb-4">
                  {
                    project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-400 text-white rounded-full text-sm">{tag}</span>
                    ))
                  }
{
  project.tags.length > 3 && (
    <span className="px-3 py-1 bg-gray-500 text-white rounded-full text-sm">+{project.tags.length - 3}</span>
                    )
}
</div>
  <div className="flex items-center justify-between">
    <span className="text-sm text-gray-500">{project.details[language as keyof typeof project.details].date}</span>
      <div className="flex items-center gap-1 text-blue-500">
        <span className="text-sm">{language === "pt" ? "Ver mais" : "View more"}</span>
          <ExternalLink size={16} />
            </div>
            </div>
            </div>
            </div>
            ))}
</div>
  </div>
  </section>

{/* Modal */}
<ProjectModal 
        project={openProject !== null ? projetos[openProject] : null}
isOpen={openProject !== null}
onClose={() => setOpenProject(null)}
      />

{/* Footer */}
<footer className={`py-12 transition-colors duration-300 ${sectionClass}`}>
  <div className="container mx-auto px-4 text-center">
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${theme === "dark" ? "bg-blue-600/100 text-white" : "bg-black text-gray-100"}`}>
      <Star size={20} />
        <span className="font-medium">{language === "pt" ? "Redes Sociais" : "Social Media"}</span>
          </div>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.facebook.com/kleiton.santosmacedo/photos_by"
target="_blank"
rel="noopener noreferrer"
className="social-icon-hover animate-fade-in-up hover:text-blue-500"
style={{ animationDelay: '0.1s' }}
            >
  <Facebook size={24} />
    </a>
    <a
href="https://www.linkedin.com/in/kleiton-santos-macedo-8322a7235/"
target="_blank"
rel="noopener noreferrer"
className="social-icon-hover animate-fade-in-up hover:text-blue-500"
style={{ animationDelay: '0.2s' }}
            >
  <Linkedin size={24} />
    </a>
    <a
href="https://www.instagram.com/iamkleiton/"
target="_blank"
rel="noopener noreferrer"
className="social-icon-hover animate-fade-in-up hover:text-blue-500"
style={{ animationDelay: '0.3s' }}
            >
  <Instagram size={24} />
    </a>
    <a
href="https://github.com/kleitonmac"
target="_blank"
rel="noopener noreferrer"
className="social-icon-hover animate-fade-in-up hover:text-blue-500"
style={{ animationDelay: '0.4s' }}
            >
  <Github size={24} />
    </a>
    </div>
    </div>
    </footer>
    </div>
  );
}

export default App;
