import AnimatedButton from "@/components/AnimatedButton"
import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projetos = [
    {
        titulo: "Painel Fintech",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        image: "/projects/projeto1.png",
        tags: ["React", "Typerscript", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        titulo: "Painel Fintech",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        image: "/projects/projeto1.png",
        tags: ["React", "Typerscript", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        titulo: "Painel Fintech",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        image: "/projects/projeto1.png",
        tags: ["React", "Typerscript", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        titulo: "Painel Fintech",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        image: "/projects/projeto1.png",
        tags: ["React", "Typerscript", "NodeJS"],
        link: "#",
        github: "#",
    },
]

function Projects() {
    return <section id="projects" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-cor-secundaria text-sm font-medium -tracking-wider uppercase fade-in">Trabalhos em destaque</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 fade-in delay-100 text-cor-texto">Projetos que <span className="font-serif italic font-normal text-cor-secundaria">causam impacto.</span></h2>
                <p className="text-cor-neutro-texto fade-in delay-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit massa turpis. Donec pulvinar molestie sem, a consequat risus vulputate sed. Etiam tortor risus, laoreet at arcu et, fringilla dictum dui
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {projetos.map((projeto, i) => (
                    <div key={i} className="group relative vidro rounded-2xl overflow-hidden fade-in md:row-span-1" style={{
                        animationDelay: `${(i + 1) * 100}ms`
                    }}>
                            <div className="relative overflow-hidden aspect-video">
                            <img src={projeto.image} alt={projeto.titulo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cor-texto/22 via-cor-texto/7 to-transparent" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href={projeto.link} className="p-3 rounded-full vidro text-cor-texto hover:bg-cor-primaria hover:text-cor-primaria-texto transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                            <a href={projeto.github} className="p-3 rounded-full vidro text-cor-texto hover:bg-cor-primaria hover:text-cor-primaria-texto transition-all">
                                <FaGithub className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="p-6 space-y-4 relative z-10">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold text-cor-texto group-hover:text-cor-primaria transition-colors">{projeto.titulo}</h3>
                                <ArrowUpRight className="w-5 h-5 text-cor-neutro-texto group-hover:text-cor-primaria group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>
                            <p className="text-cor-neutro-texto txet-sm">{projeto.descricao}</p>
                            <div className="flex flex-wrap gap-2">{projeto.tags.map((tag, i) => (
                                <span key={i} className="px-4 py-1 rounded-full bg-cor-superficie text-xs font-medium border border-cor-texto/15 text-cor-neutro-texto hover:border-cor-primaria/70 hover:bg-cor-primaria/5 hover:text-cor-primaria transition-all duration-300">{tag}</span>
                            ))}</div>
                        </div>
                    </div>

                ))}
            </div>
            <div className="text-center mt-12 fade-in delay-500">
                <AnimatedButton>
                    Ver todos os projetos
                    <ArrowUpRight className="w-5 h-5"/>
                </AnimatedButton>
            </div>
        </div>
    </section>
}

export default Projects