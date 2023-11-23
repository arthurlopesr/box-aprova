'use client'

import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { ButtonSales } from "../buttonSales/ButtonSales";
import { motion } from 'framer-motion'

export function SalesCard() {
  return (
    <div className="container">
      <div className="flex justify-center mt-[60px]">
        <motion.div
          className="w-[700px] h-[1080px] bg-white p-7 text-center rounded-3xl flex flex-col items-center"        >
          <h2 className="text-xl font-bold text-gray-700">
            Para adquirir seu planejador ENEM, só na BLACK FRIDAY:
          </h2>

          <div className="flex items-start flex-col">
            <p className="font-medium text-gray-500 mt-3 text-start">
              <FiCheck className="inline-block mr-2 text-emerald-800 font-semibold" size={20} />
              Template conteúdo, revisão, redação, simulados e SISU planejado
            </p>
            <div className="w-full my-1 border-b border-b-gray-800" />

            <p className="font-medium text-gray-500 mt-3 text-start">
              <FiCheck className="inline-block mr-2 text-emerald-800 font-semibold" size={20} />
              Passo a passo de acesso e mini aulas ensinando como usar as ferramentas
            </p>
            <div className="w-full my-1 border-b border-b-gray-800" />

            <p className="font-medium text-gray-500 mt-3 text-start">
              <FiCheck className="inline-block mr-2 text-emerald-800 font-semibold" size={20} />
              To do list, contagem de dias até a prova, timer e contador de blocos
            </p>
            <div className="w-full my-1 border-b border-b-gray-800" />

            <p className="font-medium text-gray-500 mt-3 text-start">
              <FiCheck className="inline-block mr-2 text-emerald-800 font-semibold" size={20} />
              Organizador semanal, mensal e anual
            </p>
            <div className="w-full my-1 border-b border-b-gray-800" />

            <p className="font-medium text-gray-500 mt-3 text-start">
              <FiCheck className="inline-block mr-2 text-emerald-800 font-semibold" size={20} />
              Bônus Manual de Reta Final
            </p>
            <div className="w-full my-1 border-b border-b-gray-800" />
          </div>

          <Image
            className="flex justify-center mt-5 items-center"
            src={'/images/sales-card-image.png'}
            width={500}
            height={600}
            alt="Sales Card Image"
          />

          <p className="text-3xl font-bold text-gray-400 mt-3 text-start">
            de <span className="line-through text-gray-400">R$ 87,90</span> por
          </p>
          <p className="text-2xl font-bold text-gray-500 mt-3 text-start lg:text5xl">
            R$27,90 à vista
          </p>
          <p className="text-lg font-bold text-emerald-700 mt-3 text-start lg:text-xl">
            ou até 6x de R$5,15
          </p>

          <ButtonSales >
            <a href="https://pay.kiwify.com.br/2nrkppN" target="_blank">
              QUERO APROVEITAR A BLACK!
            </a>
          </ButtonSales>
        </motion.div>

      </div>
    </div>
  )
}