'use client'

import Image from "next/image";
import { motion } from 'framer-motion';

export function Author() {
  return (
    <>
      <div className="container py-16">
        <h1 className="font-bold text-3xl text-[#01B8A8]">
          Apresentação da autora:
        </h1>

        <div className="w-full my-8 border-b border-b-gray-800" />

        <motion.div className="mt-[60px] flex items-start justify-between flex-col-reverse lg:flex-row gap-6 lg:gap-56"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/raissa.jpeg"
            width={365}
            height={365}
            alt="about-image"
            className="rounded-xl"
          />

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            Como vai, futuro aprovado?<br className="mt-1" />

            <br className="mt-1" />  Meu nome é Raíssa Magalhães, estudante de Medicina da <span className="font-bold">UFMG</span> e autora do seu <b>Notion ENEM</b>. Criei um template com todas as ferramentas e automações que otimizaram meu tempo em uma fase tão difícil como o vestibular. A partir de organização e planejamento estratégico fui conseguindo escalar meus resultados até os tão sonhados <span className="font-bold text-[#01B8A8]">818,3 de média</span>.
            <br className="mt-1" />

            <br className="mt-1" />Use e abuse de todo e template, que esse material também te leve ao seu último ENEM!⚡️<br className="mt-1" />

          </motion.p>
        </motion.div>
      </div>
    </>
  )
}