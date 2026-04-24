import Button from "@/components/Button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#experience", label: "Experiencias" },
]

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const Scroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", Scroll)

        return () => window.removeEventListener("scroll", Scroll)
    }, [])
    return (
        <header className={`fixed top-0 left-0 right-0 ${scrolled ? "vidro-nav py-3" : "bg-transparent py-5"}  z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight text-cor-texto hover:text-cor-primaria transition-colors">
                    GA<span className="text-cor-primaria">.</span>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    <div className="vidro-nav-pill rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, i) => (
                            <a href={link.href} key={i} className="px-4 py-2 text-sm text-cor-neutro-texto hover:text-cor-texto rounded-full border border-transparent transition-colors hover:border-cor-borda hover:bg-cor-primaria/12">{link.label}</a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
                    <Button size="sm" onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}>Contato</Button>
                </div>

                {/* MENU MOBILE */}
                <button className="md:hidden p-2 text-cor-texto cursor-pointer" onClick={() => setMenuAberto((prev) => !prev)}>
                    {menuAberto ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {menuAberto && (
                <div className="md:hidden vidro-nav-drawer fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, i) => (
                            <a href={link.href} key={i} onClick={() => setMenuAberto(false)} className="text-lg text-cor-neutro-texto hover:text-cor-texto py-3 px-3 -mx-3 rounded-xl border border-transparent transition-colors hover:border-cor-borda hover:bg-cor-primaria/12">{link.label}</a>
                        ))}
                        <Button
                            onClick={() => {
                                setMenuAberto(false)
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }}
                        >Contato</Button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar