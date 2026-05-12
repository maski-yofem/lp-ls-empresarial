import { Zap, Activity, Battery } from 'lucide-react';

export function Benefits() {
    const benefits = [
        {
            icon: <Zap className="w-6 h-6 text-blue-600" />,
            title: "Alívio Imediato",
            description: "Penetração profunda no tecido muscular para liberação miofascial rápida e eficaz."
        },
        {
            icon: <Activity className="w-6 h-6 text-blue-600" />,
            title: "Tecnologia Médica",
            description: "Desenvolvido em conjunto com fisioterapeutas para garantir segurança e resultados clínicos.",
            highlight: true 
        },
        {
            icon: <Battery className="w-6 h-6 text-blue-600" />,
            title: "Portabilidade",
            description: "Design ergonômico e bateria de longa duração para levar sua recuperação para qualquer lugar."
        }
    ];

    return (
        <section id='benefits' className="bg-slate-50 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Por que escolher LS Empresarial?
                    </h2>
                    <div className="w-16 h-1 bg-red-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index}
                            className={`bg-white p-8 rounded-xl shadow-sm border-t-4 transition-all hover:shadow-md ${
                                benefit.highlight ? 'border-red-600' : 'border-transparent'
                            }`}
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                                {benefit.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">
                                {benefit.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}