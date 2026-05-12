import ProductImg from '../../assets/assento-massageador-profissional.png';

export function Product() {
    return (
        /* 1. Removido o max-w e mx-auto daqui para a borda ocupar 100% da largura */
        <section id='product' className="w-full py-12 md:py-20 border-b-10 border-red-800">
            
            {/* 2. Criado um container interno com max-w-7xl e px-6 para o conteúdo não grudar nas bordas */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-12">
                
                <div className="flex-1 space-y-6">
                    <div className="w-12 h-1 bg-red-600"></div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Tecnologia Médica para Alívio Muscular Profundo
                    </h1>
                    
                    <p className="text-lg text-slate-600 max-w-lg">
                        Recupere-se mais rápido e elimine as tensões do dia a dia com a engenharia 
                        avançada da LS Empresarial. O padrão-ouro em massagem percussiva profissional.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                        <button className="group bg-[#0f172a] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-800 transition-colors w-full sm:w-auto justify-center cursor-pointer">
                            Comprar via WhatsApp
                            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                        </button>
                        
                        <div className="flex items-center gap-2 text-slate-700 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Garantia Médica
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative mt-10 md:mt-0">
                    <div className="relative z-9 rounded-2xl overflow-hidden border-t-8 border-red-700 shadow-2xl">
                        <img 
                            src={ProductImg} 
                            alt="Massageador Profissional LS Empresarial" 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}