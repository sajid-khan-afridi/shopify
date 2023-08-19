import Image from "next/image";
import Link from "next/link";
import { data } from "@/components/hira/data";

export default async function Home() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 justify-center items-center gap-y-8 mt-24">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-2 mx-auto">
          <Link href={`/collections/${item.name}`}>
            <Image
              src={item.bgPic}
              alt="item.alt"
              width={250}
              height={300}
              className="max-h-[250px] object-cover object-top"
            />
            <div className="pdh">{item.name}</div>
            <div className="pdp">{item.heading}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
