'use client'

import {motion} from 'framer-motion'

export function Bonus() {
  return (
    <div className="container">
      <motion.div 
        className="p-6 rounded-[50px] bg-gradient-to-b from-[#01B8A8] to-[#021030] lex fllex-col gap-2 transition-all mt-14 text-center"
        initial={{ opacity: 0, y: 200, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bold text-3xl text-[#fff]">
          + bônus Manual de Reta Final
        </h1>
        <p className="mt-2">
          O ebook pensado com as melhores estratégias de priorização e rendimento pra te dar mais resultado em pouco tempo até a prova!
        </p>
      </motion.div>
    </div>
  )

}