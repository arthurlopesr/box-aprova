import Image from "next/image";

type AccessCardProps = {
  phrase: string
}

export function AccessCard({ phrase }: AccessCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-white text-[#01B8A8] flex fllex-col gap-2 transition-all">
      <div className="flex flex-col items-center">
        <Image
          src="/images/Star.svg"
          width={50}
          height={50}
          alt="Star"
        />
        <div className="flex flex-col items-center justify-center mt-2 font-semibold text-center">
          {phrase}
        </div>
      </div>
    </div>
  );
}