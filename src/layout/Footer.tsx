import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const footerLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#experience", label: "Experiencias" },
]

const socialLinks = [
    { icon: FaGithub, href: "#", label: "Github" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
]

function Footer() {
     const currentYear = new Date().getFullYear();

  return (
  <footer className="py-12 border-t border-cor-texto/12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight text-cor-texto hover:text-cor-primaria transition-colors">
              GA<span className="text-cor-primaria">.</span>
            </a>
            <p className="text-sm text-cor-neutro-texto mt-2">
              © {currentYear} Gabriel Viana. Todos os direitos reservados.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
                <a
                key={link.href}
                href={link.href}
                className="text-sm text-cor-neutro-texto hover:text-cor-texto transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
                <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full vidro text-cor-texto transition-all hover:bg-cor-primaria/14 hover:text-cor-primaria hover:ring-2 hover:ring-cor-borda/90 hover:ring-offset-0"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer