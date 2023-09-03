import { Button } from "@/app/components/button/Button";
import Image from "next/image";
import { FiCheck } from "react-icons/fi"
import { SiNotion } from "react-icons/si"

const LIST_MOCK = [
  {
    id: 1,
    title: 'Centralização de Informações',
  },
  {
    id: 2,
    title: 'Controle de Revisão',
  },
  {
    id: 3,
    title: 'Flexibilidade na Estruturação',
  },
  {
    id: 4,
    title: 'Gerenciamento de Tarefas',
  },
  {
    id: 5,
    title: 'To-do list',
  },
  {
    id: 6,
    title: 'Portabilidade',
  },
  {
    id: 7,
    title: 'Acompanhe seus Hábitos',
  },
  {
    id: 8,
    title: 'Mais produtividade',
  }


]

interface HeroSectionProps {

}
export function HeroSection(props: HeroSectionProps) {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lb:pb[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px] flex flex-col items-center justify-center">

          <Image
            src="/images/hero-icon.svg"
            width={190}
            height={186}
            alt="hero-icon"
            className="mb-10 flex flex-col-reverse lg:flex-row mt-4"
          />

          <h1 className="text-6xl font-medium">Meu Plano ENEM</h1>
          <p className="mt-4 text-lg">
            Se organizar de maneira estratégica
            <strong className="mt-10 text-emerald-400"> nunca foi tão fácil!</strong>
          </p>

          <div className="grid grid-cols-2 items-start justify-between flex-col-reverse lg:flex-row gap-5 mt-10">
          
          {LIST_MOCK.map((item) => (
            <p key={item.id}>
              <FiCheck className="inline-block mr-2 text-emerald-400 font-semibold" />
              {item.title}
            </p>
          ))}

          </div>

          <div className="flex mt-10 items-center">
            <Button>
              <SiNotion />
              <a href="https://pay.kiwify.com.br/0PEPFEH" target="_blank">
                QUERO O MEU PLANER ENEM!
              </a>
            </Button>
          </div>

        </div>

        <Image
          className="rounded-2xl"
          width={520}
          height={504}
          src="/images/profile-pic2.png"
          alt="profile-pic"
        />
      </div>
    </section>
  )
}