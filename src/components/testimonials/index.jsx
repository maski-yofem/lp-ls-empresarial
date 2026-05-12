export function Testimonials() {
    const reviews = [
        {
            text: "Utilizo nos meus pacientes atletas e os resultados na recuperação pós-treino são impressionantes. A precisão dos níveis é o diferencial.",
            author: "Dra. Amanda Silva",
            role: "Fisioterapeuta Esportiva"
        },
        {
            text: "A melhor ferramenta para liberação miofascial que já testei. O motor brushless realmente mantém o torque mesmo sob pressão.",
            author: "Ricardo Torres",
            role: "Educador Físico",
            highlight: true 
        },
        {
            text: "Sofria com dores lombares crônicas por conta do trabalho sentado. Dez minutos por dia com a LS mudaram minha qualidade de vida.",
            author: "Marcos Viana",
            role: "Engenheiro de Software"
        }
    ];

    return (
        <section id="testimonials" className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
                        Aprovado por Especialistas
                    </h2>
                    <div className="w-16 h-1 bg-red-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((item, index) => (
                        <div 
                            key={index}
                            className={`relative bg-slate-50 p-8 rounded-2xl border-t-4 transition-all hover:scale-[1.02] ${
                                item.highlight ? 'border-red-600 shadow-lg' : 'border-transparent shadow-sm'
                            }`}
                        >
                            <span className="absolute top-6 right-8 text-6xl font-serif text-red-200 select-none">
                                ”
                            </span>

                            <p className="text-slate-600 italic leading-relaxed mb-8 relative z-10">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#0f172a] rounded-full shrink-0">
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0f172a]">{item.author}</h4>
                                    <p className="text-sm text-slate-500">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}