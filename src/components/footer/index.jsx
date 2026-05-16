import { Share2, Mail } from 'lucide-react'; 

export function Footer() {
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'LS Empresarial - Massageador Profissional',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Erro ao compartilhar', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  
  const handleEmail = () => {
    window.location.href = "mailto:yofemcompany@gmail.com";
  };

  return (
    <footer
      id="footer"
      className="bg-[#051126] text-white pt-16 pb-8 px-4 border-t-10 border-red-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              LS Empresarial
            </h2>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Sua parceira em bem-estar e performance física. Tecnologia que
              relaxa, saúde que transforma.
            </p>
            <div className="flex gap-4 pt-2">
              <button
                className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                onClick={handleShare}
                title="Compartilhar"
              >
                <Share2 className="w-5 h-5 text-slate-300" />
              </button>
              <button
                className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                onClick={handleEmail}
                title="Enviar E-mail"
              >
                <Mail className="w-5 h-5 text-slate-300" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-wider text-sm text-slate-200">
              Links Úteis
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a
                  href="https://docs.google.com/document/d/1DAKCnNepoYCbK_IQjldSDIANCJs-FssyjcG3_S2Iif4/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1sM2G-45L3SFGyXUtXDXLA8f_o9hXBrLSxxdwVROzFiM/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-wider text-sm text-slate-200">
              Suporte
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a
                  href="https://wa.me/5518996644674?text=Olá! Gostaria de saber mais sobre o massageador profissional."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Suporte via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-slate-500 text-xs space-y-4">
          <p className="leading-relaxed">
            <strong>AVISO LEGAL:</strong> O site lsempresarial.com é um promotor
            independente e atua estritamente na divulgação de produtos através
            de links de afiliados/dropshipping. Não processamos pagamentos, não
            coletamos dados de cartão e não realizamos envios. Ao clicar nos
            botões de compra, você é redirecionado de forma segura para a
            Shopee, que se responsabiliza integralmente pela venda, entrega e
            suporte pós-venda.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm pt-2">
            <p>
              © 2026 LS Empresarial. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}