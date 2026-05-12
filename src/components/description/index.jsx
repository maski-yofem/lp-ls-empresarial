import { CheckCircle2 } from 'lucide-react';
import MotorImg from '../../assets/motor-assento-massageador-profissional.png';

export default function DescriptionProduct() {
    const specs = [
        {
            title: "Motor Brushless DC",
            description: "Tecnologia High-Torque com imãs de terras raras para máxima potência e durabilidade."
        },
        {
            title: "Terapia de Calor Integrada",
            description: "Sistema com elemento PTC e isolamento térmico para relaxamento profundo dos tecidos."
        },
        {
            title: "Matriz de Sensores Inteligente",
            description: "Microprocessador avançado que ajusta a massagem em tempo real via sensores de pressão."
        }
    ];

    return (
        <section className="bg-[#051126] py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                
                <div className="flex-1 z-10">
                    <span className="text-red-600 font-bold tracking-widest text-sm uppercase">
                        Engenharia de Precisão
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-12 leading-tight">
                        Motor Brushless de Alto <br /> Desempenho
                    </h2>

                    <div className="space-y-10">
                        {specs.map((spec, index) => (
                            <div key={index} className="flex gap-4 group">
                                <div className="mt-1">
                                    <CheckCircle2 className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-xl mb-1">
                                        {spec.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed max-w-md">
                                        {spec.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative">
                        <img 
                            src={MotorImg} 
                            alt="Tecnologia do Motor LS Empresarial" 
                            className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                        />
                        
                        <div className="absolute -bottom-6 -left-6 md:left-0 bg-red-600 text-white px-8 py-4 rounded-xl z-20 shadow-xl border border-red-500">
                            <span className="text-2xl font-black block">3200 RPM</span>
                            <span className="text-xs uppercase tracking-widest opacity-80">Frequência Máxima</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}