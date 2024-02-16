import { rozha_one } from "./fonts";
import Countdown from "./hooks/countdown";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-start p-0 m-0">
      <div className="w-full">
        <div className="z-10 absolute flex flex-col gap-3 items-end w-full mt-10 text-4xl">
          <div
            className={`${rozha_one.className} px-5 py-1 bg-black uppercase mr-12 tracking-widest text-white tracking-[0.2em]`}
          >
            drop
          </div>
          <div
            className={`${rozha_one.className} px-5 py-1 bg-black uppercase mr-10 tracking-widest text-white tracking-[0.2em]`}
          >
            zone
          </div>
        </div>
        <div className="z-10 absolute flex flex-col gap-3 text-4xl h-screen w-screen justify-end md:items-end md:place-content-center">
          {" "}
          <Countdown />
        </div>
        <div className="h-screen bg-[url('https://github.com/diffagency/drop-zone/blob/master/images/landing.jpg?raw=true')] relative z-0"></div>
        {/*<Image
          src="/landing-image.jpg"
          layout="fill"
          objectFit="fill"
          alt="Drop Zone"
          className="relative z-0"
        />
  */}
      </div>
    </main>
  );
}
