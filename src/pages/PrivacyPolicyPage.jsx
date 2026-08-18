import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin, Lock, FileText, UserCheck, AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function PrivacyPolicyPage() {
  const { language, prefix } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = language === "en" 
      ? "Privacy Policy | Route N109 Mobilidade Elétrica" 
      : language === "es"
      ? "Política de Privacidad | Route N109 Mobilidade Elétrica"
      : language === "fr"
      ? "Politique de Confidentialité | Route N109 Mobilidade Elétrica"
      : language === "de"
      ? "Datenschutzerklärung | Route N109 Mobilidade Elétrica"
      : "Política de Privacidade | Route N109 Mobilidade Elétrica";
  }, [language]);

  return (
    <div className="bg-[#FCFBFA] text-neutral-900 min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link 
            to={prefix || "/"} 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-500 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === "en" ? "Back to Home" : "Voltar ao Início"}</span>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white border border-neutral-200/80 rounded-2xl p-8 md:p-12 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>RGPD / Regulamento (UE) 2016/679</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-neutral-950 mb-4">
            {language === "en" ? "Privacy Policy" : "Política de Privacidade"}
          </h1>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            {language === "en" 
              ? "Route N109 is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) and applicable Portuguese legislation."
              : "A Route N109 está empenhada em proteger a sua privacidade e os seus dados pessoais, em estrito cumprimento do Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento UE 2016/679) e da Lei n.º 58/2019 de 8 de agosto."}
          </p>
          <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-wrap gap-4 text-xs text-neutral-500">
            <span><strong>{language === "en" ? "Last updated:" : "Última atualização:"}</strong> Agosto de 2026</span>
            <span>•</span>
            <span><strong>{language === "en" ? "Entity:" : "Entidade:"}</strong> Route N109 - Mobilidade Elétrica</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-neutral-700 text-sm md:text-base leading-relaxed">
          
          {/* Section 1: Responsible Entity */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <UserCheck className="w-5 h-5 text-primary" />
              <h2>1. Responsável pelo Tratamento dos Dados</h2>
            </div>
            <p className="mb-4">
              O responsável pelo tratamento dos seus dados pessoais é o estabelecimento <strong>Route N109 — Mobilidade Elétrica</strong>, com sede e oficina física em:
            </p>
            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200/60 space-y-2 text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{config.address.street}, {config.address.locality}, {config.address.postalCode} – Pombal, Portugal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>Telefone: <a href={`tel:${config.telephone}`} className="font-bold text-neutral-900 hover:text-primary">{config.telephoneDisplay}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>E-mail: <a href={`mailto:${config.email}`} className="font-bold text-neutral-900 hover:text-primary">{config.email}</a></span>
              </div>
            </div>
          </section>

          {/* Section 2: Data Collected */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <FileText className="w-5 h-5 text-primary" />
              <h2>2. Dados Pessoais Recolhidos e Finalidades</h2>
            </div>
            <p className="mb-4">
              Recolhemos apenas os dados estritamente necessários para responder às suas solicitações e garantir a melhor prestação de serviços:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Formulários de Pedido de Orçamento e Agendamento de Oficina:</strong> Nome, número de telefone, endereço de e-mail, modelo/marca do veículo elétrico e descrição do problema técnico ou serviço pretendido.
              </li>
              <li>
                <strong>Comunicação Direta via WhatsApp / Telefone:</strong> Número de contacto e histórico de conversação referente ao suporte, aquisição de veículos ou reparações.
              </li>
              <li>
                <strong>Dados de Navegação Anónimos:</strong> Informações agregadas sobre páginas visitadas e tempo de sessão (via Google Analytics com anonimização de IP), utilizadas apenas para estatística e melhoria contínua do website.
              </li>
            </ul>
          </section>

          {/* Section 3: Legal Basis */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <Lock className="w-5 h-5 text-primary" />
              <h2>3. Fundamento Jurídico do Tratamento</h2>
            </div>
            <p className="mb-3">Os dados pessoais são tratados com base nos seguintes fundamentos:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Diligências pré-contratuais e execução de contrato:</strong> Para envio de orçamentos, encomendas de peças, venda de motos/scooters e execução de serviços de oficina.</li>
              <li><strong>Consentimento:</strong> Fornecido explicitamente pelo utilizador ao submeter os formulários de contacto ou ao aceitar cookies analíticos.</li>
              <li><strong>Cumprimento de obrigações legais:</strong> Emissão de faturas e cumprimento de prazos de garantia oficial.</li>
            </ul>
          </section>

          {/* Section 4: Data Sharing */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h2>4. Partilha e Conservação de Dados</h2>
            </div>
            <p className="mb-3">
              <strong>Não vendemos nem cedemos os seus dados pessoais a terceiros para fins comerciais.</strong> Os dados apenas poderão ser transmitidos a:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Parceiros logísticos e transportadoras estritamente para efeitos de entrega de encomendas de veículos ou peças;</li>
              <li>Autoridades fiscais ou judiciais quando exigido por lei.</li>
            </ul>
            <p>
              Os dados são conservados pelo período necessário para a finalidade a que se destinam ou pelos prazos legais obrigatórios (ex.: conservação de faturas de compra/venda por 10 anos).
            </p>
          </section>

          {/* Section 5: User Rights */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <AlertCircle className="w-5 h-5 text-primary" />
              <h2>5. Os Seus Direitos (RGPD)</h2>
            </div>
            <p className="mb-3">Enquanto titular dos dados, tem o direito de, a qualquer momento e gratuitamente:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Aceder</strong> aos seus dados pessoais e obter confirmação sobre o seu tratamento;</li>
              <li><strong>Retificar</strong> dados inexatos ou incompletos;</li>
              <li><strong>Solicitar o apagamento</strong> dos seus dados («direito a ser esquecido»), desde que não colida com obrigações legais;</li>
              <li><strong>Limitar ou opor-se</strong> ao tratamento dos seus dados;</li>
              <li><strong>Revogar o consentimento</strong> previamente prestado;</li>
              <li><strong>Reclamar</strong> junto da autoridade de controlo em Portugal: <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong> (<a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.cnpd.pt</a>).</li>
            </ul>
            <p className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs md:text-sm">
              Para exercer qualquer um destes direitos, basta enviar um pedido por escrito para <a href={`mailto:${config.email}`} className="text-primary font-bold">{config.email}</a> ou por correio para a nossa morada na Guia, Pombal.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
