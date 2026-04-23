import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const destaque = [
    {
        icon: Code2,
        titulo: "Clean Code",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut."
    },
    {
        icon: Rocket,
        titulo: "Performance",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut."
    },
    {
        icon: Users,
        titulo: "Collaboration",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut."
    },
    {
        icon: Lightbulb,
        titulo: "Innovation",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut."
    },
]

function About() {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="fade-in">
                        <span className="text-secundaria-topo text-sm font-medium tracking-wider uppercase">About me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight fade-in delay-100 text-secundaria-topo">
                        Building the future,
                        <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                    </h2>
                    <div className="space-y-4 text-off-texto fade-in delay-200">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit massa turpis. Donec pulvinar molestie sem, a consequat risus vulputate sed. Etiam tortor risus, laoreet at arcu et, fringilla dictum dui. In eget neque accumsan erat vestibulum ultricies. Duis a facilisis tortor. Donec at massa sapien.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit massa turpis. Donec pulvinar molestie sem, a consequat risus vulputate sed. Etiam tortor risus, laoreet at arcu et, fringilla dictum dui. In eget neque accumsan erat vestibulum ultricies. Duis a facilisis tortor. Donec at massa sapien.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit massa turpis. Donec pulvinar molestie sem, a consequat risus vulputate sed. Etiam tortor risus, laoreet at arcu et, fringilla dictum dui. In eget neque accumsan erat vestibulum ultricies. Duis a facilisis tortor. Donec at massa sapien.</p>
                    </div>

                    <div className="vidro rounded-2xl p-6 borda-brilha fade-in delay-300">
                        <p className="text-lg font-medium italic text-texto">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit massa turpis. Donec pulvinar molestie sem, a consequat risus vulputate sed. Etiam tortor risus, laoreet at arcu et, fringilla dictum dui. In eget neque accumsan erat vestibulum ultricies. Duis a facilisis tortor. Donec at massa sapien."</p>
                    </div>

                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                    {destaque.map((item, i) => (
                        <div key={i} className="vidro p-6 rounded-2xl fade-in" style={{
                            animationDelay: `${(i + 1) * 100}ms`
                        }}>
                            <div className="w-12 h-12 rounded-xl bg-primaria/10 flex justify-center items-center mb-4 hover:bg-primaria/20"><item.icon className="w-6 h-6 text-primaria" /></div>
                            <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
                            <p className="text-sm text-off-texto">{item.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}

export default About