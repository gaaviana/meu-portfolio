import Button from "@/components/Button"
import emailjs from "@emailjs/browser"
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

const infosContato = [
    {
        icon: Mail,
        label: "Email",
        value: "gaa.vianaa@gmail.com",
        href: "mailto:gaa.vianaa@gmail.com",
    },
    {
        icon: Phone,
        label: "Telefone",
        value: "+55 11 97836-0876",
        href: "tel:+5511978360876",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: "11978360876",
        href: "https://wa.me/5511978360876?text=Olá! Vi seu portfólio e gostaria de falar com você."
    },
    {
        icon: MapPin,
        label: "Localização",
        value: "São Paulo, SP",
        href: "#",
    },
]

type StatusEnvio = {
    type: "success" | "error" | null
    mensagem: string
}

function Contact() {
    const [dadosForm, setDadosForms] = useState({
        nome: "",
        email: "",
        mensagem: "",
    })

    const [carregado, setCarregado] = useState(false)
    const [statusEnvio, setStatusEnvio] = useState<StatusEnvio>({
        type: null,
        mensagem: ""
    })

    const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setCarregado(true)
        setStatusEnvio({ type: null, mensagem: "" })
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "A configuração do EmailJS está errada."
                )
            }

            await emailjs.send(serviceId, templateId, {
                name: dadosForm.nome,
                email: dadosForm.email,
                message: dadosForm.mensagem,
            }, publicKey)

            setStatusEnvio({
                type: "success",
                mensagem: "Mensagem enviada com sucesso!"
            })
        } catch (erro: any) {
            console.error("EmailJS error: ", erro)

            setStatusEnvio({
                type: "error",
                mensagem: erro?.text || erro?.message || "Erro ao enviar a mensagem."
            })
        } finally {
            setCarregado(false)
        }
    }

    return <section id="contact" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-cor-secundaria text-sm font-medium -tracking-wider uppercase fade-in">Entre em contato</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 fade-in delay-100 text-cor-texto">Vamos construir <span className="font-serif italic font-normal text-cor-secundaria">algo incrível.</span></h2>
                <p className="text-cor-neutro-texto fade-in delay-200">
                    Disponível para projetos e oportunidades em desenvolvimento de software. Entre em contato para colaborarmos.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="vidro p-8 rounded-3xl border border-cor-primaria/45 shadow-sm shadow-cor-texto/5 fade-in delay-300">
                    <form className="space-y-6" onSubmit={enviar}>
                        <div>
                            <label htmlFor="nome" className="block text-sm font-medium mb-2 text-cor-texto">Nome</label>
                            <input id="nome" type="text" required placeholder="Seu nome..." value={dadosForm.nome} onChange={(e) => setDadosForms({ ...dadosForm, nome: e.target.value })} className="w-full px-4 py-3 bg-cor-superficie text-cor-texto placeholder:text-cor-neutro-texto/70 rounded-xl border border-cor-texto/12 hover:border-cor-texto/22 focus:border-cor-primaria focus:ring-1 focus:ring-cor-primaria outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-cor-texto">Email</label>
                            <input id="email" type="email" required placeholder="Seu@email.com" value={dadosForm.email} onChange={(e) => setDadosForms({ ...dadosForm, email: e.target.value })} className="w-full px-4 py-3 bg-cor-superficie text-cor-texto placeholder:text-cor-neutro-texto/70 rounded-xl border border-cor-texto/12 hover:border-cor-texto/22 focus:border-cor-primaria focus:ring-1 focus:ring-cor-primaria outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="mensagem" className="block text-sm font-medium mb-2 text-cor-texto">Mensagem</label>
                            <textarea rows={5} required placeholder="Sua mensagem..." value={dadosForm.mensagem} onChange={(e) => setDadosForms({ ...dadosForm, mensagem: e.target.value })} className="w-full px-4 py-3 bg-cor-superficie text-cor-texto placeholder:text-cor-neutro-texto/70 rounded-xl border border-cor-texto/12 hover:border-cor-texto/22 focus:border-cor-primaria focus:ring-1 focus:ring-cor-primaria outline-none transition-all resize-none" />
                        </div>

                        <Button className="w-full" type="submit" size="lg" disabled={carregado}>
                            {carregado ? (
                                <>
                                    Enviando...
                                    <Send />
                                </>
                            ) : (
                                <>
                                    Enviar mensagem
                                    <Send className="w-5 h-5" />
                                </>
                            )
                            }
                        </Button>

                        {statusEnvio.type && (
                            <div className={`flex items-center gap-3 p-4 rounded-xl ${statusEnvio.type === "success"
                                ? "bg-emerald-500/10 border border-emerald-600/25 text-emerald-800"
                                : "bg-red-500/10 border border-red-600/25 text-red-800"}`}>
                                {statusEnvio.type === "success" ? (
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                )}
                                <p className="text-sm">{statusEnvio.mensagem}</p>
                            </div>
                        )}
                    </form>
                </div>

                <div className="space-y-6 fade-in delay-400">
                    <div className="vidro rounded-3xl p-8">
                        <h3 className="text-xl font-semibold mb-6 text-cor-texto">
                            Informações de contato
                        </h3>
                        <div className="space-y-4">
                            { infosContato.map((info, i) => (
                                <a key={i} href={info.href} target="blank" className="flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-cor-borda hover:bg-cor-primaria/10 hover:shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-cor-primaria/10 flex items-center justify-center">
                                        <info.icon className="w-5 h-5 text-cor-primaria "/>
                                    </div>
                                    <div>
                                        <div className="text-sm text-cor-neutro-texto">{info.label}</div>
                                        <div className="font-medium text-cor-texto">{info.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="vidro rounded-3xl p-8 border border-cor-primaria/45 shadow-sm shadow-cor-texto/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                            <span className="font-medium text-cor-texto">Atualmente disponível</span>
                        </div>
                        <p className="text-cor-neutro-texto text-sm">
                            Estou aberto a oportunidades e projetos interessantes. Se você precisa de um engenheiro em tempo integral ou consultoria freelance, vamos conversar!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Contact