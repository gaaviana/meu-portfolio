

const experiencias = [
    {
        periodo: "2022 - present",
        papel: "Senior Frontend Engineer",
        empresa: "Tech innovators Inc.",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        tecnologias: ["react", "Typerscript", "NextJS", "GraphQL"],
        atual: true,
    },
    {
        periodo: "2021 - 2022",
        papel: "Senior Frontend Engineer",
        empresa: "Tech innovators Inc.",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        tecnologias: ["react", "Typerscript", "NextJS", "GraphQL"],
        atual: false,
    },
    {
        periodo: "2019 - 2020",
        papel: "Senior Frontend Engineer",
        empresa: "Tech innovators Inc.",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        tecnologias: ["react", "Typerscript", "NextJS", "GraphQL"],
        atual: false,
    },
    {
        periodo: "2018 - 2019",
        papel: "Senior Frontend Engineer",
        empresa: "Tech innovators Inc.",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        tecnologias: ["react", "Typerscript", "NextJS", "GraphQL"],
        atual: false,
    },
]

function Experience() {
    return <section id="experience" className="py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-16">
                <span className="text-secundaria-topo text-sm font-medium tracking-wider uppercase">Carrer Journey</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight fade-in delay-100 text-secundaria-topo">Experience that <span className="font-serif italic font-normal text-white">speaks volumes.</span></h2>

                <p className="text-off-texto fade-in delay-200">
                    A timeline of my professionaç growth, from curious beginner to senior engineer leading teams a nd biulding products at scale.
                </p>
            </div>

            <div className="relative">
                <div className="linha-do-tempo absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primaria/70 via-primaria/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                
                <div className="space-y-12">
                    {experiencias.map((exp, i) => (
                        <div key={i} className="relative grid md:grid-cols-2 gap-8 fade-in" style={{
                            animationDelay: `${(i + 1) * 150}ms`
                        }}>

                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primaria rounded-full -translate-x-1/2 ring-4 ring-fundo z-10">
                                {exp.atual && <span className="absolute inset-0 rounded-full bg-primaria animate-ping opacity-75"/>}
                            </div>

                            <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                <div className={`vidro p-6 rounded-2xl border border-primaria/30 hover:border-primaria/50 transition-all duration-500`}>
                                    <span className="text-sm text-primaria font-medium">{exp.periodo}</span>
                                    <h3 className="text-xl font-semibold mt-2">{exp.papel}</h3>
                                    <p className="text-off-texto">{exp.empresa}</p>
                                    <p className="text-sm text-off-texto mt-4">{exp.descricao}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>{exp.tecnologias.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-superficie text-xs rounded-full text-off-texto">{tech}</span>
                                    ))}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}

export default Experience