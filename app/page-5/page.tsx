"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pag from "@/public/images/5.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              Sembolizm
            </span>
            <p className="pb-6 font-medium">
            (19. Yüzyıl Sonları)
            &quot;Sembolistler ise dediler ki &apos;Gerçeği herkes zaten görüyor. Biz onu sembollerle, soyut imgelerle anlatalım.&apos; İşte sembolizm böyle doğdu. Anlamlar gizli, her şey biraz daha mistik.&quot;
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#ffefd6] p-9">
        <Image src={pag} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
