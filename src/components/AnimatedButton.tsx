type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

function AnimatedButton({children}:ButtonProps) {
    return <button className="relative bg-transparent border border-border text-texto hover:border-primaria/50 transition-all duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primaria focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animacao-borda">  <span className="relative z-10 flex items-center justify-center gap-2">{children}</span></button>
}

export default AnimatedButton