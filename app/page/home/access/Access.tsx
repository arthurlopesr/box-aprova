'use client'

import { AccessCard } from "@/app/components/accessCard/AccessCard";
import { Slider } from "@/app/components/slider/Slider";
import { Bonus } from "@/app/components/bonus/Bonus";
import { motion } from 'framer-motion'

const data = [{
  id: 1,
  phrase: "Check de TODOS os conteúdos, por tópico e subtópicos!"
},
{
  id: 2,
  phrase: "Calculadora automática de revisões de acordo com seu rendimento no assunto."
},
{
  id: 3,
  phrase: "Monitoramento de crescimento em provas antigas e simulados."
},
{
  id: 4,
  phrase: "Controle de desempenho nas redações + 20 ideias de temas extra."
},
{
  id: 5,
  phrase: "Tabelas de planejamento pré e durante o Sistema de Seleção Unificada (SISU)."
},
{
  id: 6,
  phrase: "Cronômetro pomodoro e quantidade de blocos de estudo realizados."
}]

export function Access() {
  return (
    <div className="container">
      <h1 className="font-bold text-3xl text-[#01B8A8]">
        Você terá acesso:
      </h1>

      <div className="w-full my-8 border-b border-b-gray-800" />

      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-10 mt-[60px]">
        {data.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <AccessCard
              key={item.id}
              phrase={item.phrase}
            />
          </motion.div>
        ))}
      </div>

      <Bonus />
      <Slider />
    </div>
  )
}