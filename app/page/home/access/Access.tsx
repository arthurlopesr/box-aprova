import { AccessCard } from "@/app/components/accessCard/AccessCard";

export function Access() {
  return (
    <div className="container">
      <h1 className="font-bold text-3xl text-[#01B8A8]">
        Você terá acesso:
      </h1>
      
      <div className="w-full my-8 border-b border-b-gray-800"/>

      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-10 mt-[60px]">
        <AccessCard
          phrase="Check de TODOS os conteúdos, por tópico e subtópicos!"
        />
        <AccessCard
          phrase="Calculadora automática de revisões de acordo com seu rendimento no assunto."
        />
        <AccessCard
          phrase="Monitoramento de crescimento em provas antigas e simulados."
        />
        <AccessCard
          phrase="Controle de desempenho nas redações + 20 ideias de temas extra."
        />
        <AccessCard
          phrase="Tabelas de planejamento pré e durante o Sistema de Seleção Unificada (SISU)."
        />
        <AccessCard
          phrase="Cronômetro pomodoro e quantidade de blocos de estudo realizados."
        />
      </div>

    </div>

  )
}