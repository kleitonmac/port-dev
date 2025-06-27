import React from 'react';
import { Menu, X, Facebook, Linkedin, Instagram, Github, Download, MessageCircle, Code, Rocket, Star } from 'lucide-react';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className= "min-h-screen bg-slate-900" >
    {/* Header */ }
    < header className = "fixed w-full bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-purple-900/20 z-50" >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" >
        <a href="#inicio" className = "text-2xl font-bold gradient-text" >
          Kleiton
          </a>

  {/* Navegação de menu*/ }
  <ul className="hidden md:flex items-center space-x-8" >
    <li><a href="#inicio" className = "text-slate-300 hover:text-purple-400 transition-colors" > Início < /a></li >
      <li><a href="#projetos" className = "text-slate-300 hover:text-purple-400 transition-colors" > Projetos < /a></li >
        <li><a href="#sobre" className = "text-slate-300 hover:text-purple-400 transition-colors" > Sobre < /a></li >
          <li><a href="https://github.com/kleitonmac" target = "_blank" rel = "noopener noreferrer" className = "text-slate-300 hover:text-purple-400 transition-colors" > Github < /a></li >
            <li>
            <a 
                href="https://wa.me/5527981911375"
  target = "_blank"
  rel = "noopener noreferrer"
  className = "gradient-border inline-block"
    >
    <span className="px-4 py-2 inline-block hover:text-blue-900/20 transition-colors" >
      Contatos
      </span>
      </a>
      </li>
      </ul>

  {/* menu botão */ }
  <button className="md:hidden text-slate-300" onClick = { toggleMenu } >
    { isMenuOpen?<X size = { 24 } /> : <Menu size={ 24 } />
}
</button>
  </nav>

{/* navegação mobile*/ }
{
  isMenuOpen && (
    <div className="md:hidden bg-slate-900/80 backdrop-blur-md border-t border-purple-900/20" >
      <ul className="px-4 py-2" >
        <li><a href="#inicio" className = "block py-2 text-slate-300 hover:text-purple-400" > Início < /a></li >
          <li><a href="#projetos" className = "block py-2 text-slate-300 hover:text-purple-400" > Projetos < /a></li >
            <li><a href="#sobre" className = "block py-2 text-slate-300 hover:text-purple-400" > Sobre < /a></li >
              <li><a href="https://github.com/kleitonmac" target = "_blank" rel = "noopener noreferrer" className = "block py-2 text-slate-300 hover:text-purple-400" > Github < /a></li >
                <li><a href="https://wa.me/5527981911375" target = "_blank" rel = "noopener noreferrer" className = "block py-2 text-slate-300 hover:text-purple-400" > Contatos < /a></li >
                  </ul>
                  </div>
        )
}
</header>

{/* inicio sessão */ }
<section id="inicio" className = "pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900" >
  <div className="container mx-auto px-4" >
    <div className="flex flex-col md:flex-row items-center gap-12" >
      <div className="flex-1 text-center md:text-left" >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 text-white mb-6" >
          <Code size={ 20 } />
            < span className = "font-medium text-white" > Software Developer </span>
              </div>
              < h1 className = "text-5xl md:text-6xl font-bold mb-6" >
                <span className="gradient-text" > Kleiton Macedo </span>
                  </h1>
                  < p className = "text-lg text-slate-300 mb-8 leading-relaxed" >
                    Desenvolvedor Full-Stack apaixonado por criar experiências digitais únicas.
                Transformando ideias em código com criatividade e precisão.
              </p>
  < div className = "flex flex-col sm:flex-row gap-4 justify-center md:justify-start" >
    <a
                  href="https://docs.google.com/document/d/1XOtmN-q1BlsY_-zYy8QdW4I0sF_XXJNq/edit"
download
className = "gradient-border inline-block"
  >
  <span className="flex items-center justify-center gap-2 px-8 py-3 hover:text-purple-400 transition-colors" >
    <Download size={ 20 } />
                    Download CV
  </span>
  </a>
  < a
href = "https://wa.me/5527981911375"
target = "_blank"
rel = "noopener noreferrer"
className = "flex items-center justify-center gap-2 px-8 py-3 border-2 border-purple-600 text-white rounded-lg hover:bg-purple-900/30 transition-colors"
  >
  <MessageCircle size={ 20 } />
Contrate - me
  </a>
  </div>
  </div>
  < div className = "flex-1" >
    <div className="relative" >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full blur-3xl opacity-20" > </div>
        < img
src = "https://raw.githubusercontent.com/kleitonmac/port-dev/refs/heads/main/src/img/kleiton.jpg"
alt = "perfil"
className = "relative rounded-2xl shadow-xl animate-float w-50 max-w-sm mx-auto md:max-w-50"
  />
  </div>
  </div>
  </div>
  </div>
  </section>

{/* Projeto e sessão*/ }
<section id="projetos" className = "py-20 bg-white-900" >
  <div className="container mx-auto px-4" >
    <div className="text-center mb-16" >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg--900/30 text-white mb-4" >
        <Rocket size={ 20 } />
          < span className = "font-medium" > Projetos em Destaque </span>
            </div>
            < h2 className = "text-4xl font-bold gradient-text" > Meus Projetos </h2>
              </div>
              < div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
              {
               [
  {
    title: "Consórcio Dev",
    description: "Site criado para vendas de carros",
    image: "https://raw.githubusercontent.com/kleitonmac/carros/refs/heads/main/img/menu.png",
    link: "https://github.com/kleitonmac/carros",
    tags: ["Python", "Django", "Styled-Components"]
  },
  {
    title: "Grão & Aroma Cafeteria",
    description: "Site elegante para cafeteria com cardápio digital",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800",
    link: "https://cafeteriagraoearoma.vercel.app/",
    tags: ["React", "Styled-Components"]
  },
  {
    title: "Sistema de Gerenciamento de Estoque",
    description: "Sistema de gestão de estoque desenvolvido para controlar entradas, saídas e níveis de produtos em tempo real, otimizando o fluxo de reposição e reduzindo perdas.",
    image: "https://raw.githubusercontent.com/kleitonmac/sge/refs/heads/main/img/image.png",
    link: "https://github.com/kleitonmac/sge",
    tags: ["Python", "Django", "Styled-Components"]
  },
   {
    title: "Loja Nike",
    description: "Projeto Criado baseado na loja nike",
    image: "https://raw.githubusercontent.com/kleitonmac/nike/refs/heads/main/assets/print-projeto.png",
    link: "https://github.com/kleitonmac/nike",
    tags: ["Javascript", "CSS", "Styled-Components"]
  },         
   {
    title: "Em breve",
    description: "Sistema de Gerenciamento de Estacionamento",
    image: "https://raw.githubusercontent.com/kleitonmac/estacionamento/refs/heads/main/img/backend-img.png",
    link: "https://github.com/kleitonmac/estacionamento",
    tags: ["Django", "API", "IA","Postman"]
  },
              ].map((project, index) => (
                  <a
                key= { index }
                href = { project.link }
                target = "_blank"
                rel = "noopener noreferrer"
                className = "card-hover bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-purple-900/20"
                  >
                  <div className="relative overflow-hidden group" >
                <img
                    src={ project.image }
                    alt = { project.title }
                    className = "w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" > </div>
                  </div>
                < div className = "p-6" >
                <h3 className="text-xl font-bold mb-2 gradient-text" > { project.title } </h3>
                < p className = "text-slate-300 mb-4" > { project.description } </p>
                < div className = "flex flex-wrap gap-2" >
                {
                  project.tags.map((tag, tagIndex) => (
                    <span
                        key= { tagIndex }
                        className = "px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm"
                    >
                    { tag }
                    </span>
                  ))
              }
                </div>
                </div>
                </a>
            ))}
</div>
  </div>
  </section>

{/* Social Links */ }
<footer className="py-12 bg-slate-800" >
  <div className="container mx-auto px-4" >
    <div className="text-center mb-8" >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 text-white mb-4" >
        <Star size={ 20 } />
          < span className = "font-medium" > Redes Sociais </span>
            </div>
            </div>
            < div className = "flex justify-center gap-6" >
              <a 
              href="https://www.facebook.com/kleiton.santosmacedo/photos_by"
target = "_blank"
rel = "noopener noreferrer"
className = "gradient-border"
  >
  <span className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-purple-400" >
    <Facebook size={ 24 } />
      </span>
      </a>
      < a
href = "https://www.linkedin.com/in/kleiton-santos-macedo-8322a7235/"
target = "_blank"
rel = "noopener noreferrer"
className = "gradient-border"
  >
  <span className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-white-400" >
    <Linkedin size={ 24 } />
      </span>
      </a>
      < a
href = "https://www.instagram.com/iamkleiton/"
target = "_blank"
rel = "noopener noreferrer"
className = "gradient-border"
  >
  <span className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-purple-400" >
    <Instagram size={ 24 } />
      </span>
      </a>
      < a
href = "https://github.com/kleitonmac"
target = "_blank"
rel = "noopener noreferrer"
className = "gradient-border"
  >
  <span className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-purple-400" >
    <Github size={ 24 } />
      </span>
      </a>
      </div>
      </div>
      </footer>
      </div>
  );
}

export default App;
