import { Share2, Mail } from 'lucide-react';

export function Footer() {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'LS Empresarial - Tecnologia Médica',
                    text: 'Confira o massageador profissional da LS Empresarial!',
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Erro ao compartilhar:', error);
            }
        } else {
            alert("O compartilhamento não é suportado neste navegador. Copie a URL: " + window.location.href);
        }
    };

    const handleEmail = () => {
        window.location.href = "mailto:contato@lsempresarial.com.br";
    };


    return (
        <footer id='footer' className="bg-[#051126] text-white pt-16 pb-8 px-4 border-t-10 border-red-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">LS Empresarial</h2>
                        <p className="text-slate-400 max-w-sm leading-relaxed">
                            Sua parceira em bem-estar e performance física. 
                            Tecnologia que relaxa, saúde que transforma.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <button
                                className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                                onClick={handleShare}
                            >
                                <Share2 className="w-5 h-5 text-slate-300" />
                            </button>
                            <button
                                className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                                onClick={handleEmail}
                            >
                                <Mail className="w-5 h-5 text-slate-300" />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-bold uppercase tracking-wider text-sm">Links Úteis</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-bold uppercase tracking-wider text-sm">Suporte</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">WhatsApp Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>© 2026 LS Empresarial. Massage Technology. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}