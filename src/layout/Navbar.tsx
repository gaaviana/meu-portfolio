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
    
    useEffect (() => {
        const Scroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", Scroll)

        return () => window.removeEventListener("scroll", Scroll)
    }, [])
    return (
        <header className={`fixed top-0 left-0 right-0 ${scrolled ? "vidro-stg py-3" : "bg-transparent py-5"}  z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primaria">
                    GA<span className="text-primaria">.</span>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    <div className="vidro rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, i) => (
                            <a href={link.href} key={i} className="px-4 py-2 text-sm text-off-texto hover:text-texto rounded-full hover:bg-superficie">{link.label}</a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
                    <Button size="sm">Contato</Button>
                </div>

                {/* MENU MOBILE */}
                <button className="md:hidden p-2 text-texto cursor-pointer" onClick={() => setMenuAberto((prev) => !prev)}>
                    {menuAberto ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {menuAberto && (
                <div className="md:hidden vidro-stg fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, i) => (
                            <a href={link.href} key={i} onClick={() => setMenuAberto(false)} className="text-lg text-off-texto hover:text-texto py-2">{link.label}</a>
                        ))}
                        <Button onClick={() => setMenuAberto(false)}>Contato</Button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar