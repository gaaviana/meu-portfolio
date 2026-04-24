import AnimatedButton from "@/components/AnimatedButton"
import Button from "@/components/Button"
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const skills = [
    "Batata",
    "Batata",
    "Batata",
    "Batata",
    "Batata",
    "Batata",
    "Batata",
]

function Hero() {
    return <section className=" relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"                 style={{
                    backgroundColor: "rgb(59 130 246 / 0.55)",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `mov-lento ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`
                }} key={i} />
            ))}
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">

                    <div className="fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full vidro text-sm text-cor-primaria">
                            <span className="w-2 h-2 bg-cor-primaria rounded-full animate-pulse" />Engenheiro de Software
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight fade-in delay-100 text-cor-texto">
                            Criando <span className="text-cor-primaria text-brilha">experiências</span>
                            <br />
                            digitais com
                            <br />
                            <span className="font-serif italic font-normal text-cor-secundaria">precisão.</span>
                        </h1>
                        <p className="text-lg text-cor-neutro-texto max-w-lg fade-in delay-200">
                            Olá, sou Gabriel Viana — engenheiro de software especializado em React, Next.js e TypeScript. Construo aplicações web escaláveis e de alto desempenho que as pessoas adoram.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 fade-in delay-300">
                        <Button size="lg">Entrar em contato <ArrowRight className="w-5 h-5" /> </Button>
                        <AnimatedButton>
                            <Download className="w-5 h-5" /> Baixar CV 
                        </AnimatedButton>
                    </div>

                        <div className="flex items-center gap-4 fade-in delay-400">
                        <span className="text-sm text-cor-neutro-texto">Siga: </span>
                        {[
                            { icon: FaGithub, href: "#" },
                            { icon: FaLinkedin, href: "#" },
                            { icon: FaTwitter, href: "#" },
                        ].map((social, i) => (
                            <a href={social.href} key={i} className="p-2 rounded-full vidro transition-all duration-300 hover:bg-cor-primaria/14 hover:text-cor-primaria hover:ring-2 hover:ring-cor-borda/90 hover:ring-offset-0">{<social.icon className="w-5 h-5" />}</a>
                        ))}
                    </div>
                </div>

                    <div className="relative max-w-md mx-auto">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cor-primaria/30 via-transparent to-cor-primaria/10 blur-2xl animate-pulse" />
                    <div className="relative vidro rounded-3xl p-2 borda-brilha">
                        <img src="/projects/foto-perfil.png" alt="Gabriel Viana Paulino" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                    </div>

                    <div className="absolute -bottom-4 -right-4 vidro rounded-xl px-4 py-3 float">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-cor-texto">Disponível para trabalho</span>
                        </div>
                    </div>

                    <div className="absolute -top-4 -left-4 vidro rounded-xl px-4 py-3 float delay-500">
                        <div className="text-2xl font-bold text-cor-primaria">5+</div>
                        <div className="text-sm text-cor-neutro-texto">Anos de experiência</div>
                    </div>
                </div>
            </div>

                <div className="mt-20 fade-in delay-600">
                <p className="text-sm text-cor-neutro-texto mb-6 text-center">Tecnologias com as quais trabalho</p>
                <div className="relative overflow-hidden">
                    <div className="flex carrossel ">{[...skills, ...skills].map((skill, i) => (
                        <div key={i} className="flex-shrink-0 px-8 py-4"><span className="text-xl font-semibold text-cor-neutro-texto/50 hover:text-cor-neutro-texto transition-colors">{skill}</span></div>
                    ))}</div>
                </div>
            </div>
        </div>

            <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 fade-in delay-800">
                <a
                    href="#about"
                    className="pointer-events-auto flex cursor-pointer flex-col items-center gap-1 px-10 py-4 text-cor-neutro-texto transition-colors hover:text-cor-primaria"
                >
                    <span className="text-xs font-medium uppercase tracking-wider">Role</span>
                    <ChevronDown className="h-7 w-7 float" aria-hidden />
                </a>
            </div>
    </section>
}

export default Hero