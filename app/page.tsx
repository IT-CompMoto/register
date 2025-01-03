
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full">
      <div>

        <div className="banner">
         
          <Image
            src="/PageTrackday.jpg"
            width={1000}
            height={760}
            className=""
            alt="Screenshots of the Superbikemag Trackday&Trophy 2025 "
          />

        </div>

        <div className="mt-5 mb-16 px-4  justify-items-center" >
          <div className="grid text-center w-full md:w-1/2 lg:w-1/3">

            <Link
              href="/register"
              className="btn rounded-full w-full h-12 my-10  bg-yellow-500 hover:bg-yellow-200 hover:border-black md:text-xl"
            >
              ลงทะเบียน
            </Link>
            <Link
              href="/register/history"
              className="btn rounded-full w-full h-12 mb-10 border p-2 bg-yellow-500 hover:bg-yellow-200 hover:border-black md:text-xl"
            >
              ตรวจสอบสถานะ
            </Link>
            <Link
              href="/"
              className="btn rounded-full w-full h-12 mb-10 border p-2 bg-yellow-500 hover:bg-yellow-200 hover:border-black md:text-xl"
            >
              รายละเอียดและกฎกติกาการแข่งขัน
            </Link>

          </div>
        </div>



      </div>
    </main>
  );
}
