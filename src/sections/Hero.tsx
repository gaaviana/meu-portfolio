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
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" style={{
                    backgroundColor: "#20b2a6",
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
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full vidro text-sm text-primaria">
                            <span className="w-2 h-2 bg-primaria rounded-full animate-pulse" />Sofware Engineer - React Specialist
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight fade-in delay-100">
                            Crafting <span className="text-primaria text-brilha">digital</span>
                            <br />
                            experiencies with
                            <br />
                            <span className="font-serif italic font-normal text-white">precision.</span>
                        </h1>
                        <p className="text-lg text-off-texto max-w-lg fade-in delay-200">
                            Hi, I"m Gabriel Viana - a Software engineer specializing in React, Next.js, and TyperScript. I build scalable, performant web applications that users love.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 fade-in delay-300">
                        <Button size="lg">Contact Me <ArrowRight className="w-5 h-5" /> </Button>
                        <AnimatedButton>
                            <Download className="w-5 h-5" /> Download CV 
                        </AnimatedButton>
                    </div>

                    <div className="flex items-center gap-4 fade-in delay-400">
                        <span className="text-sm text-off-texto">Follow: </span>
                        {[
                            { icon: FaGithub, href: "#" },
                            { icon: FaLinkedin, href: "#" },
                            { icon: FaTwitter, href: "#" },
                        ].map((social, i) => (
                            <a href={social.href} key={i} className="p-2 rounded-full vidro hover:bg-primaria/10 hover:text-primaria transition-all duration-300">{<social.icon className="w-5 h-5" />}</a>
                        ))}
                    </div>
                </div>

                <div className="relative max-w-md mx-auto">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primaria/30 via-transparent to-primaria/10 blur-2xl animate-pulse" />
                    <div className="relative vidro rounded-3xl p-2 borda-brilha">
                        <img src="/projects/foto-perfil.png" alt="Gabriel Viana Paulino" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                    </div>

                    <div className="absolute -bottom-4 -right-4 vidro rounded-xl px-4 py-3 float">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium">Available for work</span>
                        </div>
                    </div>

                    <div className="absolute -top-4 -left-4 vidro rounded-xl px-4 py-3 float delay-500">
                        <div className="text-2xl font-bold text-primaria">5+</div>
                        <div className="text-sm text-off-texto">Yers exp.</div>
                    </div>
                </div>
            </div>

            <div className="mt-20 fade-in delay-600">
                <p className="text-sm text-off-texto mb-6 text-center">Technologies I work with</p>
                <div className="relative overflow-hidden">
                    <div className="flex carrossel ">{[...skills, ...skills].map((skill, i) => (
                        <div key={i} className="flex-shrink-0 px-8 py-4"><span className="text-xl font-semibold text-off-texto/50 hover:text-off-texto transition-colors">{skill}</span></div>
                    ))}</div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-off-texto hover:text-primaria">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 float"/>
            </a>
        </div>
    </section>
}

export default Hero