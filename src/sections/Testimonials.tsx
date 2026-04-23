import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

const depoimentos = [
    {
        depoimento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit massa turpis. Donec pulvinar molestie sem, a consequat risus vulputate sed. Etiam tortor risus, laoreet at arcu et, fringilla dictum dui.",
        autor: "Sarah1 Chen",
        papel: "CTO, Tech Innovators Inc.",
    },
    {
        depoimento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit massa turpis. Donec pulvinar molestie sem, a consequat risus vulputate sed. Etiam tortor risus, laoreet at arcu et, fringilla dictum dui.",
        autor: "Sarah2 Chen",
        papel: "CTO, Tech Innovators Inc.",
    },
    {
        depoimento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit massa turpis. Donec pulvinar molestie sem, a consequat risus vulputate sed. Etiam tortor risus, laoreet at arcu et, fringilla dictum dui.",
        autor: "Sarah3 Chen",
        papel: "CTO, Tech Innovators Inc.",
    },
    {
        depoimento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit massa turpis. Donec pulvinar molestie sem, a consequat risus vulputate sed. Etiam tortor risus, laoreet at arcu et, fringilla dictum dui.",
        autor: "Sarah4 Chen",
        papel: "CTO, Tech Innovators Inc.",
    },
]

function Testimonials() {
    const [IdxAtivo, setIdxAtivo] = useState(0);

    const proximo = () => {
        setIdxAtivo((prev) => (prev + 1) % depoimentos.length)
    }

    const anterior = () => {
        setIdxAtivo((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)
    }

    return <section id="testimonials" className=" py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secundaria-topo text-sm font-medium -tracking-wider uppercase fade-in">What people say</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 fade-in delay-100 text-secundaria-topo">Kind words from <span className="font-serif italic font-normal text-white">amazing people.</span></h2>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    <div className="vidro p-8 rounded-3xl md:p-12 borda-brilha fade-in delay-200">
                        <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primaria flex items-center justify-center">
                            <Quote className="w-6 h-6 text-primaria-topo"/>
                        </div>

                        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                            "{depoimentos[IdxAtivo].depoimento}"
                        </blockquote>

                        <div>
                            <div className="font-semibold">{depoimentos[IdxAtivo].autor}</div>
                            <div className="text-sm text-off-texto">{depoimentos[IdxAtivo].papel}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
                <button className="p-3 rounded-full vidro hover:bg-primaria/10 hover:text-primaria transition-all" onClick={anterior}> <ChevronLeft/> </button>

                <div className="flex gap-2">{depoimentos.map((_, i) => (
                    <button onClick={() => setIdxAtivo(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === IdxAtivo ? "w-8 bg-primaria" : "bg-off-texto/30 hover:bg-off-texto"}`}/>
                ))}</div>

                <button className="p-3 rounded-full vidro hover:bg-primaria/10 hover:text-primaria transition-all" onClick={proximo}> <ChevronRight/> </button>
            </div>
        </div>
    </section>
}

export default Testimonials