import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const destaque = [
    {
        icon: Code2,
        titulo: "Código Limpo",
        descricao: "Valorizo a escrita de código claro, organizado e de fácil manutenção. Acredito que um bom código não é apenas funcional, mas também compreensível e sustentável a longo prazo."
    },
    {
        icon: Rocket,
        titulo: "Desempenho",
        descricao: "Busco desenvolver aplicações rápidas e eficientes, otimizando recursos e garantindo uma experiência fluida para o usuário em diferentes contextos."
    },
    {
        icon: Users,
        titulo: "Colaboração",
        descricao: "Trabalho bem em equipe, compartilhando conhecimento e contribuindo para um ambiente produtivo. Acredito que boas soluções surgem da troca de ideias."
    },
    {
        icon: Lightbulb,
        titulo: "Inovação",
        descricao: "Estou sempre em busca de aprender novas abordagens e tecnologias, explorando formas criativas de resolver problemas e melhorar produtos digitais."
    },
]

function About() {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="fade-in">
                        <span className="text-cor-secundaria text-sm font-medium tracking-wider uppercase">Sobre mim</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight fade-in delay-100 text-cor-texto">
                        Construindo o futuro,
                        <span className="font-serif italic font-normal text-cor-secundaria"> um componente de cada vez.</span>
                    </h2>
                    <div className="space-y-4 text-cor-neutro-texto fade-in delay-200">
                        <p>Sou Gabriel Viana, engenheiro de software apaixonado por transformar ideias em soluções digitais reais. Tenho experiência no desenvolvimento de aplicações web, sempre buscando unir desempenho, organização e uma boa experiência para o usuário final.</p>
                        <p>Ao longo da minha trajetória, venho desenvolvendo projetos próprios e acadêmicos que envolvem desde a criação de interfaces até a estruturação de sistemas completos, incluindo banco de dados e integrações. Esse processo tem fortalecido minha base técnica e minha capacidade de pensar soluções de forma mais estratégica.</p>
                        <p>Também já trabalhei com funcionalidades como autenticação de usuários, gerenciamento de dados e integração com serviços externos, sempre com foco em criar aplicações funcionais, bem estruturadas e preparadas para evoluir.</p>
                    </div>

                    <div className="vidro rounded-2xl p-6 borda-brilha fade-in delay-300">
                        <p className="text-lg font-medium italic text-cor-texto">"Além da parte técnica, valorizo muito o aprendizado contínuo e o trabalho em equipe. Acredito que tecnologia vai além de código — é sobre resolver problemas reais e criar experiências que realmente impactam as pessoas."</p>
                    </div>

                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                    {destaque.map((item, i) => (
                        <div key={i} className="vidro p-6 rounded-2xl fade-in" style={{
                            animationDelay: `${(i + 1) * 100}ms`
                        }}>
                            <div className="w-12 h-12 rounded-xl bg-cor-primaria/10 flex justify-center items-center mb-4 hover:bg-cor-primaria/20"><item.icon className="w-6 h-6 text-cor-primaria" /></div>
                            <h3 className="text-lg font-semibold mb-2 text-cor-texto">{item.titulo}</h3>
                            <p className="text-sm text-cor-neutro-texto">{item.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}

export default About