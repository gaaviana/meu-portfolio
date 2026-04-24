

const experiencias = [
    {
        periodo: "2026 - presente",
        papel: "Graduação em Engenharia de Software",
        empresa: "Universidade Cruzeiro do Sul",
        descricao: "Curso superior focado no desenvolvimento e engenharia de sistemas, abordando arquitetura de software, boas práticas de programação, engenharia de requisitos e construção de soluções escaláveis.",
        tecnologias: [],
        atual: true,
    },
    {
        periodo: "2024 - 2025",
        papel: "Técnico em Informática para Internet",
        empresa: "Senac",
        descricao: "Formação focada em desenvolvimento web, banco de dados e construção de aplicações para internet.",
        tecnologias: [],
        atual: false,
    }
]

function Experience() {
    return <section id="experience" className="py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-16">
                <span className="text-cor-secundaria text-sm font-medium tracking-wider uppercase">Jornada</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight fade-in delay-100 text-cor-texto">Experiência que <span className="font-serif italic font-normal text-cor-secundaria">fala por si.</span></h2>

                <p className="text-cor-neutro-texto fade-in delay-200">
                    Uma linha do tempo da minha trajetória na área de tecnologia, desde os primeiros estudos até os projetos que venho desenvolvendo atualmente.
                </p>
            </div>

            <div className="relative">
                <div className="linha-do-tempo absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cor-primaria/70 via-cor-primaria/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgb(var(--cor-primaria)_/_0.45)]" />

                <div className="space-y-12">
                    {experiencias.map((exp, i) => (
                        <div key={i} className="relative grid md:grid-cols-2 gap-8 fade-in" style={{
                            animationDelay: `${(i + 1) * 150}ms`
                        }}>

                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-cor-primaria rounded-full -translate-x-1/2 ring-4 ring-cor-fundo z-10">
                                {exp.atual && <span className="absolute inset-0 rounded-full bg-cor-primaria animate-ping opacity-75" />}
                            </div>

                            <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                <div className={`vidro p-6 rounded-2xl border border-cor-primaria/45 shadow-sm shadow-cor-texto/5 hover:border-cor-primaria/80 hover:shadow-md hover:shadow-cor-texto/10 transition-all duration-500`}>
                                    <span className="text-sm text-cor-primaria font-medium">{exp.periodo}</span>
                                    <h3 className="text-xl font-semibold mt-2 text-cor-texto">{exp.papel}</h3>
                                    <p className="text-cor-neutro-texto">{exp.empresa}</p>
                                    <p className="text-sm text-cor-neutro-texto mt-4">{exp.descricao}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>{exp.tecnologias.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-cor-superficie text-xs rounded-full border border-cor-texto/12 text-cor-neutro-texto">{tech}</span>
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