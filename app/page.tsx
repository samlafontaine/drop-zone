import Image from "next/image";
import { rozha_one } from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-start p-0 m-0">
      <div className="w-full">
        <div className="z-10 absolute flex flex-col gap-3 items-end w-full mt-10 text-4xl">
          <div
            className={`${rozha_one.className} px-7 py-2 bg-black uppercase mr-12 tracking-widest`}
          >
            drop
          </div>
          <div
            className={`${rozha_one.className} px-7 py-2 bg-black uppercase mr-10 tracking-widest`}
          >
            zone
          </div>
        </div>
        <div className="z-10 absolute flex flex-col gap-3 items-end text-4xl h-screen w-screen place-content-center">
          <div className="flex flex-col items-center gap-5 mr-36">
            <div className="uppercase text-black text-5xl font-black tracking-widest">
              leezy boost 103
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-2 items-center">
                <div className="flex flex-row gap-3">
                  <div className="p-5 bg-black">1</div>
                  <div className="p-5 bg-black">3</div>
                </div>
                <div className="uppercase text-black text-2xl font-black">
                  days
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="flex flex-row gap-3">
                  <div className="p-5 bg-black">1</div>
                  <div className="p-5 bg-black">3</div>
                </div>
                <div className="uppercase text-black text-2xl font-black">
                  hours
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="flex flex-row gap-3">
                  <div className="p-5 bg-black">1</div>
                  <div className="p-5 bg-black">3</div>
                </div>
                <div className="uppercase text-black text-2xl font-black">
                  mins
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="flex flex-row gap-3">
                  <div className="p-5 bg-black">1</div>
                  <div className="p-5 bg-black">3</div>
                </div>
                <div className="uppercase text-black text-2xl font-black">
                  secs
                </div>
              </div>
            </div>
            <div className="text-sm text-black uppercase text-lg font-normal">
              until drop
            </div>
          </div>
        </div>
        <Image
          src="/landing-image.jpg"
          layout="fill"
          objectFit="fill"
          alt="Drop Zone"
          className="relative z-0"
        />
      </div>
    </main>
  );
}
