import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto bg-[#051126] rounded-3xl p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Pronto para transformar sua recuperação física?
          </h2>

          <p className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
            Garanta hoje sua tecnologia LS Empresarial com condições exclusivas
            via WhatsApp. Nossa equipe médica está pronta para te atender.
          </p>

          <div className="pt-4">
            <a
              href="https://wa.me/5518996644674?text=Olá! Gostaria de saber mais sobre o massageador profissional."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 mx-auto transition-all hover:scale-105 shadow-lg shadow-red-600/20 w-fit justify-center cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              Falar com Especialista no WhatsApp
            </a>
          </div>

          <p className="text-slate-500 text-sm font-medium tracking-wide">
            Atendimento humanizado e especializado.
          </p>
        </div>
      </div>
    </section>
  );
}
