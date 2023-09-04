'use client'

import Image from "next/image";
import { motion } from 'framer-motion';

export function About() {
  return (
    <>
      <div className="container py-16">
        <h1 className="font-bold text-3xl text-[#01B8A8]">
          Sobre:
        </h1>

        <div className="w-full my-8 border-b border-b-gray-800" />

        <motion.div className="mt-[60px] flex items-start justify-between flex-col-reverse lg:flex-row gap-6 lg:gap-56"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/about-image.png"
            width={365}
            height={365}
            alt="about-image"
          />

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            O template no Notion dedicado à preparação para o ENEM é uma ferramenta essencial para estudantes que buscam o sucesso nesse exame desafiador. Com ele, você pode criar um plano de estudos personalizado, definir metas claras e monitorar seu progresso em todas as disciplinas. <br className="mt-1" />

            <br className="mt-1" />  O template oferece seções específicas para cada matéria, permitindo que você organize recursos, anotações e exercícios de forma eficiente. Além disso, possui um calendário integrado para agendar revisões e simulados. <br className="mt-1" />

            <br className="mt-1" /> A funcionalidade de rastreamento de desempenho permite que você avalie seu progresso ao longo do tempo, identificando áreas de foco. Ele também oferece dicas e técnicas de estudo para otimizar sua preparação. <br className="mt-1" />

          </motion.p>
        </motion.div>
      </div>
    </>
  )
}