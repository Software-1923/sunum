"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Link bileşenini import etmelisiniz

import robot from "@/public/images/1.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              Klasisizm
            </span>
            <p className="pb-6 font-medium">
            (17. Yüzyıl)
            Başlangıç noktamız Klasisizm.
            Bu akım, tıpkı eski Yunan ve Roma gibi akıl, düzen ve uyum seven bir yapıdaydı.
            Yani her şey yerli yerinde olmalıydı. Klasisizmde duygular değil, mantık ön plandaydı. - Yapımcı{" "}
              <a
                href="https://www.instagram.com/d_mr.softwarx/"
                target="_blank"
                rel="noreferrer"
                className="pb-1 text-zinc-800 dark:text-zinc-100 underline font-medium"
              >
                Berkay
              </a>{" "}
            </p>

            <div className="flex flex-col items-center">
              
              {/* Siyah kutucuk */}
              <div className="mt-5 w-full h-1 bg-black"></div>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#d6ebe9] p-9">
        <Image src={robot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
