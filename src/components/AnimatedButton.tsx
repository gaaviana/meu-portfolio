import { Download } from "lucide-react"

function AnimatedButton() {
    return <button className="relative bg-transparent border border-border text-texto hover:border-primaria/50 transition-all duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primaria focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animacao-borda">  <span className="relative z-10 flex items-center justify-center gap-2"><Download className="w-5 h-5" /> Download CV </span></button>
}

export default AnimatedButton