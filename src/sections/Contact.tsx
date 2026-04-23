import Button from "@/components/Button"
import emailjs from "@emailjs/browser"
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

const infosContato = [
    {
        icon: Mail,
        label: "Email",
        value: "gaa.vianaa@gmail.com",
        href: "mailto:gaa.vianaa@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+55 11 97836-0876",
        href: "tel:+5511978360876",
    },
    {
        icon: MapPin,
        label: "Location",
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
                <span className="text-secundaria-topo text-sm font-medium -tracking-wider uppercase fade-in">Get in touch</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 fade-in delay-100 text-secundaria-topo">Let's build <span className="font-serif italic font-normal text-white">something great.</span></h2>
                <p className="text-off-texto fade-in delay-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit massa turpis. Donec pulvinar molestie sem, a consequat risus vulputate sed. Etiam tortor risus.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="vidro p-8 rounded-3xl border border-primaria/30 fade-in delay-300">
                    <form className="space-y-6" onSubmit={enviar}>
                        <div>
                            <label htmlFor="nome" className="block text-sm font-medium mb-2">Nome</label>
                            <input id="nome" type="text" required placeholder="Your name..." value={dadosForm.nome} onChange={(e) => setDadosForms({ ...dadosForm, nome: e.target.value })} className="w-full px-4 py-3 bg-superficie rounded-xl border border-border focus:border-primaria focus:ring-1 focus:ring-primaria outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input id="email" type="email" required placeholder="Your@email.com" value={dadosForm.email} onChange={(e) => setDadosForms({ ...dadosForm, email: e.target.value })} className="w-full px-4 py-3 bg-superficie rounded-xl border border-border focus:border-primaria focus:ring-1 focus:ring-primaria outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="mensagem" className="block text-sm font-medium mb-2">Mensagem</label>
                            <textarea rows={5} required placeholder="Your message..." value={dadosForm.mensagem} onChange={(e) => setDadosForms({ ...dadosForm, mensagem: e.target.value })} className="w-full px-4 py-3 bg-superficie rounded-xl border border-border focus:border-primaria focus:ring-1 focus:ring-primaria outline-none transition-all resize-none" />
                        </div>

                        <Button className="w-full" type="submit" size="lg" disabled={carregado}>
                            {carregado ? (
                                <>
                                    Seending...
                                    <Send />
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </>
                            )
                            }
                        </Button>

                        {statusEnvio.type && (
                            <div className={`flex items-center gap-3 p-4 rounded-xl ${statusEnvio.type === "success"
                                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                : "bg-red-500/10 border border-red-500/20 text-red-400"}`}>
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
                        <h3 className="text-xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-4">
                            { infosContato.map((info, i) => (
                                <a key={i} href={info.href} className="flex items-center gap-4 rounded-xl hover:bg-superficie transition-colors p-3">
                                    <div className="w-12 h-12 rounded-xl bg-primaria/10 flex items-center justify-center">
                                        <info.icon className="w-5 h-5 text-primaria "/>
                                    </div>
                                    <div>
                                        <div className="text-sm text-off-texto">{info.label}</div>
                                        <div className="font-medium">{info.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="vidro rounded-3xl p-8 border border-primaria/30">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                            <span className="font-medium">Currently Available</span>
                        </div>
                        <p className="text-off-texto text-sm">
                            I'im currently open to oppotyunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Contact