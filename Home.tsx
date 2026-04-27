import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, BookOpen, Gift, Code2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 50);
  });

  const handleCheckout = () => {
    window.location.href = "https://go.hotmart.com/A105072718R";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">@pytk_solutions</span>
          </div>
          <Button
            onClick={handleCheckout}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Comprar Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Novo eBook em Português
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Automação com Python para <span className="text-blue-400">Iniciantes</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Crie robôs que trabalham por você e economize <span className="text-yellow-400 font-semibold">horas de trabalho</span> todos os dias
          </p>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Aprenda a automatizar tarefas repetitivas com Python, mesmo que você nunca tenha programado antes. Do básico até projetos profissionais em poucos capítulos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handleCheckout}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg transition-all transform hover:scale-105"
            >
              Comprar Agora <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-400 text-slate-300 hover:bg-slate-700 text-lg px-8 py-6 rounded-lg"
            >
              Ver Sumário
            </Button>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Sem Assinatura</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Bônus Exclusivos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problema/Solução */}
      <section className="py-20 px-4 md:px-0 bg-slate-800/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Você está cansado de tarefas repetitivas?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problema */}
            <Card className="bg-red-500/10 border-red-500/30 p-8">
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ O Problema</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  <span>Clicar 200 vezes por dia em tarefas iguais</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  <span>Erros manuais que custam tempo e dinheiro</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  <span>Perder horas com trabalho que deveria ser automático</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  <span>Não conseguir focar em tarefas importantes</span>
                </li>
              </ul>
            </Card>

            {/* Solução */}
            <Card className="bg-green-500/10 border-green-500/30 p-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">✅ A Solução</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-green-400">•</span>
                  <span>Robôs que fazem o trabalho por você 24/7</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400">•</span>
                  <span>Precisão 100% - sem erros humanos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400">•</span>
                  <span>Economizar 10+ horas por semana</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400">•</span>
                  <span>Focar no que realmente importa</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-20 px-4 md:px-0">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            O que você vai aprender
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Python Básico", icon: "🐍", desc: "Fundamentos que você realmente precisa" },
              { title: "PyAutoGUI", icon: "🖱️", desc: "Controle mouse e teclado automaticamente" },
              { title: "Keyboard Library", icon: "⌨️", desc: "Capture e dispare atalhos globais" },
              { title: "Selenium", icon: "🌐", desc: "Automatize navegação web" },
              { title: "Pandas", icon: "📊", desc: "Manipule planilhas como um profissional" },
              { title: "Projetos Práticos", icon: "🎯", desc: "20+ ideias prontas para usar" },
            ].map((item, idx) => (
              <Card key={idx} className="bg-slate-700/50 border-slate-600 p-6 hover:bg-slate-700/70 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            🎁 Bônus Exclusivos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-700/50 border-purple-500/50 p-8">
              <Gift className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Robô de Produtividade</h3>
              <p className="text-slate-300 mb-4">
                Um script pronto que organiza seus arquivos, cria checklists e faz backups automaticamente. Copie e use hoje mesmo!
              </p>
              <div className="text-sm text-purple-400 font-semibold">✓ Código comentado</div>
            </Card>

            <Card className="bg-slate-700/50 border-blue-500/50 p-8">
              <Zap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Resolvedor Tecla Fantasma</h3>
              <p className="text-slate-300 mb-4">
                Seu teclado digita sozinho? Receba uma ferramenta + guia completo para diagnosticar e resolver o problema.
              </p>
              <div className="text-sm text-blue-400 font-semibold">✓ Ferramenta pronta</div>
            </Card>

            <Card className="bg-slate-700/50 border-green-500/50 p-8">
              <BookOpen className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Guia de Git</h3>
              <p className="text-slate-300 mb-4">
                Aprenda a versionar seus códigos e nunca mais perca seu trabalho. Inclui link para guia interativo.
              </p>
              <div className="text-sm text-green-400 font-semibold">✓ Recurso externo</div>
            </Card>

            <Card className="bg-slate-700/50 border-yellow-500/50 p-8">
              <Code2 className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">20+ Projetos Prontos</h3>
              <p className="text-slate-300 mb-4">
                Ideias de robôs que você pode criar e até monetizar. Cada uma com descrição e dicas de implementação.
              </p>
              <div className="text-sm text-yellow-400 font-semibold">✓ Ideias + código</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Próximo Passo */}
      <section className="py-20 px-4 md:px-0">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Próximo Passo: Aprofunde-se com Vídeo Aulas
          </h2>

          <Card className="bg-slate-700/50 border-slate-600 p-8 text-center">
            <p className="text-lg text-slate-300 mb-6">
              Depois de ler este eBook, você terá a base sólida. Se quiser dominar a automação e transformar em renda, o próximo passo é o curso em vídeo-aulas com projetos práticos.
            </p>
            <Button
              onClick={handleCheckout}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 rounded-lg"
            >
              Conhecer o Curso Completo
            </Button>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Acesso imediato ao eBook + todos os bônus. Sem assinatura, sem surpresas.
          </p>
          <Button
            onClick={handleCheckout}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 py-7 rounded-lg font-bold transition-all transform hover:scale-105"
          >
            Comprar Agora por R$ 29,90 <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 md:px-0">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                @pytk_solutions
              </h3>
              <p className="text-slate-400 text-sm">
                Educação em automação e Python para iniciantes
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="https://resolver-tecla-fantasma.vercel.app/" className="hover:text-blue-400">Resolvedor Tecla Fantasma</a></li>
                <li><a href="https://learning-git-amber.vercel.app/" className="hover:text-blue-400">Guia de Git</a></li>
                <li><a href="https://go.hotmart.com/A105072718R" className="hover:text-blue-400">Comprar Curso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-slate-400 text-sm">
                Siga @pytk_solutions nas redes sociais para atualizações
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2026 @pytk_solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
